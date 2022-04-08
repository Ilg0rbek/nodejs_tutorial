const os = require('os')
//bu bizga operatsion system bilan ishlashliga yordam beradi

//notbuk platfrmasi
console.log(os.platform());

//Arch
console.log(os.arch());

//CPU core
console.log(os.cpus());

//free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());

//komp qachon yongaini
console.log(os.uptime());