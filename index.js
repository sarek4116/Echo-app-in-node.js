var OSinfo = require('./Modules/OSInfo');

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('beforeCommand', function (instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function () {
    console.log('Finished command');
});


process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break
            case '/getOSinfo':
                OSinfo.print();
                break
            default:
                process.stderr.write('Wrong instruction!\n');
                process.stdout.write('Node version is: ' + process.versions.node + ' Language is: ' + process.env.LANG);
        }
        emitter.emit('afterCommand');
    }
});

var fs = require('fs');
var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function (err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});

fs.readdir('../Echo-app-in-node.js', function (err, file) {
    fs.writeFile('index2.js', file, (err) => {
        if (err) throw
        console.log('Zapisano!'.rainbow);
    })
})