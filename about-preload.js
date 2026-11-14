const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('libreMusicAbout', {
  getInfo: () => ipcRenderer.invoke('libremusic:about-info'),
  openLink: (key) => ipcRenderer.send('libremusic:open-link', key),
  close: () => ipcRenderer.send('libremusic:about-close'),
});
