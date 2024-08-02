const { app, BrowserWindow, Notification, ipcMain, Tray, Menu } = require('electron');
const path = require('path');

let mainWindow;
let tray;
let reminderIntervals = {
    standUpInterval: 60 * 60 * 1000,
    stretchInterval: 2 * 60 * 60 * 1000,
    eyeCareInterval: 20 * 60 * 1000,
    waterInterval: 90 * 60 * 1000,
    ergonomicCheckInterval: 4 * 60 * 60 * 1000,
};

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    mainWindow.loadFile('src/index.html');
    mainWindow.on('close', (event) => {
        if (!app.isQuiting) {
            event.preventDefault();
            mainWindow.hide();
        }
        return false;
    });
}

app.whenReady().then(() => {
    createWindow();
    createTray();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    startReminders();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

function createTray() {
    tray = new Tray(path.join(__dirname, 'trayIcon.png'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Open Settings', click: function () {
                mainWindow.show();
            }
        },
        {
            label: 'Quit', click: function () {
                app.isQuiting = true;
                app.quit();
            }
        }
    ]);
    tray.setToolTip('Healthy Reminders');
    tray.setContextMenu(contextMenu);

    tray.on('click', () => {
        mainWindow.show();
    });
}

function showNotification(title, body) {
    new Notification({ title, body }).show();
}

function startReminders() {
    const reminders = [
        {
            interval: reminderIntervals.standUpInterval,
            message: 'Time to stand up and move around!',
        },
        {
            interval: reminderIntervals.stretchInterval,
            message: 'Time for some stretching exercises!',
        },
        {
            interval: reminderIntervals.eyeCareInterval,
            message: 'Follow the 20-20-20 rule for your eyes!',
        },
        {
            interval: reminderIntervals.waterInterval,
            message: 'Time to drink some water!',
        },
        {
            interval: reminderIntervals.ergonomicCheckInterval,
            message: 'Check your ergonomic setup!',
        },
    ];

    reminders.forEach(reminder => {
        setInterval(() => {
            showNotification('Healthy Reminder', reminder.message);
        }, reminder.interval);
    });
}

ipcMain.on('save-settings', (event, settings) => {
    reminderIntervals = settings;
    startReminders();
});
