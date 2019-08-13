<?php
// database server name, username, password
$conn = new mysqli('serverName', 'userName', 'password');
$conn->select_db("sortingAlgorithmDatabase");
if ($conn->connect_errno) {
    printf("Connect failed: %s\n", $conn->connect_error);
    exit();
}
