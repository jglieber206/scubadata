// load module dependencies
const request = require("request");
const cheerio = require('cheerio');
const jquery = require('jquery');
const prettyjson = require('prettyjson');
const jsonfile = require('jsonfile');

var file  = 'output.json';

/*
request("https://api.nytimes.com/svc/search/v2/articlesearch.json", function (err, body) {
    console.log(err || docs); // Print out the HTML
});
*/

var beginDate = 20161107;
var endDate = 20161108;
var dateDiff = endDate - beginDate;

while (endDate - beginDate != 0) {
	if (dateDiff < 29) {
	request.get({
	url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  // url: "http://www.nytimes.com/",
	qs: {
		'api-key': "7187b74804ff4300b1e29e8bf330e14b",
		'q': "hillary",
		'begin_date': beginDate,
		'end_date': beginDate,
		'fl': "web_url",
		//'hl': "true"
	},
  
	}, function(err, response, docs) {
		//docs = JSON.parse(docs);
  
		//var newData = JSON.parse(docs);
		//var newData = docs.web_url;
			jsonfile.writeFile(file, docs, function(err) {
			console.error(err)
		})
		
		//console.log(docs);
		  
	})
	beginDate ++;
	
	} else {
		console.log("only same month supported");
		dateDiff = 0;
	}
}
	

jsonfile.readFile(file, function(err, obj) {
	var resultJSON = obj;
/*_____________________________________________________________
	JSONObject root = new JSONObject(resultJSON);
	JSONArray sportsArray = root.getJSONArray("sport");
	// now get the first element:
	JSONObject firstSport = sportsArray.getJSONObject(0);
	// and so on
	String name = firstSport.getString("name"); // basketball
	int id = firstSport.getInt("id"); // 40
	JSONArray leaguesArray = firstSport.getJSONArray("leagues");

// and so on, you can process leaguesArrays similarily
	
//_____________________________________________________________*/
	console.log(obj);
	//}
})

//var newData = JSON.parse(file).docs;
//console.log(obj);


/*
request('http://www.nytimes.com/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('span.comhead').each(function(i, element){
      var a = $(this).prev();
      console.log(a.text());
    });
  }
});
*/
