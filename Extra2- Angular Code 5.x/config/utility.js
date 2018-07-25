//1. Standard node module
//used to read and resolve static path for
//all resources u=in current app 
var path = require('path');
//__dirname ==> read static path from app root
// .. navigate to all sub-folders 
var approot = path.resolve(__dirname, '..');

function rootpath(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [approot].concat(args));
}

exports.root = rootpath;