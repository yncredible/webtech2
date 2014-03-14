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

                var cTemp = Math.round(data.currently.temperature);
                var cType = data.currently.icon;

                switch(cType)
                {
                    //clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night
                    case "clear-day":
                        if(cTemp >= 20)
                        {
                            $("h1").text("Absoluut terraskes weer!");
                        }
                        else
                        {
                            $("h1").text("Terraskes weer!");
                        }
                    break;

                    case "partly-cloudy-day":
                        if(cTemp >= 20)
                        {
                            $("h1").text("Absoluut terraskes weer!");
                        }
                        else
                        {
                            $("h1").text("Terraskes weer!");
                        }
                    break;

                    default:
                        $("h1").text("Geen terraskes weer!");
                    break;

                }


                $('#weather h2').text(cTemp + "°");

                var skycon = new Skycons({"color": "#333"});
                skycon.add("icon",cType);
                skycon.play();

            });
        }

        function error(err) 
        {
            console.warn('ERROR(' + err.code + '): ' + err.message);
            $("#warning").text("Het was ongemogelijk uw geolocatie te bepalen");
        };


});