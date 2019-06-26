function timeConverter(uptime) {
    var hours = Math.floor(uptime / 3600).toFixed(0);
    var minutes = Math.floor((uptime - hours * 3600) / 60).toFixed(0);
    var seconds = Math.floor(uptime - hours * 3600 - minutes * 60).toFixed(0);
    return hours + 'h ' + minutes + 'm ' + seconds + 's ';
};

exports.print = timeConverter;