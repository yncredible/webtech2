<?php 
    if(!empty($_POST))
    {
        $file = fopen("files/mailinglist.txt", "a+");
        fwrite($file, $_POST['email']."\n");
        fclose($file);
    }
?>