<?php
include 'db.php';
$results = $c->query("SELECT * FROM socials");
if ($results && $results->num_rows > 0) {
    $row = $results->fetch_assoc();
    echo json_encode($row);
}