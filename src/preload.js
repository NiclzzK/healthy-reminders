const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    sendSettings: (settings) => ipcRenderer.send('save-settings', settings),
});
