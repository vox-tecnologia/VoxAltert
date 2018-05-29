var copydir = require('copy-dir');

var origin = ['./src/app/alert', './src/app/alert-confirm'];
var dest = ['./libs/alert', './libs/alert-confirm'];

for (let index = 0; index < 2; index++) {
  copydir(origin[index], dest[index], function(err){
    if(err){
      console.log(`Error: ${err}`);
    } else {
      console.log('Copy Success');
    }
  });
}

