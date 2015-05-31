/// <reference path="../jquery-1.5.1.js" />
/// <reference path="Demo.js" />
/// <reference path="../qunit.js" />
/// <reference path="Widgets.js" />

$(function () {

    var runTestsButton = $('<button type="button">Run Tests</button>');
    $('#main').append('<br/>');
    $('#main').append(runTestsButton);
    runTestsButton.click(demoPageTests);    
});

function demoPageTests() {

    Paul.Mendoza.Widgets.prototype.addWidget = function () {
        $('.addWidget', this.containerElem).click();
    };
    
    QUnit.test("Add Widgets", function () {
        var container = makeNewWidgetContainer();
        var controller = new Paul.Mendoza.Widgets(container);
        var widgetsTotal;

        controller.addWidget();
        controller.addWidget();
        controller.addWidget();
        widgetsTotal = $('.widget', container).length;
        equal(widgetsTotal, 3, "We expect there to be 3 widgets");
    });

    QUnit.test("Minimize All Widgets", function () {
        var container = makeNewWidgetContainer();
        var controller = new Paul.Mendoza.Widgets(container);

        controller.addWidget();
        $('.widget .header .minMaxButton', container).click();
        equal($('.widget .body:visible', container).length, 0, "None of the bodies of the widgets should be visible.");
    });

    function makeNewWidgetContainer() {
        var widgetContainer = $('<div></div>');
        widgetContainer.addClass("testingDiv");
        $('#main').append(widgetContainer);
        return widgetContainer;
    } 
}
