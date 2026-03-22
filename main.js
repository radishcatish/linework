const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    title: 'Linework',
    backgroundColor: '#18160f',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // allow canvas capture + media recorder
      webSecurity: false
    }
  })

  win.loadFile('linework-web.html')

  // remove default menu bar
  win.setMenuBarVisibility(false)
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
