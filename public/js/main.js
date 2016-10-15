$(document).ready(function() {
  getWeather();
});

function searchWeather() {
	var searchQuery = $('.search').val(); // grab value from search input
  	console.log(searchQuery);
  	getWeather(searchQuery);
}

function getWeather(searchQuery) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?'; // url for the API
  var params = {
    APPID: apiKey,
    units: 'imperial'
  };
  if (searchQuery) {
    params.q = searchQuery;
  } else {
    params.id = 4930956
  }
$.ajax(url + $.param(params), {
  success: function (data) {
    $('.city').text(data.name);
    $('.temp').text(data.main.temp + ' °F');
  }, error: function (error) {
    $('.error-message').text('An error occurred!');
  }
});
}

//default result
// function getWeather() {
//   var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&id=4930956&APPID=' + apiKey;
//   $.ajax(url, {
//     success: function (data) {
//       $('.city').text(data.name);
//       $('.temp').text(data.main.temp + ' °F');
//     }
//   });
// }