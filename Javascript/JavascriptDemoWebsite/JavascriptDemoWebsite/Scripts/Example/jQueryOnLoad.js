/// <reference path="../jquery-1.5.1.js" />

function addEvent(obj, evType, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evType, fn, false);
        return true;
    }
    else
        if (obj.attachEvent) {
            var r = obj.attachEvent("on" + evType, fn);
            return r;
        }
        else {
            return false;
        }
}

addEvent(window, 'load', function () {
    console.log("Message 1");
});

addEvent(window, 'load', function () {
    console.log("Message 2");
});




$(document).ready(function () {

});


$().ready(function () {

});


$(function () {

});