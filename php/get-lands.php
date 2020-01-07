<?php
include 'db.php';
$lands = [];
$results = $c->query("SELECT * FROM lands");
if ($results && $results->num_rows > 0) {
    while ($row = $results->fetch_assoc()) {
        array_push($lands, $row);
    }
}
echo json_encode($lands);