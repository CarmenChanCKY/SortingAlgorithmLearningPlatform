<?php
session_start();
$content = file_get_contents('../user.json');
$data = json_decode($content, true);
$numOfElement = count($data["user"]);
$sex = "";
$email = "";
$username = $_SESSION["username"];
$fullName = "fullName";
for ($i = 0; $i < $numOfElement; $i++) {
    if ($data["user"][$i]["username"] == $username) {
        $sex = $data["user"][$i]["sex"];
        $email = $data["user"][$i]["email"];
        break;
    }
}
?>

<html>

<head>
    <title>User Profile</title>
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script>$(document).ready(function () {
            $(".navBar").load("./component/navBar.html", function () {
                $("#profileActive").addClass("active");
            });
        });
    </script>
</head>

<body>

    <div class="navBar"> </div>

    <a id="profile">
    </a>
    <div id="main" class="text">
        <center>
            <p id="title">User Profile
            </p>
        </center>
        <p>
            User name:
            <?php echo $_SESSION["username"]; ?>
        </p>
        <p>
            Full name:
            <?php echo $_SESSION["fullName"]; ?>
        </p>
        <p>
            Sex:
            <?php echo $sex; ?>
        </p>
        <p>
            Email address:
            <?php echo $email; ?>
        </p>
        <p>
            <center>
                <p id="title">Exercise Record
                </p>
            </center>
        </p>
        <p>
            <?php
// connect to database
include "component/database.php";
// table 1
$sql = "SELECT type, count(level) as levelCount from exerciserecord where username='$username' group by type";
if (!($result = $conn->query($sql))) {
    printf("Error: %s\n", $conn->error);
    exit();
}
echo "Playing time" . "<br>";
if (mysqli_num_rows($result) <= 0) {
    echo "No record! Please do some exercise!" . "<br>";
} else {
    echo "<table border='1' width='50%'>";
    echo "<tr><th>Type</th><th>Count</th></tr>";
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        echo "<tr>";
        foreach ($row as $col => $val) {
            echo "<td>$val</td>";
        }
        echo "</tr>";
    }
    echo "</table>" . "<br>";
}
//table 2
$sql = "SELECT type, level, max(correct) from exerciserecord where username='$username' group by type, level order by type, level";
if (!($result = $conn->query($sql))) {
    printf("Error: %s\n", $conn->error);
    exit();
}
echo "Maximum score" . "<br>";
if (mysqli_num_rows($result) <= 0) {
    echo "No record! Please do some exercise!" . "<br>";
} else {
    echo "<table border='1' width='50%'>";
    echo "<tr><th>Type</th><th>Level</th><th>Maximum score</th></tr>";
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        echo "<tr>";
        foreach ($row as $col => $val) {
            echo "<td>$val</td>";
        }
        echo "</tr>";
    }
    echo "</table>" . "<br>";
}
//table 3
$sql = "SELECT type,level,correct,incorrect FROM exerciserecord where username='$username' order by type, level;";
if (!($result = $conn->query($sql))) {
    printf("Error: %s\n", $conn->error);
    exit();
}
echo "Full Record" . "<br>";
if (mysqli_num_rows($result) <= 0) {
    echo "No record! Please do some exercise!" . "<br>";
} else {
    echo "<table border='1' width='50%'>";
    echo "<tr><th>Type</th><th>Level</th><th>Correct</th><th>Incorrect</th></tr>";
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        echo "<tr>";
        foreach ($row as $col => $val) {
            echo "<td>$val</td>";
        }
        echo "</tr>";
    }
    echo "</table>" . "<br>";
}
?>
        </p>
    </div>
</body>

</html>