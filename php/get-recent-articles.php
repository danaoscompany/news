<?php
include 'db.php';
$start = intval($_POST["start"]);
$length = intval($_POST["length"]);
$landID = intval($_POST["land_id"]);
$results = $c->query("SELECT * FROM news WHERE type='article' AND land_id=" . $landID . " ORDER BY id DESC LIMIT " . $start . "," . $length);
$articles = [];
if ($results && $results->num_rows > 0) {
    while ($row = $results->fetch_assoc()) {
        $id = $row["id"];
        $viewers = $c->query("SELECT * FROM viewers WHERE type='article' AND news_id=" . $id);
        if ($viewers && $viewers->num_rows > 0) {
            $viewer = $viewers->fetch_assoc();
            $row["viewers"] = intval($viewer["total"]);
        } else {
            $row["viewers"] = 0;
        }
        $comments = $c->query("SELECT * FROM comments WHERE type='article' AND news_id=" . $id);
        if ($comments && $comments->num_rows > 0) {
            $row["comments"] = $comments->num_rows;
        } else {
            $row["comments"] = 0;
        }
        $images = $c->query("SELECT * FROM article_images WHERE news_id=" . $id);
        if ($images && $images->num_rows > 0) {
            $row["img_path"] = $images->fetch_assoc()["img_path"];
        }
        array_push($articles, $row);
    }
}
echo json_encode($articles);
