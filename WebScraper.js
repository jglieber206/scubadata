/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const request = require("tinyreq");

var urlArray = new Array();

for (int i = 0; i < 10; i ++) {
    request(urlArray[i], function (err, body) {
    console.log(err || body); // Print out the HTML
    });
}

const cheerio = require("cheerio"); //WTF is a cheerio?

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
        req(url, (err, body) = > {
        if (err) { return cb(err); }

        // 2. Parse the HTML
        let $ = cheerio.load(body)
                , pageData = {}
        ;
                // 3. Extract the data
                Object.keys(data).forEach(k = > {
        pageData[k] = $(data[k]).text();
        });
                // Send the data in the callback
                cb(null, pageData);
        });
                }

// Get articles in a list
for (int i = 0; i < 10; i ++) {
scrapeIt(urlArray[i], {
listItem: ".article"
        , name: "articles"
        , data: {
        createdAt: {
        selector: ".date"
                , convert: x = > new Date(x)
        }
        , title: "a.article-title"
                , tags: {
                selector: ".tags"
                        , convert: x = > x.split("|").map(c = > c.trim()).slice(1)
                }
        , content: {
        selector: ".article-content"
                , how: "html"
        }
        }
}, (err, page) = > {
console.log(err || page);
}
