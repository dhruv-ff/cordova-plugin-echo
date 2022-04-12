function Echo() {
}

Echo.prototype.show = function (message, callback) {
    cordova.exec(callback, function (err) {
        callback('Nothing to echo.');
    }, "Echo", "echo", [message]);
};

Echo.install = function () {
    if (!window.plugins) {
        window.plugins = {};
    }

    window.plugins.echo = new Echo();
    return window.plugins.echo;
};

cordova.addConstructor(Echo.install);