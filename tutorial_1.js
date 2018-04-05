/**
 * Run following commands to start local server:
 * npm init
 * npm i request --save
 * npm i express --save
 * npm i eventsource --save
 * node tutorial_1.js
 *
 * Go to http://localhost:3001/index
 *
 */
  

/*
Copyright (c) 2018, artofus.com <info@artofus.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

*/


//@todo check npm on Baidu      @res Tried and installed npm multiple times with new instances created
//@todo license      @res Added ISC license npm uses 
//@todo readme.md      @res Added readme file
//@todo change details      @res Removed all instances of using the words 'Mouth' or 'Face' or related. 
//@todo config file for user info domain info      @res Striped out the user info to the config.json file


// Remove all instances of internal names like MOU or face. CO, MT, FF 
// Move API endpoints and user information to a separate config.json file.  MT, FF
// Change name to tutorial1.  FF
// Add in License and copyright information.  AG, FF
// Add Readme.md file for instructions and installation guide that includes
// a complete description of each of the install steps. Including all steps
//  within the install process.  FF
// Add in required OS and tool dependencies. Ubuntu 16.04 etc  FF
// Add ICS license info for npm package.  FF
// Test npm installation process on Baidu instance in China.  CO, FF, MT
// Need to change html to support different resolution screens. FF, MT
// Document the internal code e.g. what is the reason for: var badperson  FF
// Ensure variables are cleaned.  FF

console.log('Start init');
const config = require("./config.json");
const request = require('request');
const express = require('express');
const EventSource = require('eventsource');

const badPerson = '914f9d75_38ab_4987_86ae_779ff786b319';// Put bad guy's personId here
//The html page will hightlight the cell when a bad guy is recognized

const loginEndPoint = config.apiEndPoint.login;
const streamEndPoint = config.apiEndPoint.stream;
const getImgEndPoint = config.apiEndPoint.getImg;

// object contains data for login in hos management
const user_data = {
  username: config.userInfo.userName,
  password: config.userInfo.passWord,
  json: true,
  requestAuthToken: true
};
console.log('Finish init');


// setup application port
var port = process.env.port || 3001;
// create express application
var app = express();
app.use(express.static('public'));

// set handler on route /stream for get sse connection on FE/
app.get('/stream', function (req, res) {
  console.log('Setting up connection');

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  var promise = new Promise((resolve, reject) => {
    // The request to hos management for login user and get auth0_token
    request.post(loginEndPoint, { json: user_data }, function (err, res, body) {
      console.log('statusCode ' + res.statusCode);
      console.log("res: %j", res);
      if (err) { console.log(err); return console.log(err); }
      resolve(res.body['auth0_token']);
    });
  });
  // if promise have status resolve, we call function, and pass auth0_token by first argument
  promise.then((auth_token) => {
    // object with configuration for streamEndPoint
    var options = {
      headers: { Authorization: `Bearer ${auth_token}` },
      https: { rejectUnauthorized: false }
    };

    var evt = new EventSource(streamEndPoint, options);

    // set handler on onopen event.
    evt.onopen = function () {
      console.log('Connection established');
      // set response header for SSE conection
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Connection': 'keep-alive'
      });
    };
    // set handler on message event. The callback function received msg object that contains response data from loginEndPoint.
    evt.on('message', function (msg) {
      console.log('envent received');
      var data = JSON.parse(msg.data);
      // Check, if data has user picture id, we request this picture from HOS_FACE
      if (data.sensors[0].observs[0].pic) {
        request.get(getImgEndPoint + `/get?id=${data.sensors[0].observs[0].pic}`, options, function (err, response, body) {
          if (err) console.log('Error: ', err);
          // If data received successfull, transfer data to frontend
          console.log('data: ' + JSON.stringify(data) + '\n\n');
          console.log('body: ' + JSON.stringify(body) + '\n\n');

          if (body) {
            var personId = data.sensors[0].observs[0].personId;
            var bodyjson = data;
            try {
              bodyjson["image"] = JSON.parse(body).image;

              console.log('personId: ' + personId + '\n\n');
              console.log('badPerson: ' + badPerson + '\n\n');

              if (personId === badPerson)
                bodyjson["personNote"] = '不受欢迎/Not welcome';//bad person
              else if (personId)
                bodyjson["personNote"] = "VIP";
              else
                bodyjson["personNote"] = "";

              var outputMsg = JSON.stringify(bodyjson);
              res.write('data: ' + outputMsg + '\n\n');

              console.log('outputMsg:' + outputMsg + '\n\n');
            } catch (error) {
              console.log('error: ' + error);
            }
            
          }
        });
      };
    });
    // Set handler on error event
    evt.on('error', function (msg) {
      console.log('Error: ', msg); 
      res.send('Error response');
    });
  });
});

// set handler for route /index. handler return file index.html
app.get('/index', function (req, res) {
  console.log('sendfile');
  res.sendFile(`${__dirname}/index_tutorial_1.html`);
});
// start listening port
app.listen(port, function () {
  console.log('Server started on port', port);
  console.log('Please open up a browser and go to http://localhost:3001/index');
});


