// $(document).ready(function(){
    
//  var query = $("#textInput").val();
 
//  console.log


//     $("#search").on("click", function(){
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=Los%20Angeles%20International%20Airport",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
//             "x-rapidapi-key": "51948e1073mshb9e095b68967640p15c64ejsn35fc600c9a12"
//         }
//     }
    
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });
// });


//     var origin = "PHX";
//     var destination1 = "ANC";
//     var departDate = "2020-3-20";
//     var cabin = "e";
//     var currency = "USD"
//     var adults = "1"
//     var bags = "0"






//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": `https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session?origin1=${origin}&destination1=${destination1}&departdate1=${departDate}&cabin=${cabin}&currency=${currency}&adults=${adults}&bags=${bags}`,
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
//             "x-rapidapi-key": "51948e1073mshb9e095b68967640p15c64ejsn35fc600c9a12"
//         }
//     }
    
//     $.ajax(settings).then(function (response) {
//         console.log(response);
//         console.log(response.searchid);

//        var searchId = response.searchid;
       
       
//            var settings2 = {
//                "async": true,
//                "crossDomain": true,
//                "url": `https://apidojo-kayak-v1.p.rapidapi.com/flights/poll?searchid=${searchId}&currency=USD&bags=0`,
//                "method": "GET",
//                "headers": {
//                    "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
//                    "x-rapidapi-key": "51948e1073mshb9e095b68967640p15c64ejsn35fc600c9a12"
//                 }
//             }
            
//             secondAPI(settings2);
//         }).catch(//callback function to execute if error on ajax
//             );
            
//             function secondAPI(ajaxObject) {
//             $.ajax(ajaxObject).then(function (response2) {
//                 console.log(response2);
//                 });}

// })

// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://iddogino-global-weather-history-v1.p.rapidapi.com/weather?date=2018-01-11&latitude=33.9463626&longitude=-118.4010845",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "iddogino-global-weather-history-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "51948e1073mshb9e095b68967640p15c64ejsn35fc600c9a12"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

var radius = "100"
var latitude = "33"
var longitude = "-112"

var settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?radius=${radius}&lat=${latitude}&lon=${longitude}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
		"x-rapidapi-key": "51948e1073mshb9e095b68967640p15c64ejsn35fc600c9a12"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});