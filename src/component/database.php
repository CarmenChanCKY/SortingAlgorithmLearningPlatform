<?php
// database server name, username, password
$conn = new mysqli('localhost', 'root', 'CKY_18022328d');
$conn->select_db("sortingAlgorithmDatabase");
if ($conn->connect_errno) {
    printf("Connect failed: %s\n", $conn->connect_error);
    exit();
}
