<?php
include 'db.php';
$newsID = intval($_GET["news_id"]);
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$comment = $_POST["comment"];
$c->query("INSERT INTO comments (news_id, name, email, phone, comment, date) VALUES (" . $newsID . ", '" . $name . "', '" . $email . "', '" . $phone . "', '" . $comment . "', NOW())");
header('Location: ' . $_SERVER['HTTP_REFERER']);