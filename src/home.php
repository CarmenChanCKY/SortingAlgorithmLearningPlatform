<?php
session_start();
$content = file_get_contents('../user.json');
$data = json_decode($content, true);
$numOfElement = count($data["user"]);
$fullName = "fullName";
for ($i = 0; $i < $numOfElement; $i++) {
    if ($data["user"][$i]["username"] == $_SESSION["username"]) {
        $_SESSION[$fullName] = $data["user"][$i][$fullName];
        break;
    }
}
?>

<html>

<head>

    <title>Sorting Algorithm</title>
    <link rel="stylesheet" type="text/css" href="css/index.css" />

    <script type="text/javascript">
        // disallow back button
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };
    </script>
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
		<script>$(document).ready(function(){
		$(".navBar").load("component/navBar.html",function(){
		$("#homeActive").addClass("active");
		});
		});
	</script>
</head>

<body>

    <div class="navBar"></div>
    
    <a id="home"></a>
    <div id="main" class="text">
        <center>
            <img src="https://embedwistia-a.akamaihd.net/deliveries/70d6f4e10e2badb5ef394f00c17ad2bc1c14f6e7.jpg"
                width="800px" height="450px">
            </img>
            <p>
                <?php echo "Welcome! " . $_SESSION["fullName"]; ?>
            </p>
            <p>
                Do you want to learn more about sorting?
                <br> Do you want to learn more about data structure?
                <br> Please select a sorting technique above!
            </p>
        </center>
    </div>
</body>

</html>