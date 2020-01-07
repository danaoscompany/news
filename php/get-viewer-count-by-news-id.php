<?php
include 'db.php';
$id = intval($_POST["news_id"]);
$results = $c->query("SELECT * FROM viewers WHERE news_id=" . $id);
if ($results && $results->num_rows > 0) {
    $row = $results->fetch_assoc();
    $count = intval($row["total"]);
    echo $count;
} else {
    echo 0;
}