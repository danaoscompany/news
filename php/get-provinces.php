<?php
include 'db.php';
$provinces = [];
$results = $c->query("SELECT * FROM provinces");
if ($results && $results->num_rows > 0) {
    while ($row = $results->fetch_assoc()) {
        array_push($provinces, $row);
    }
}
echo json_encode($provinces);