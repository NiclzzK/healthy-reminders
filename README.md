# Healthy Reminders (HeRe)

Healthy Reminders is a simple Electron-based background application that helps you maintain healthy habits while working at your computer. It provides push notifications to remind you to stand up, stretch, follow the 20-20-20 rule for your eyes, drink water, and check your ergonomic setup.

## Features

- **Push Notifications**: Regular reminders for healthy activities.
- **Configurable Intervals**: Customize the frequency of reminders.
- **System Tray**: Runs in the background with a tray icon for easy access.
- **Detailed Explanations**: Provides detailed explanations for each reminder.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/NiclzzK/healthy-reminders.git
   cd healthy-reminders
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

To start the application, run:
```sh
npm start
```

The application will start in the background and display a tray icon. You can access the settings or quit the application from the tray menu.

## Usage

1. **Open Settings**: Click on the tray icon and select "Open Settings" to configure the reminder intervals.
2. **Save Settings**: Adjust the intervals for each reminder and click "Save Settings".
3. **Receive Notifications**: The application will send notifications at the configured intervals.

## Download

You can download the latest version of Healthy Reminders from the [Releases](https://github.com/NiclzzK/healthy-reminders/releases) page.

### Installation

1. Download the appropriate version for your operating system.
2. Extract the downloaded ZIP file.
3. Run the executable file (`HealthyReminders.exe`) to start the application.

## Development

### Project Structure

- `main.js`: Main process script.
- `preload.js`: Preload script for secure context bridging.
- `src/index.html`: HTML file for the settings window.
- `src/renderer.js`: Renderer process script for handling user interactions.

### Scripts

- `npm start`: Start the application.

## Security

- **Node Integration Disabled**: Node integration is disabled in the renderer process for security.
- **Context Isolation Enabled**: Context isolation is enabled to prevent untrusted code from accessing Electron internals.
- **Secure IPC Communication**: Uses `contextBridge` and `ipcRenderer` for secure communication between the renderer and main processes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Acknowledgements

- [Electron](https://www.electronjs.org/)
- [Node.js](https://nodejs.org/)

## Contact

For any questions or suggestions, please open an issue.

---

Thank you for using Healthy Reminders! Stay healthy and productive!