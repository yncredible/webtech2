<?php
	include_once("includes/getmails.inc.php");
?><!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Terrappke doen!?</title>
    <link rel="stylesheet" href="css/style.css" type="text/css">

    <!-- Bootstrap -->
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="row">
    	<div class="col-sm-8">
    		<h1 id="vText">Even het weer scannen...</h1>
    	</div>
   		<div id="weather" class="col-sm-4 temp">
   			<h2></h2><canvas id="icon" width="75" height="75"></canvas>
   		</div>
    </div>
    <div class="row">
  		<div class="col-sm-6">
  			<p id="message">Ga je binnekort verder studeren en wil je net zoals ons niets liever doen dan knappe websites, mobile apps en webapplicaties bouwen? Dan ben jij een perfecte kandidaat voor onze opleiding Interactive Multimedia Design!</p>
        <p>Kom mee een terraske doen aan onze Creativity Gym en neem meteen een kijkje in onze opleiding aan de Thomas More hogeschool in Mechelen.</p>
        <p>Laat je email adres achter en we mailen de exacte datum, locatie en tijdstip naar je door.</p>
  		</div>
  		<div class="col-sm-6">
  			<form action="" method="post">
          <div class="input-group">
            <span class="input-group-addon">@</span>
    				<input class="form-control" type="email" required placeholder="Uw emailadres" name="email" id="email">
          </div>
  				<input class="btn" type="submit" value="inschrijven" name="btnSignup" id="btnSignup">
  			</form>
  		</div>
    </div>


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/skycons.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>