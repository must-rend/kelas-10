<?php
    if (!isset($_SESSSION['email'])) {
        header("Location: index.php");
    }
?>

<h1>Selamat Datang <?= $_SESSION ['email']?></h1>