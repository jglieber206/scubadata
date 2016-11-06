(function() {
  var app = angular.module('webScraper', []);


// this controller should take parameters of domain, start date, end date, and depth of search, then make a call to the domain API (logic in python document?) to return a list of all article URLS
  app.controller=('SearchController', function($scope) {
    var domain = document.getElementById("domain");
    var startDate = document.getElementById("startDate");
    var endDate = document.getElementById("endDate");
    var depthOfSearch = document.getElementById("depth");
    $scope.list = [];
    $scope.submit = function() {
      if($scope.domain) {
        $scope.list.push(this.domain);
      }
    }
    // $scope.products = apiCall;
  });

// this controller will use the total articles being scraped (or places that the model is looking for articles with the given parameters) compared to the articles that have already been found and generate a "progress" report or bar to be displayed while results are being generated. This will only display after the query has been submitted and before the results have been fully returned
  app.controller('ProgressController', function($scope) {

  });

// this controller may not be entirely necessary depending on the capabilities of the API, but should take an array of all article URLs and compile their
  app.controller('ArticleScrapeController', function($scope) {
    $scope.products = urls;
    this.showProgress = function(urls) {
      return this.articleTitle;
    }
    // $scope.products = urls.articleTitle;
  });

  // test case variables
  var domain = "nytimes.com";
  var urls = [
    {
      articleTitle: "Political article one example yay",
      publicationDate: "2016-10-23",
      url: "http://www.nytimes.com/2016/10/24/us/politics/hillary-clinton-campaign-donald-trump.html?&hp&action=click&pgtype=Homepage&clickSource=story-heading&module=a-lede-package-region&region=top-news&WT.nav=top-news&_r=0"
    },
    {
      articleTitle: "Article two about some other shit",
      publicationDate: "2016-10-22",
      url: "http://www.cnn.com/2016/10/23/politics/hillary-clinton-donald-trump-presidential-polls/index.html"
    }
  ]
})


