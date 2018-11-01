const Console = require('console').Console;
const consoleWrapper = new Console(process.stdout, process.stderr);
class ConsoleClass {
    static log(inStream1, inStream2) {
        let now = new Date();
        if(inStream2){
            inStream2 = `[${now}] ${JSON.stringify(inStream2)}`;
            consoleWrapper.log(inStream1,inStream2);
        } else {
            inStream1 = `[${now}] ${JSON.stringify(inStream1)}`;
            consoleWrapper.log(inStream1)
        }
    }

    static info(inStream1, inStream2) {
        let now = new Date();
        if(inStream2){
            inStream2 = `[INFO] [${now}] ${JSON.stringify(inStream2)}`;
            consoleWrapper.log(inStream1,inStream2);
        } else {
            inStream1 = `[INFO] [${now}] ${JSON.stringify(inStream1)}`;
            consoleWrapper.log(inStream1)
        }
    }

    static warn(inStream1, inStream2) {
        let now = new Date();
        if(inStream2){
            inStream2 = `[WARN] [${now}] ${JSON.stringify(inStream2)}`;
            consoleWrapper.log(inStream1,inStream2);
        } else {
            inStream1 = `[WARN] [${now}] ${JSON.stringify(inStream1)}`;
            consoleWrapper.log(inStream1)
        }
    }

    static error(inStream1, inStream2) {
        let now = new Date();
        if(inStream2){
            inStream2 = `[ERROR] [${now}] ${JSON.stringify(inStream2)}`;
            consoleWrapper.log(inStream1,inStream2);
        } else {
            inStream1 = `[ERROR] [${now}] ${JSON.stringify(inStream1)}`;
            consoleWrapper.log(inStream1)
        }
    }

    static debug(inStream1, inStream2) {
        let now = new Date();
        if(inStream2){
            inStream2 = `[DEBUG] [${now}] ${JSON.stringify(inStream2)}`;
            consoleWrapper.log(inStream1,inStream2);
        } else {
            inStream1 = `[DEBUG] [${now}] ${JSON.stringify(inStream1)}`;
            consoleWrapper.log(inStream1)
        }
    }
}

exports.console = ConsoleClass;