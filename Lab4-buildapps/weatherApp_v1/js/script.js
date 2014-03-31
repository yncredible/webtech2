$(document).ready(function(){ 

        navigator.geolocation.getCurrentPosition(success, error);

        function success(position)
        {

            var apiKey = 'b580f6e8e74d610083d96671f3aaedcd';
            var url = 'https://api.forecast.io/forecast/';
            var lati = position.coords.latitude;
            var longi = position.coords.longitude;
            var data;

            $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?&units=si", function(data) {

            console.log(data);
            
            var dayArray = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            var nday1 = data.daily.data[1];
            var nday2 = data.daily.data[2];
            var nday3 = data.daily.data[3];

            var todayicon = data.currently.icon;
            var day1icon = nday1.icon;
            var day2icon = nday2.icon;
            var day3icon = nday3.icon;

            var skycon = new Skycons({"color": "#333"});
            skycon.add("icon", todayicon);
            skycon.play();

            var skycon1 = new Skycons({"color": "#FFF"});
            skycon1.add("icon1", day1icon);
            skycon1.play();

            var skycon2 = new Skycons({"color": "#FFF"});
            skycon2.add("icon2", day2icon);
            skycon2.play();

            var skycon3 = new Skycons({"color": "#FFF"});
            skycon3.add("icon3", day3icon);
            skycon3.play();



            $('#today .day').text(dayArray[new Date(data.currently.time*1000).getDay()]);
            $('#today .temp').text(Math.round(data.currently.temperature) + "°");
            $('#today .summ').text(data.currently.summary);
            $('#today .tempMin').text(Math.round(data.daily.data[1].temperatureMin) + "° - ");
            $('#today .tempMax').text(Math.round(data.daily.data[1].temperatureMax) + "°");

            $('#week .summ').text(data.daily.summary);

            $('.nday1 .day').text(dayArray[new Date(nday1.time*1000).getDay()]);
            $('.nday1 .tempMin').text(Math.round(nday1.temperatureMin) + "° - ");
            $('.nday1 .tempMax').text(Math.round(nday1.temperatureMax) + "°");

            $('.nday2 .day').text(dayArray[new Date(nday2.time*1000).getDay()]);
            $('.nday2 .tempMin').text(Math.round(nday2.temperatureMin) + "° - ");
            $('.nday2 .tempMax').text(Math.round(nday2.temperatureMax) + "°");

            $('.nday3 .day').text(dayArray[new Date(nday3.time*1000).getDay()]);
            $('.nday3 .tempMin').text(Math.round(nday3.temperatureMin) + "° - ");
            $('.nday3 .tempMax').text(Math.round(nday3.temperatureMax) + "°");

            });
        }

        function error(err) 
        {
          console.warn('ERROR(' + err.code + '): ' + err.message);
          $("#warning").text("Het was ongemogelijk uw geolocatie te bepalen");
        };


});