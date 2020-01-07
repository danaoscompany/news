<?php
include 'db.php';
$newsID = intval($_POST["news_id"]);
$results = $c->query("SELECT * FROM viewers WHERE news_id=" . $newsID);
if ($results && $results->num_rows > 0) {
    $c->query("UPDATE viewers SET total=total+1 WHERE news_id=" . $newsID);
} else {
    $c->query("INSERT INTO viewers (news_id, total) VALUES (" . $newsID . ", 1)");
}