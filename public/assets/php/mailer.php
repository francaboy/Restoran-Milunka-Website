<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $datetime = $_POST['datetime'] ?? '';

    $to = "srdjan.msevic@gmail.com"; // Vaš e-mail
    $subject = "Nova rezervacija - Restoran Milunka";
    $message = "Ime: $name\nE-mail: $email\nDatum i vrijeme: $datetime";
    $headers = "From: no-reply@milunka.com\r\nReply-To: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Rezervacija poslana!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Greška pri slanju."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Neispravan zahtjev."]);
}
?>