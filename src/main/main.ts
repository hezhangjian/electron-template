import path from "path"

const {app, BrowserWindow} = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  })

  win.loadFile(path.join(__dirname, '../renderer/index.html'))
}

app.whenReady().then(() => {
  createWindow()
})
