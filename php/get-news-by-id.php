<?php
include 'db.php';
$id = intval($_POST["id"]);
$items = [];
$sql = "SELECT * FROM news WHERE id=" . $id;
$results = $c->query($sql);
if ($row = $results->fetch_assoc()) {
    $viewers = $c->query("SELECT * FROM viewers WHERE type='news' AND news_id=" . $id);
    if ($viewers && $viewers->num_rows > 0) {
        $viewer = $viewers->fetch_assoc();
        $row["viewers"] = intval($viewer["total"]);
    } else {
        $row["viewers"] = 0;
    }
    $comments = $c->query("SELECT * FROM comments WHERE type='news' AND news_id=" . $id);
    if ($comments && $comments->num_rows > 0) {
        $row["comments"] = $comments->num_rows;
    } else {
        $row["comments"] = 0;
    }
    $images = $c->query("SELECT * FROM news_images WHERE news_id=" . $id);
    if ($images && $images->num_rows > 0) {
        $row["img_path"] = $images->fetch_assoc()["img_path"];
    }
    $tagsJSON = [];
    $tags = $c->query("SELECT * FROM news_tags WHERE news_id=" . $id);
    if ($tags && $tags->num_rows > 0) {
        while ($tag = $tags->fetch_assoc()) {
            $tagNames = $c->query("SELECT * FROM tags WHERE id=" . $tag["tag_id"]);
            if ($tagNames && $tagNames->num_rows > 0) {
                $tagName = $tagNames->fetch_assoc();
                $tag["name"] = $tagName["tag"];
            }
            array_push($tagsJSON, $tag);
        }
    }
    $row["tags"] = json_encode($tagsJSON);
    echo json_encode($row);
} else {
    echo "";
}