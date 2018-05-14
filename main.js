const { app, BrowserWindow } = require('electron');
let window = null;

function createWindow(){
    // Initialize the window to specified dimensions
    win = new BrowserWindow({width: 1600, height:900});

    // Specify entry point
    win.loadURL('http://localhost:3000');

    // Show dev tools
    // Remove this line before distributing
    win.webContents.openDevTools()

    // Remove window once app is closed
    win.on('closed', function(){
        win = null;
    });
}

app.on('ready', createWindow);

app.on('activate', () => {
    if (win==null) {
        createWindow();
    }
});

app.on('window-all-closed', function(){
    if(process.playform!='darwin'){
        app.quit();
    }
})

