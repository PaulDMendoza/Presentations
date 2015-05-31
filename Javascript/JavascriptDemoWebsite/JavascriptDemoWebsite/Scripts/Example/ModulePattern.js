// Basic module that does nothing
(function () {
    // console.log("I am a self invoking function! I didn't pollute the global object.");
})();












var moduleExposed = (function () {
    var privateText = "Here is some text";
    var privateCity = "Fullerton";
    return {
        text: privateText,
        city: privateCity
    };
})();















var importingGlobals = (function (jQuery) {
    var privateText = "Here is the importing globals text";
    var privateCity = jQuery("#cityPageTextbox").html();
    return {
        printText: function () {
            console.log(privateText);
        },
        city: privateCity
    };
})($);



