<?php
include 'db.php';
$newsID = intval($_POST["news_id"]);
$comments = [];
$results = $c->query("SELECT * FROM comments WHERE news_id=" . $newsID);
if ($results && $results->num_rows > 0) {
    while ($row = $results->fetch_assoc()) {
        array_push($comments, $row);
    }
}
echo json_encode($comments);