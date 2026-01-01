<?php
// Handle CORS (Penting agar Vue bisa akses PHP)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

// Koneksi Database
$host = 'localhost';
$db   = 'db_portofolio';
$user = 'root'; // Sesuaikan user database kamu
$pass = '';     // Sesuaikan password database kamu

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Logic sederhana: Ambil data projects
    $stmt = $pdo->query("SELECT * FROM projects ORDER BY id DESC");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'status' => 'success',
        'data' => $data
    ]);

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>