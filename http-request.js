// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
         console.log("ERROR!")
       })
       .on('response', function (response) {                           // Note 3
         console.log('Downloading!')
         console.log('Response Message: ', response.statusMessage)
         console.log('Content Type: ', response.headers['content-type'])
       })
       .on('end', function () {
          console.log("Download Complete!")
       })
       .pipe(fs.createWriteStream('./future.jpg'), function () {
       });               // Note 4


// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. creating a new file
