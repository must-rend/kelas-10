<?php
$menu = ["Home", "Kurikulum", "Kesiswaan", "Berita", "Contact"];
$pengumuman = [
    "Info PPDB 2025",
    "Jadwal UTS",
    "Libur Sekolah"
];
$program = ["Pembiasaan Adab & Etika Berkarakter Islami", "Madrasah Diniyah (Kurikulum Kepesantrenan)", "Pembinaan & Pendampingan Minat Bakat" ] ;
$nama_sekolah = "MTS Nurul Huda Sedati";
$logo = "images/mts.png";
$foto = ["images/gallery-1.jpg","images/gallery-2.jpg","images/gallery-3.jpg","images/gallery-4.jpg","images/gallery-5.jpg","images/gallery-6.jpg","images/gallery-7.jpg","images/gallery-8.jpg"];
$lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, doloremque sed. Illo nostrum nemo beatae error architecto quibusdam molestiae assumenda vel ab. At, quibusdam voluptates non est nulla iure officia!";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=$nama_sekolah?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <nav class="navbar navbar-expand bg-primary">
        <div class="container">
            <img src="<?=$logo?>" alt="" width="45" height="45" class="d-inline-block align-text-left">
            <a class="navbar-brand text-white" href="#"><?=$nama_sekolah?></a>
            <div class="navbar-nav">
                    <a class="nav-link text-white" href="#"><?= $menu[0] ?></a>
                    <a class="nav-link text-white" href="#"><?= $menu[1] ?></a>
                    <a class="nav-link text-white" href="#"><?= $menu[2] ?></a>
                    <a class="nav-link text-white" href="#"><?= $menu[3] ?></a>
                    <a class="nav-link text-white" href="#"><?= $menu[4] ?></a>
            </div>
        </div>
    </nav>

    <!-- Content -->
    <div class="container mt-4">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-md-4">
                <div class="card mb-3">
                    <div class="card-header bg-primary text-white">
                        Pengumuman
                    </div>
                    <div class="card-body">
                            <p><?= $pengumuman[0] ?></p>
                            <p><?= $pengumuman[1] ?></p>
                            <p><?= $pengumuman[2] ?></p>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        Link Penting
                    </div>
                    <div class="card-body">
                        <a href="#" class="btn btn-primary mb-2 w-100">E-Learning</a>
                        <a href="#" class="btn btn-primary w-100">Perpustakaan</a>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        Selamat Datang
                    </div>
                    <div class="card-body">
                        <h3><?=$nama_sekolah?></h3>
                        <p>MTs Nurul Huda Sedati, merupakan sekolah setingkat SMP yang mempersiapkan peserta didik dengan keterampilan pembelajaran yang kritis, kreatif, kolaboratif dan komunikatif, berbasis sains dan teknologi, serta terintegrasi dengan nilai-nilai agama dan budaya.</p>
                        <img src="<?=$foto[0]?>" class="img-fluid mb-3" alt="Sekolah" width="200">
                        <img src="<?=$foto[1]?>" class="img-fluid mb-3" alt="Sekolah" width="200">
                        <img src="<?=$foto[2]?>" class="img-fluid mb-3" alt="Sekolah" width="200">
                        <img src="<?=$foto[3]?>" class="img-fluid mb-3" alt="Sekolah" width="200">
                        <img src="<?=$foto[4]?>" class="img-fluid mb-3" alt="Sekolah" width="200">
                        <img src="<?=$foto[5]?>" class="img-fluid mb-3" alt="Sekolah" width="200">
                        <img src="<?=$foto[6]?>" class="img-fluid mb-3" alt="Sekolah" width="200">
                        <img src="<?=$foto[7]?>" class="img-fluid mb-3" alt="Sekolah" width="200">
                        <h4><?=$program[0]?></h4>
                        <p>penanaman dan pengamalan norma kesopanan dan moral yang berlandaskan ajaran Islam</p>
                        <br>
                        <h4><?=$program[1]?></h4>
                        <p>Kurikulum yang mengadopsi kepesantrenan sehingga murid mendapatkan pendalaman ilmu agama yang lebih</p>
                        <br>
                        <h4><?=$program[2]?></h4>
                        <p>serangkaian kegiatan sistematis untuk mengidentifikasi, mengembangkan, dan menyalurkan potensi murid</p>
                        <a href="#" class="btn btn-primary">Info Selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-primary text-white mt-4 p-3">
        <div class="container text-center">
            <p><?=$nama_sekolah?></p>
            <p>Dibuat oleh: Mas Rendi Robertho - Kelas 10 RPL</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>