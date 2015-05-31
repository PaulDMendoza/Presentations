/// <reference path="../jquery-1.5.1.js" />

var Paul = Paul || {};
Paul.Mendoza = Paul.Mendoza || {};

Paul.Mendoza.Widget = function (widgetContainer) {
    var isMaximized = true;
    
    var widgetDiv = $('<div class="widget"></div>');
    var widgetHeader = $('<div class="header"></div>');
    var toggleBodyButton = $('<span class="minMaxButton">Min/Max</span>');
    var widgetBody = $('<div class="body">Here is some text of the widget...</div>');

    widgetContainer.append(widgetDiv);
    {        
        widgetDiv.append(widgetHeader);
        {
            toggleBodyButton.click(toggleMinMax);
            widgetHeader.append(toggleBodyButton);
        }        
        widgetDiv.append(widgetBody);
    }
    widgetContainer.append(widgetDiv);


    function toggleMinMax() {
        if (isMaximized) {
            widgetBody.hide();
        } else {
            widgetBody.show();
        }

        isMaximized = !isMaximized;
    }
};

