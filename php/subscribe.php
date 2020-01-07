<?php
include 'db.php';
$email = $_POST["email"];
$c->query("INSERT INTO subscribers (email) VALUES ('" . $email . "')");
header('Location: ' . $_SERVER['HTTP_REFERER']);