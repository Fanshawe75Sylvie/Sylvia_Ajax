<?php

$user = "root";
$pass = "root"; // blank screen for windows pc
$host = "localhost";
$db = "cooperInfo"; // whatever you called your database

$conn = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'utf8');

// if (!$conn) {
//   echo 'connected!';
//   echo 'something broke';
//   exit;
// }
$myQuery = "SELECT * FROM mainmodel ";
$result = mysqli_query($conn, $myQuery);

$rows =array();

while(  $row = mysqli_fetch_assoc($result)) {
  $rows[] = $row;
}

if (isset($_GET ['carModel'])) {
  $car = $_GET['carModel'];

  $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";
// send the query
  $result = mysqli_query($conn, $myQuery);
// get the result
  $row = mysqli_fetch_assoc($result);
  echo json_encode($row);
}

// var_dump($rows);
// echo json_encode($rows);

// get a single row (one result) using a query parameter
if (isset($_GET['getVideos'])) { //see if there's a parameter
 $myQuery = "SELECT * FROM video"; // whatever comes after the ?

 $result = mysqli_query($conn, $myQuery);
 $rows = array();

while($row = mysqli_fetch_assoc($result)) {
 $rows[] = $row;
}

 echo json_encode($rows);
}
?>
