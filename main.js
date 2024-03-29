// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 320,
    height: 548,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    resizable: false,
    title: "Lofi Music",
    autoHideMenuBar: true,
    closable: true
  })
  mainWindow.loadURL("https://www.lofi.cafe/")
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})