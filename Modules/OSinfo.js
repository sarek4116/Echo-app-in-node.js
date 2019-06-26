var os = require('os');
var timeConverter = require('./timeConv');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
    console.log('Uptime: ~', timeConverter.print(uptime));
    console.log('CPU model:', cpu);
    console.log('System:', type);
    console.log('Release:', release);

}

exports.print = getOSinfo;