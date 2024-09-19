const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const execFile = require("node:child_process").execFile;
const { dialog } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
  ipcMain.handle("getFile", () => {
    return dialog.showOpenDialog({
      properties: ["openFile"],
    });

    //instead of anony create a seperate async??
    // return new Promise((resolve, reject) => {
    //   execFile(
    //     "./term",
    //     ['-msg="Does this cat?"'],
    //     (error, stdout, stderror) => {
    //       if (error) {
    //         console.log(error);
    //       }
    //       resolve(stdout ? stdout : stderror);
    //     }
    //   );
    // });
  });

  ipcMain.handle("testText", (event, value) => {
    return new Promise((resolve, reject) => {
      execFile(
        "./main",
        ["import", "config.toml"],
        (error, stdout, stderror) => {
          if (error) {
            console.log(error);
          }
          resolve(stdout ? stdout : stderror);
        }
      );
    });
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
