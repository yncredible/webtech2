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
    		<h1 id="vText">Terrappke doen!?</h1>
    	</div>
   		<div id="weather" class="col-sm-4 temp">
   			<h2></h2><canvas id="icon" width="75" height="75"></canvas>
   		</div>
    </div>
    <div class="row">
		<div class="col-sm-6">
			<p id="message">Ga je binnekort verder studeren en hou je net zoals ons van knappe websites bouwen..?</p>
		</div>
		<div class="col-sm-6">
			<form action="" method="post">
				<input type="email" required placeholder="Uw emailadres" name="email">
				<input type="submit" value="inschrijven" name="btnSignup">
			</form>
		</div>
    </di>


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/skycons.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>