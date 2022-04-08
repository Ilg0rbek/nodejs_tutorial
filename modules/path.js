const path = require('path')

console.log(__dirname);
console.log(__filename);

// bu bizni file turgan popka nomini chiqaradi
console.log(path.basename(__dirname));

// bu biz ishlayotgan file nomini chiqaradi
console.log(path.basename(__filename));

// bu biz ishlayotgan file nomini chiqaradi
console.log(path.dirname(__filename));

// bu bizning ishlayotgan file formatini qaytaradi
console.log(path.extname(__filename));

// file documentatinons

const fileObj = path.parse(__filename)

console.log(fileObj);