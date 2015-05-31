/// <reference path="../jquery-1.5.1.js" />


var console = console || {};
console.log = function (message) {
    var d = new Date();
    $('#consoleOutput').append('<div>' + d.toLocaleTimeString() + ' - ' + message + '</div>');
};

console.logError = function (message) {
    var d = new Date();

    $('#consoleOutput').append('<div class="error">' + d.toLocaleTimeString() + ' - ' + message + '</div>');
};

console.clear = function () {
    $('#consoleOutput').empty();
};


window.onerror = function (msg, url, line) {
    var d = new Date();
    $('#consoleOutput').append('<div class="error">' + d.toLocaleTimeString() + ' - ' + msg + '</div>');
};

