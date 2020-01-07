<?php
include 'db.php';
$email = $_POST["email"];
$question = $_POST["message"];
$c->query("INSERT INTO questions (email, question) VALUES ('" . $email . "', '" . $question . "')");
header('Location: ' . $_SERVER['HTTP_REFERER']);
$admins = $c->query("SELECT * FROM admins");
if ($admins && $admins->fetch_assoc()) {
    while ($admin = $admins->fetch_assoc()) {
        $fcmID = $admin["fcm_id"];
        $url = 'https://fcm.googleapis.com/fcm/send';
        $fields = array(
            'registration_ids' => array(
                $fcmID
            ),
            'data' => array(
                "message" => $question
            )
        );
        $fields = json_encode($fields);
        $headers = array(
            'Authorization: key=AIzaSyCVSi5WORbT-B0CoGTwyhzosEjGaE8e7UQ',
            'Content-Type: application/json'
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
        $result = curl_exec($ch);
        curl_close($ch);
    }
}