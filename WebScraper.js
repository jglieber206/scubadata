/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const request = require("tinyreq");

//int urlList
//for (urlList = 0; urlList < 10; urlList ++) {
//    request( urlList[i] , function (err, body) {
//        console.log(err || body); // Print out the HTML
//    }); 
//}

request("http://ionicabizau.net/", function (err, body) {
    console.log(err || body); // Print out the HTML
});

const cheerio = require("cheerio");

// Parse the HTML 
let $ = cheerio.load("<h2 class="title">Hello world</h2>");

// Take the h2.title element and show the text
console.log($("h2.title").text());
// => Hello world

// Import the dependencies
const cheerio = require("cheerio")
    , req = require("tinyreq")
    ;

// Define the scrape function
function scrape(url, data, cb) {
    // 1. Create the request
    req(url, (err, body) => {
        if (err) { return cb(err); }

        // 2. Parse the HTML
        let $ = cheerio.load(body)
          , pageData = {}
          ;

        // 3. Extract the data
        Object.keys(data).forEach(k => {
            pageData[k] = $(data[k]).text();
        });

        // Send the data in the callback
        cb(null, pageData);
    });
}
