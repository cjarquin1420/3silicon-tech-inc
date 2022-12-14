
const { BrowserWindow, app } = require('electron')
const path = require('path')

function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences:{
            nodeIntegration: true,
        },
    })
    if (app.isPackaged){
        mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
    } else {
    mainWindow.loadURL("http://localhost:3000");
    }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin"){
        app.quit();
    }
})

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
})