<?php

//session
session_start();
session_unset();

$content = file_get_contents('../../user.json');
$data = json_decode($content, true);
$numOfElement = count($data["user"]);
$data["user"][$numOfElement]["username"] = trim($_POST["username"]);
$data["user"][$numOfElement]["password"] = trim($_POST["password"]);
$data["user"][$numOfElement]["fullName"] = trim($_POST["fullName"]);
$data["user"][$numOfElement]["sex"] = $_POST["sex"];
$data["user"][$numOfElement]["email"] = trim($_POST["email"]);
$data["user"][$numOfElement]["datatype"] = "user";

$fp = fopen("../../user.json", "w");
fputs($fp, json_encode($data));
fclose($fp);

$name = "username";
$_SESSION[$name] = trim($_POST[$name]);

header("Location:../home.php");
exit();
