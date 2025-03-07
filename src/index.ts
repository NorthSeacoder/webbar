import type { ConfigurationChangeEvent } from 'vscode'
import { computed, ref, watchEffect } from '@reactive-vscode/reactivity'
import { useCommand, useStatusBarItem } from 'reactive-vscode'
import { Disposable, env, StatusBarAlignment, Uri, workspace } from 'vscode'
import { logger } from './utils'

interface ButtonConfig {
  id: string
  icon?: string
  text?: string
  priority: number
  alignment: 'left' | 'right'
  tooltip?: string
  url: string
}

export function activate() {
  logger.info('WebBar 扩展激活')
  const disposables: Disposable[] = []

  // 创建一个响应式引用来存储配置
  const configRef = ref<ButtonConfig[]>([])

  // 更新配置的函数
  const updateConfig = () => {
    const config = workspace.getConfiguration('webBar').get<ButtonConfig[]>('webBarButtons', [])
    logger.info(`配置更新: 读取到 ${config.length} 个按钮配置`)
    configRef.value = config
  }

  // 初始化配置
  updateConfig()

  // 监听配置变化
  const configurationDisposable = workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
    if (event.affectsConfiguration('webBar')) {
      updateConfig()
    }
  })
  disposables.push(configurationDisposable)

  // 获取配置的响应式计算属性
  const buttonsConfig = computed(() => configRef.value)

  // 注册打开URL的命令
  useCommand('webBar.openUrl', (url: string) => {
    const uri = Uri.parse(url)
    env.openExternal(uri)
  })

  // 动态管理状态栏项
  watchEffect(() => {
    const buttons = buttonsConfig.value
    const statusBarItems: Disposable[] = []

    // 创建状态栏按钮
    buttons.forEach((btn) => {
      const alignment
        = btn.alignment === 'left' ? StatusBarAlignment.Left : StatusBarAlignment.Right

      // 确保至少有icon或text其中之一
      const displayText = btn.icon && btn.text
        ? `${btn.icon} ${btn.text}`
        : btn.icon || btn.text || ''

      if (!displayText) {
        logger.warn(`按钮 ${btn.id} 缺少显示文本或图标，将被跳过`)
        return
      }

      logger.info(`创建状态栏按钮: ${btn.id}, 显示为: ${displayText}`)
      const statusBarItem = useStatusBarItem({
        id: btn.id,
        text: displayText,
        tooltip: btn.tooltip ?? '',
        alignment,
        priority: btn.priority,
        command: {
          command: 'webBar.openUrl',
          arguments: [btn.url],
          title: `Open ${btn.text || btn.id}`,
        },
      })
      statusBarItem.show()
      statusBarItems.push(statusBarItem)
    })

    logger.info(`共创建 ${statusBarItems.length} 个状态栏按钮`)

    // 清理函数：销毁旧状态栏项
    return () => {
      logger.info('清理状态栏按钮')
      statusBarItems.forEach(item => item.dispose())
    }
  })

  // 扩展销毁时清理
  return Disposable.from(...disposables)
}

export function deactivate() {
  logger.info('WebBar 扩展停用')
}
