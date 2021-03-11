const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

console.log(process.argv);

const fetcher = function(url, path) {
  request(url, (error, response, body) => {
    if (error) throw error;
    write(body, path);
  });
};

const write = function(data, path) {
  fs.writeFile(path, data, (err) => {
    if (err) {
    console.log('error');
    }
   else {
   console.log(`Downloaded and saved ${data.length} bytes to ${path}`);
   }
  });
};

fetcher(url, path);

//used https://github.com/davemgj84/page-fetcher/blob/master/fetcher.js to troubleshoot at 12:00am when I wanted to die