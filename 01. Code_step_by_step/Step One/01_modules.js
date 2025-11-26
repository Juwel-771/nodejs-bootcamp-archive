const fs = require('fs');
const os = require('os');

fs.writeFileSync("note.txt", "core module projects");
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);
console.log('Total Memory:', os.totalmem() / (1024 ** 3), 'GB');
console.log('Free Memory:', os.freemem() / (1024 ** 3), 'GB');
console.log('Uptime:', os.uptime(), 'seconds');
console.log('Home Directory:', os.homedir());
console.log('Temp Directory:', os.tmpdir());
console.log('Network Interfaces:', os.networkInterfaces());
