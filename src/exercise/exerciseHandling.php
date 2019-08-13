<?php
session_start();
$name = $_SESSION["username"];
$type = $_GET["type"];
$correct = $_GET["correct"];
$incorrect = $_GET["incorrect"];
$level = $_GET["level"];

// connect database
include "../component/database.php";

// insert to database
$sql = "INSERT INTO exerciserecord (username, type, level, correct, incorrect) VALUES('$name', '$type', $level,$correct,$incorrect)";
if (!($result = $conn->query($sql))) {
    printf("Error: %s\n", $conn->error);
    exit();
}
