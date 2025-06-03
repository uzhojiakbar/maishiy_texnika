<?php
header('Content-Type: application/json');

$host = "localhost";
$user = "root";
$pass = "";
$db = "ustalar_production";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'error' => 'DB connection error']);
    exit;
}

$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$device = $_POST['device'] ?? '';
$address = $_POST['address'] ?? '';
$date = $_POST['date'] ?? '';

if ($name && $phone && $device && $address && $date) {
    $stmt = $conn->prepare("INSERT INTO ustalar_production (name, phone, device, address, date, status) VALUES (?, ?, ?, ?, ?, 'bajarilmadi')");
    $stmt->bind_param("sssss", $name, $phone, $device, $address, $date);
    $success = $stmt->execute();
    $stmt->close();
    echo json_encode(['success' => $success]);
} else {
    echo json_encode(['success' => false, 'error' => 'Missing fields']);
}
$conn->close();
?>
