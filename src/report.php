<?php
$content = file_get_contents('../user.json');
$data = json_decode($content, true);
$numOfElement = count($data["user"]) - 1;
include "component/database.php";
?>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <title>Report
    </title>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js">
    </script>
    <script type="text/javascript">
      google.load("visualization", "1", {
        packages:["corechart"]}
                 );
      google.setOnLoadCallback(drawChart1);
      google.setOnLoadCallback(drawChart2);
      google.setOnLoadCallback(drawChart3);
      google.setOnLoadCallback(drawChart4);
      function drawChart1() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Type');
        data.addColumn('number', 'Percentage');
        data.addRows([
          <?php
$sql = "SELECT count(distinct username) AS usercount FROM exerciserecord;";
$temp;
$result = $conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
    $temp = (int) $row['usercount'];
    echo "['Finish'," . $row['usercount'] . "],";
}
$temp2 = $numOfElement - $temp;
echo "['Have not finish'," . $temp2 . "],";
?>
                     ]);
        var options={
          'width':500,'height':300, backgroundColor: 'rgb(247, 247, 247)'};
        var chart = new google.visualization.PieChart(document.getElementById("chart1"));
        chart.draw(data,options);
      }
      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Level', 'Count'],
          <?php
$sql = "SELECT level, count(level) as levelcount FROM exerciserecord where type='Bubble' group by level order by level;";
$result = $conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
    echo "['Level " . $row['level'] . "'," . $row['levelcount'] . "],";
}
?>
                                                         ]);
        var options={
          'title':'Bubble Sort','width':500,'height':300, backgroundColor: 'rgb(247, 247, 247)'};
        var chart = new google.visualization.BarChart(document.getElementById("chart21"));
        chart.draw(data,options);
        ////
        var data = google.visualization.arrayToDataTable([
          ['Level', 'Count'],
          <?php
$sql = "SELECT level, count(level) as levelcount FROM exerciserecord where type='Insertion' group by level order by level;";
$result = $conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
    echo "['Level " . $row['level'] . "'," . $row['levelcount'] . "],";
}
?>
                                                         ]);
        var options={
          'title':'Insertion Sort','width':500,'height':300, backgroundColor: 'rgb(247, 247, 247)'};
        var chart = new google.visualization.BarChart(document.getElementById("chart22"));
        chart.draw(data,options);
        ///
        var data = google.visualization.arrayToDataTable([
          ['Level', 'Count'],
          <?php
$sql = "SELECT level, count(level) as levelcount FROM exerciserecord where type='Selection' group by level order by level;";
$result = $conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
    echo "['Level " . $row['level'] . "'," . $row['levelcount'] . "],";
}
?>
                                                         ]);
        var options={
          'title':'Selection Sort','width':500,'height':300, backgroundColor: 'rgb(247, 247, 247)'};
        var chart = new google.visualization.BarChart(document.getElementById("chart23"));
        chart.draw(data,options);
      }
      function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Level', 'Average Score'],
          <?php
$sql = "SELECT level, avg(correct) as averagecount FROM exerciserecord where type='Bubble' group by level order by level;";
$result = $conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
    echo "['Level " . $row['level'] . "'," . $row['averagecount'] . "],";
}
?>
                                                         ]);
        var options={
          'title':'Bubble Sort','width':500,'height':300, backgroundColor: 'rgb(247, 247, 247)'};
        var chart = new google.visualization.BarChart(document.getElementById("chart31"));
        chart.draw(data,options);
        ////
        var data = google.visualization.arrayToDataTable([
          ['Level', 'Average Score'],
          <?php
$sql = "SELECT level, avg(correct) as averagecount FROM exerciserecord where type='Insertion' group by level order by level;";
$result = $conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
    echo "['Level " . $row['level'] . "'," . $row['averagecount'] . "],";
}
?>
                                                         ]);
        var options={
          'title':'Insertion Sort','width':500,'height':300, backgroundColor: 'rgb(247, 247, 247)'};
        var chart = new google.visualization.BarChart(document.getElementById("chart32"));
        chart.draw(data,options);
        ///
        var data = google.visualization.arrayToDataTable([
          ['Level', 'Average Score'],
          <?php
$sql = "SELECT level, avg(correct) as averagecount FROM exerciserecord where type='Selection' group by level order by level;";
$result = $conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
    echo "['Level " . $row['level'] . "'," . $row['averagecount'] . "],";
}
?>
                                                         ]);
        var options={
          'title':'Selection Sort','width':500,'height':300, backgroundColor: 'rgb(247, 247, 247)'};
        var chart = new google.visualization.BarChart(document.getElementById("chart33"));
        chart.draw(data,options);
      }
      function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          ['Level', 'Pass rate'],
          <?php
