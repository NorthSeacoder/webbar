# WebBar - Quick Web Access from Status Bar

**WebBar** is a lightweight and intuitive VS Code extension that allows you to add customizable buttons to the status bar, enabling quick access to your favorite web pages with a single click.

[查看中文版 README (Chinese README)](README-zh.md)

---

## Features

-   **Customizable Status Bar Buttons**: Add buttons to the VS Code status bar to open web pages in your default browser.
-   **Flexible Configuration**: Define multiple buttons with icons, text, alignment, priority, and tooltips.
-   **Responsive Updates**: Automatically updates buttons when configuration changes, ensuring a seamless experience.
-   **Lightweight and Efficient**: Built with `reactive-vscode` for minimal performance impact.

---

## Installation

1. Open VS Code.
2. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
3. Search for `WebBar`.
4. Click **Install** to add the extension.

Alternatively, you can install the extension manually:

-   Download the `.vsix` file from the [VS Code Marketplace](https://marketplace.visualstudio.com/) or the Releases section.
-   Run the command: `code --install-extension webbar-0.0.1.vsix`.

---

## Usage

WebBar allows you to define buttons in the status bar through VS Code settings. Each button can open a web page when clicked. Follow these steps to set up your buttons:

### 1. Configure Buttons

Add your buttons by editing the `webBar.webBarButtons` setting in your VS Code configuration.

-   Open the Settings UI (`Ctrl+,` or `Cmd+,` on macOS) and search for `WebBar`.
-   Or edit `settings.json` directly by adding the following:

### Example Configuration

```json
{
  "webBar.webBarButtons": [
    {
      "id": "google",
      "icon": "$(globe)",
      "text": "Google",
      "priority": 1,
      "alignment": "right",
      "tooltip": "Search on Google",
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

### Configuration Options

| Property    | Type     | Required | Description                                                                                                                  |
| ----------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`        | `string` | Yes      | Unique identifier for the button.                                                                                            |
| `icon`      | `string` | No       | VS Code icon (e.g., `$(globe)`). See [VS Code Icon Reference](https://code.visualstudio.com/api/references/icons-in-labels). |
| `text`      | `string` | No       | Display text for the button. At least one of `icon` or `text` is required.                                                   |
| `priority`  | `number` | Yes      | Determines button order (higher value = closer to edge).                                                                     |
| `alignment` | `string` | Yes      | Position of the button (`"left"` or `"right"`).                                                                              |
| `tooltip`   | `string` | No       | Tooltip shown on hover.                                                                                                      |
| `url`       | `string` | Yes      | The URL to open when the button is clicked.                                                                                  |

### 2. View and Use Buttons

-   After saving your configuration, the buttons will appear in the VS Code status bar.
-   Click a button to open its associated URL in your default browser.

---

## Extension Settings

This extension contributes the following settings:

-   `webBar.webBarButtons`: Array of button configurations for the status bar.

## Known Issues

-   Buttons may not display if the status bar is overcrowded. Adjust the `priority` to reorder buttons.
-   Invalid URLs may fail silently. Ensure URLs are properly formatted (e.g., `https://example.com`).

---

## Release Notes

### 0.0.1

-   Initial release of WebBar.
-   Add customizable buttons to the status bar.
-   Support for left/right alignment and priority-based ordering.
-   Internationalization support (English and Chinese).

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

---

## License

This extension is licensed under the [WTFPL License](LICENSE).

---

**Enjoy using WebBar to streamline your web access in VS Code!**
