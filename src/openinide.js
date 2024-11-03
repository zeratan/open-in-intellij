"use strict";

(function() {


    const consoleLog = function(sLogfn, args) {
        let messageJson = JSON.stringify(args);
        messageJson = messageJson.split('\'').join('\\\'');
        messageJson = messageJson.split('\\n').join('\\\\n');
        const cmd = sLogfn+'(JSON.parse(\''+messageJson+'\'));';

        chrome.devtools.inspectedWindow.eval(cmd);
    };

    const devConsoleError = function(message) {
        console.error(message);
        consoleLog('console.error', message);
    };

    const devConsoleLog = function(message) {
        console.log(message);
        consoleLog('console.log', message);
    };

    console.log('Open In IntelliJ - Extension loaded');

    if (typeof localStorage["enabled"] === "undefined") {
        localStorage["enabled"] = "1"; // default
    }



})();