<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</head>
<body>
    <div>
        <nav class="navbar navbar-expand-lg  bg-info">
  <div class="container-fluid">
    <a class="navbar-brand"><img src="images/logo.jpg" width="45" heigth="45" > SMKN 2 Buduran</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link"  href="?menu=profil">Profil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="?menu=sejarah">Sejarah</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="?menu=jurusan">Jurusan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="?menu=prestasi">Prestasi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="?menu=kegiatan">Kegiatan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="?menu=contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        <section>
        <?php
        if (isset($_GET['menu'])) {
            $isi = $_GET['menu'] ;
        if ($isi == "sejarah")
            require "pages/sejarah.php" ;
        if ($isi == "profil")
            require "pages/profil.php" ;
        if ($isi == "jurusan")
            require "pages/jurusan.php" ;
        if ($isi == "prestasi")
            require "pages/prestasi.php" ;
        if ($isi == "kegiatan")
            require "pages/kegiatan.php" ;
        if ($isi == "contact")
            require "pages/contact.php" ;
        }
        else{
            require_once "pages/profil.php" ;
        }

        if (isset ($_POST['tombol'])){
            $nama = $_POST['nama'];
            $pesan = $_POST['pesan'];
            $email = $_POST['email'];
            
            echo $nama;
            echo "<br>";
            echo $email;
            echo "<br>";
            echo $pesan;
        }
        
        ?>
        </section>

        <footer>
        <nav class="navbar fixed-bottom bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Web dibuat oleh Mas Rendi Robertho</a>
  </div>
</nav>
        </footer>
    </div>
</body>
</html>