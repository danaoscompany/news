<?php
include 'db.php';
$email = $_POST["email"];
$description = $_POST["description"];
$c->query("INSERT INTO submitted_news (email, description) VALUES ('" . $email . "', '" . $description . "')");
header('Location: ' . $_SERVER['HTTP_REFERER']);