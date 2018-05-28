var copydir = require('copy-dir');

copydir('./src/app/alert', './libs/alert', function(err){
  if(err){
    console.log(`Error: ${err}`);
  } else {
    console.log('Copy Success');
  }
});
