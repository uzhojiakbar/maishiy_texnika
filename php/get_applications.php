<?php
header('Content-Type: application/json');

$host = "localhost";
$user = "root";
$pass = "";
$db = "ustalar_production";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    echo json_encode([]);
    exit;
}

$result = $conn->query("SELECT id, name, phone, device, address, DATE_FORMAT(date, '%d/%m/%Y') as date, status FROM ustalar_production ORDER BY id DESC");
$applications = [];
while ($row = $result->fetch_assoc()) {
    $applications[] = $row;
}
echo json_encode($applications);
$conn->close();
?>
