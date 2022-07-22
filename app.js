// -----------------------------1st------------------------------------
/* function sayHello(name) {

      console.log("Hello My Love  "+name);

}
sayHello('Karan')
 */

// -----------------------------2nd [ path ] ------------------------------------

/* const path = require("path");

const pathObj = path.parse(__filename);

console.log(pathObj); */
// ------------------------------3rd [ O S ] ------------------------------------

/* const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(` Total Memory = ${totalMemory}`);
console.log(` Free Memory  = ${freeMemory}`);

 */
// -----------------------------4th [ Files ]------------------------------------

/* const fs = require("fs");
fs.readdir("./", function (err, files) {
  if (err) console.log("Error ", err);
  else console.log("Files ", files);
});
 */
// ----------------------------5th [ Events ]------------------------------------
/* const http = require("http");

const server =http.createServer( (req, res) =>{
      if(req.url ==='/'){
            res.write('L o V e')
            res.end();
      }
      if(req.url === '/api/courses'){
            res.write(JSON.stringify([ 'L' , 'O' , 'V', 'ˀ']));
            res.end();
      }

});
server.listen(3000);
console.log("3000") */

// --------------------------6th [ UnderScore ]----------------------------------

 var _ = require('underscore');
//Core Module 
// File or folder 
// node_modules

var result = _.contains([1,5,12],5)
console.log(result) 