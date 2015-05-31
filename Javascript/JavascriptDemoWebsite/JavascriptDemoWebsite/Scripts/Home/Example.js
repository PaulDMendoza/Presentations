/// <reference path="../jquery-1.5.1.js" />
/// <reference path="../ThirdParty/CodeMirror/lib/codemirror.js" />
/// <reference path="../ThirdParty/CodeMirror/lib/util/simple-hint.js" />
/// <reference path="../ThirdParty/CodeMirror/lib/util/javascript-hint.js" />

var Some = Some || {};
Some.Namespace = Some.Namespace || {};


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


var editor = CodeMirror.fromTextArea(document.getElementById("codeMirror"), {
    lineNumbers: true,
    matchBrackets: true,
    theme: 'eclipse',
    onKeyEvent: function (cm, e) {
        // Hook into F11
        if ((e.keyCode == 122 || e.keyCode == 27) && e.type == 'keydown') {
            e.stop();
            return toggleFullscreenEditing();
        }
        // Hook into ctrl-space
        if (e.keyCode == 32 && (e.ctrlKey || e.metaKey) && !e.altKey) {
            e.stop();
            return CodeMirror.simpleHint(cm, CodeMirror.javascriptHint);            
        }
    }
});


function toggleFullscreenEditing() {
    var editorDiv = $('.CodeMirror-scroll');
    if (!editorDiv.hasClass('fullscreen')) {
        toggleFullscreenEditing.beforeFullscreen = { height: editorDiv.height(), width: editorDiv.width() }
        editorDiv.addClass('fullscreen');
        editorDiv.height('100%');
        editorDiv.width('100%');
        editor.refresh();
    }
    else {
        editorDiv.removeClass('fullscreen');
        editorDiv.height(toggleFullscreenEditing.beforeFullscreen.height);
        editorDiv.width(toggleFullscreenEditing.beforeFullscreen.width);
        editor.refresh();
    }
}


$(function () {
    $('#btnRun').click(function () {

        console.clear();
        var editorText = editor.getValue();
        try {
            eval(editorText);
        }
        catch (ex) {
            console.logError(ex);
        }
    });
});

