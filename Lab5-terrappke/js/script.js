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

                $('#weather h2').text(cTemp + "°");

/*----------------------------------------*/

                var skycon = new Skycons({"color": "#333"});
                skycon.add("icon",cType);
                skycon.play();

/*----------------------------------------*/

                switch(cType)
                {
                    //clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night
                    case "clear-day":
                        if(cTemp >= 20)
                        {
                            $("h1").text("Ideaal terrappkes weer! Heb jij ook een passie voor het web & apps? Dan ben je welkom bij ons op het terras!");
                            $("body").addClass("clearday");
                        }
                        else
                        {
                            $("h1").text("Terrappkes weer! Heb jij ook een passie voor het web & apps? Dan ben je welkom bij ons op het terras!");
                            $("body").addClass("clearday");
                        }
                    break;

                    case "partly-cloudy-day":
                        if(cTemp >= 20)
                        {
                            $("h1").text("Ideaal terrappkes weer! Heb jij ook een passie voor het web & apps? Dan ben je welkom bij ons op het terras!");
                            $("body").addClass("partlycloudy");
                        }
                        else
                        {
                            $("h1").text("Terrappkes weer! Heb jij ook een passie voor het web & apps? Dan ben je welkom bij ons op het terras!");
                            $("body").addClass("partlycloudy");
                        }
                    break;

                    default:
                            $("h1").text("Wij wachten op ideaal terrappkes weer! Heb jij ook een passie voor het web & apps? Dan ben je welkom bij ons op het terras!");
                            $("body").addClass("otherweather");
                    break;

                }

/*----------------------------------------*/

                $("#email").on("keyup", function(){
                    var eValue = $(this).val();
                    var at = eValue.indexOf("@");
                    var dot = eValue.indexOf(".");

                    if(at != -1 && dot != -1)
                    {
                        $(".input-group-addon").html("&#10004;").css({"color": "#417634", "background-color": "#E0F0D5", "font-weight": "bold"});
                    }
                    else
                    {
                        $(".input-group-addon").html("&#10008;").css({"color": "darkred", "background-color": "#F1DEDE", "font-weight": "bold"});
                    }
                });

/*----------------------------------------*/

            });
        }

        function error(err) 
        {
            console.warn('ERROR(' + err.code + '): ' + err.message);
            $("#warning").text("Het was ongemogelijk uw geolocatie te bepalen");
        };


});