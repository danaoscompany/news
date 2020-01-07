<?php
include 'db.php';
$id = intval($_POST["news_id"]);
$count = $c->query("SELECT * FROM comments WHERE news_id=" . $id)->num_rows;
echo $count;