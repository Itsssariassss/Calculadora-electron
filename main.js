const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 600,
        webpreferences: {
            nodeIntegration: true,
        },
        title: "Calculadora"
    });

    mainWindow.loadFile('index.html');
})