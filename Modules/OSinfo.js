var os = require('os');
var colors = require('colors');
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
    console.log('User name:'.green, userInfo.username);
    console.log('Home dir:'.red, userInfo.homedir);
    console.log('Uptime: ~'.grey, timeConverter.print(uptime));
    console.log('CPU model:'.rainbow, cpu);
    console.log('System:'.yellow, type);
    console.log('Release:'.blue, release);

}

exports.print = getOSinfo;