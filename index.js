const Console = require('console').Console;
const consoleWrapper = new Console(process.stdout, process.stderr);

function response (level, inStream1, inStream2) {
    const template = {
      logLevel: level || 'info',
      time: new Date(),
      keywords: inStream1 || '',
      metadata: inStream2 ? inStream2 : inStream1
    };
    template.metadata = level === 'error' ? template.metadata.stack : template.metadata;
    return JSON.stringify(template)
}

class ConsoleClass {
  static log(inStream1, inStream2) {
    consoleWrapper.log(response('info', inStream1, inStream2));
  }

  static info(inStream1, inStream2) {
    consoleWrapper.log(response('info', inStream1, inStream2));
  }

  static warn(inStream1, inStream2) {
    consoleWrapper.log(response('warn', inStream1, inStream2));
  }

  static error(inStream1, inStream2) {
    consoleWrapper.log(response('error', inStream1, inStream2));
  }

  static debug(inStream1, inStream2) {
    consoleWrapper.log(response('debug', inStream1, inStream2));
  }
}

exports.console = ConsoleClass;