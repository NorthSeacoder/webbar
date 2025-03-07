# WebBar - 从状态栏快速访问网页

**WebBar** 是一款轻量且直观的 VS Code 扩展，允许您在状态栏中添加可自定义的按钮，以便一键访问您常用的网页。

[查看英文版 README (English README)](README.md)

---

## 功能特性

- **自定义状态栏按钮**：在 VS Code 状态栏中添加按钮，点击即可在默认浏览器中打开网页。
- **灵活的配置**：支持定义多个按钮，包括图标、文本、对齐方式、优先级和工具提示。
- **响应式更新**：配置更改时自动更新按钮，确保无缝体验。
- **轻量高效**：基于 `reactive-vscode` 构建，性能影响最小。

---

## 安装

1. 打开 VS Code。
2. 进入扩展视图（`Ctrl+Shift+X` 或 macOS 上为 `Cmd+Shift+X`）。
3. 搜索 `WebBar`。
4. 点击 **安装** 按钮以添加扩展。

或者，您可以手动安装扩展：
- 从 [VS Code 市场](https://marketplace.visualstudio.com/) 或 Releases 页面下载 `.vsix` 文件。
- 运行命令：`code --install-extension webbar-0.0.1.vsix`。

---

## 使用方法

WebBar 允许您通过 VS Code 设置在状态栏中定义按钮，每个按钮可打开一个网页。按以下步骤设置您的按钮：

### 1. 配置按钮
通过编辑 `webBar.webBarButtons` 设置，在 VS Code 配置中添加您的按钮。

- 打开设置界面（`Ctrl+,` 或 macOS 上为 `Cmd+,`），搜索 `WebBar`。
- 或者直接编辑 `settings.json`，添加以下内容：

### 示例配置
```json
{
  "webBar.webBarButtons": [
    {
      "id": "google",
      "icon": "$(globe)",
      "text": "Google",
      "priority": 1,
      "alignment": "right",
      "tooltip": "在 Google 上搜索",
      "url": "https://www.google.com"
    },
    {
      "id": "github",
      "icon": "$(git-branch)",
      "text": "GitHub",
      "priority": 2,
      "alignment": "left",
      "url": "https://github.com"
    }
  ]
}
```

### 配置选项
| 属性         | 类型     | 是否必填 | 描述                                                                 |
|--------------|----------|----------|-----------------------------------------------------------------------------|
| `id`         | `string` | 是       | 按钮的唯一标识符。                                                 |
| `icon`       | `string` | 否       | VS Code 图标（例如 `$(globe)`）。参见 [VS Code 图标参考](https://code.visualstudio.com/api/references/icons-in-labels)。 |
| `text`       | `string` | 否       | 按钮的显示文本。`icon` 或 `text` 至少需提供一个。                  |
| `priority`   | `number` | 是       | 确定按钮排序（数值越大越靠边）。                                   |
| `alignment`  | `string` | 是       | 按钮位置（`"left"` 或 `"right"`）。                                |
| `tooltip`    | `string` | 否       | 鼠标悬停时显示的工具提示。                                         |
| `url`        | `string` | 是       | 点击按钮时打开的网页地址。                                         |

### 2. 查看并使用按钮
- 保存配置后，按钮将出现在 VS Code 状态栏中。
- 点击按钮即可在默认浏览器中打开对应的网页。

---

## 扩展设置

本扩展提供以下设置：

- `webBar.webBarButtons`：状态栏按钮的配置数组。

## 已知问题

- 若状态栏过于拥挤，按钮可能无法显示。调整 `priority` 值以重新排序按钮。
- 无效的 URL 可能会静默失败。确保 URL 格式正确（例如 `https://example.com`）。

---

## 版本说明

### 0.0.1
- WebBar 初版发布。
- 支持在状态栏添加可自定义按钮。
- 支持左右对齐和基于优先级的排序。
- 支持国际化（中文和英文）。

---

## 贡献

欢迎贡献代码！请按以下步骤操作：

1. Fork 本仓库。
2. 创建一个新分支（`git checkout -b feature/your-feature`）。
3. 提交您的更改（`git commit -am 'Add new feature'`）。
4. 推送到分支（`git push origin feature/your-feature`）。
5. 创建一个新的 Pull Request。

---

## 许可证

本扩展基于 [WTFPL 许可证](LICENSE) 发布。

---

**使用 WebBar 在 VS Code 中轻松访问网页，提升您的工作效率！**