$sql = "SELECT level, count(level) as passrate FROM exerciserecord where type='Bubble' and ((level=1 and correct>=3) or ((level=2 or level=3) and correct>=1 )) group by level order by level;";
$result = $conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
    echo "['Level " . $row['level'] . "'," . $row['passrate'] . "],";
}
?>
                                                         ]);
        var options={
          'title':'Bubble Sort','width':500,'height':300, backgroundColor: 'rgb(247, 247, 247)'};
        var chart = new google.visualization.PieChart(document.getElementById("chart41"));
        chart.draw(data,options);
        ////
        var data = google.visualization.arrayToDataTable([
          ['Level', 'Pass rate'],
          <?php
$sql = "SELECT level, count(level) as passrate FROM exerciserecord where type='Insertion' and ((level=1 and correct>=3) or ((level=2 or level=3) and correct>=1 )) group by level order by level;";
$result = $conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
    echo "['Level " . $row['level'] . "'," . $row['passrate'] . "],";
}
?>
                                                         ]);
        var options={
          'title':'Insertion Sort','width':500,'height':300, backgroundColor: 'rgb(247, 247, 247)'};
        var chart = new google.visualization.PieChart(document.getElementById("chart42"));
        chart.draw(data,options);
        ///
        var data = google.visualization.arrayToDataTable([
          ['Level', 'Pass rate'],
          <?php
$sql = "SELECT level, count(level) as passrate FROM exerciserecord where type='Selection' and ((level=1 and correct>=3) or ((level=2 or level=3) and correct>=1 )) group by level order by level;";
$result = $conn->query($sql);
while ($row = mysqli_fetch_array($result)) {
    echo "['Level " . $row['level'] . "'," . $row['passrate'] . "],";
}
?>
                                                         ]);
        var options={
          'title':'Selection Sort','width':500,'height':300, backgroundColor: 'rgb(247, 247, 247)'};
        var chart = new google.visualization.PieChart(document.getElementById("chart43"));
        chart.draw(data,options);
      }
    </script>
  </head>
  <body>
    <div id="navigation">
      <ul id="navigation_bar">
        <li id="navigation_li">
          <a class="active">Report
          </a>
        </li>
        <div class="menuRight">
          <li id="navigation_li">
            <a class="" href="logoutHandling.php">Logout
            </a>
          </li>
        </div>
      </ul>
    </div>
    <a id="report">
    </a>
    <div id="main" class="text">
      <center>
        <p id="title">Report
        </p>
      </center>
      <p>Report 1: Number of users finish at least one exercise
      </p>
      <div id="chart1" z-index="3">
      </div>
      <p>Report 2: Number of times that user is finished each exercise
      </p>
      <div id="chart21">
      </div>
      <div id="chart22">
      </div>
      <div id="chart23">
      </div>
      <p>Report 3: Average score of each exercise
      </p>
      <div id="chart31">
      </div>
      <div id="chart32">
      </div>
      <div id="chart33">
      </div>
      <p>Report 4: Pass rate of each exercise
      </p>
      <div id="chart41">
      </div>
      <div id="chart42">
      </div>
      <div id="chart43">
      </div>
      <p>Report 5: Highest score of each exercise
      </p>
      <div id="table5">
      </div>
      <?php
$sql = "SELECT type, level, username, max(correct) as maxscore FROM exerciserecord group by type,level order by type,level;";
$result = $conn->query($sql);
echo "<table border='1' width='50%'";
echo "<tr><th>Type</th><th>Level</th><th>User Name</th><th>Maximum Score</th></tr>";
while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
    echo "<tr>";
    foreach ($row as $col => $val) {
        echo "<td>$val</td>";
    }
    echo "</tr>";
}
echo "</table>" . PHP_EOL;
?>
    </div>
  </body>
</html>
