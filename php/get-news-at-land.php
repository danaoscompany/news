<?php
include 'db.php';
$limit = intval($_POST["limit"]);
$scope = $_POST["scope"];
$landID = intval($_POST["land_id"]);
$results = $c->query("SELECT * FROM news WHERE type='news' AND scope='" . $scope . "' AND land_id=" . $landID . " ORDER BY id DESC LIMIT " . $limit);
$news = [];
if ($results && $results->num_rows > 0) {
    while ($row = $results->fetch_assoc()) {
        $id = $row["id"];
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
        array_push($news, $row);
    }
}
usort($news, function($news1, $news2) {
    if ($news1["viewers"] > $news2["viewers"]) {
        return -1;
    } else if ($news1["viewers"] > $news2["viewers"]) {
        return 1;
    } else {
        return 0;
    }
});
echo json_encode($news);