/// <reference path="../jquery-1.5.1.js" />
/// <reference path="Widget.js" />

var Paul = Paul || {};
Paul.Mendoza = Paul.Mendoza || {};

Paul.Mendoza.Widgets = function (containerElem) {

    var widgets = [];
    var widgetsDiv = $('<div></div>');
    var addWidgetLink = $('<a>Add Widget</a>');

    this.containerElem = containerElem;
    
    addWidgetLink.addClass("addWidget");

    $(containerElem).append(widgetsDiv);
    $(containerElem).append(addWidgetLink);

    addWidgetLink.click(function () {
        var w = new Paul.Mendoza.Widget(widgetsDiv);
        widgets.push(w);
    });
};

WidgetsController = new Paul.Mendoza.Widgets($('#widgetsSection')); 