const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('libreMusicImport', {
  importCookies: (rawJson) => ipcRenderer.invoke('libremusic:import-cookies', rawJson),
  closeAndReload: () => ipcRenderer.send('libremusic:import-cookies-done'),
});
