var observed = (function () {

    var broadcastCallbacks = [];

    return {
        broadcast: function (callback) {
            if (typeof callback === "function") {
                broadcastCallbacks.push(callback);
            } 
            else {
                var broadcastCallbacksLength = broadcastCallbacks.length;
                for (var b = 0; b < broadcastCallbacksLength; b++) {
                    var bCallback = broadcastCallbacks[b];
                    bCallback();
                }
            }
        }
    };
})();

observed.broadcast(function () {
    console.log("Event broadcast");
});

observed.broadcast();