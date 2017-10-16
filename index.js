const fs = require('fs');

var config;
fs.readFile('package.json', 'utf8', function(error, data) {
  if (error)
    throw error;
  else {
    config = JSON.parse(data);
    console.log(config);
  }
});
