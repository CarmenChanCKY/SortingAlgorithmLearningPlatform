<?php

//session
session_start();
session_unset();

$name = "username";
$_SESSION[$name] = trim($_POST[$name]);
$content = file_get_contents('../user.json');
$data = json_decode($content, true);
$numOfElement = count($data["user"]);

/* if usertype=administrator, go to report.php */
for ($i = 0; $i < $numOfElement; $i++) {
    if (strcmp($data["user"][$i]["username"], $_POST[$name]) == 0 && strcmp($data["user"][$i]["usertype"], "administrator") == 0) {
        header("Location:./report.php");
        exit();
    }
}
header("Location:./home.php");
exit();
