<!-- <form action="" method="post">
    Tanggal
    <br>
    <input type="number" name="Tanggal" placeholder="Masukkan Tanggal">
    <br>
    Bulan
    <br>
    <input type="number" name="Bulan" placeholder="Masukkan Bulan">
    <br>
    <input type="submit" name="kirim" value="Zodiak Anda ...">
</form> -->

<form action="" method="post">
    Nomor 1
    <input type="number" name="nomor1" placeholder="Masukkan Nomor 1">
    <br>
    Nomor 2
    <input type="number" name="nomor2" placeholder="Masukkan Nomor 2">
    <br>
    <input type="submit" name="jumlah" value="Jumlahkan"> 
    <input type="submit" name="kurang" value="Kurangkan">
    <input type="submit" name="kali" value="Kalikan">
    <input type="submit" name="bagi" value="Bagikan">
    
</form>

<?php

if (isset($_POST['jumlah'])) {
    $a = $_POST['nomor1'];
    $b = $_POST['nomor2'];
    echo "Hasil penjumlahan: " . tambah($a, $b);
} elseif (isset($_POST['kurang'])) {
    $a = $_POST['nomor1'];
    $b = $_POST['nomor2'];
    echo "Hasil pengurangan: " . kurang($a, $b);
} elseif (isset($_POST['kali'])) {
    $a = $_POST['nomor1'];
    $b = $_POST['nomor2'];
    echo "Hasil perkalian: " . kali($a, $b);
} elseif (isset($_POST['bagi'])) {
    $a = $_POST['nomor1'];
    $b = $_POST['nomor2'];
    echo "Hasil pembagian: " . bagi($a, $b);
}

// if (isset($_POST['kirim'])) {
//     $tanggal = $_POST['Tanggal'];
//     $bulan = $_POST['Bulan'];

//     zodiak($tanggal, $bulan);
// }

// function Belajar() {
//     echo "Hari ini saya belajar function";
// }

// Belajar();

// $tanggal = 1;

// if ($tanggal > 0 && $tanggal < 32) {
//     echo "Tanggal valid";
// } else {
//     echo "Tanggal tidak valid";
// }

function cekTanggal($tanggal) {

    if ($tanggal > 0 && $tanggal < 32) {
        // echo "Tanggal valid";
        return true;
    } else {
        // echo "Tanggal tidak valid";
        return false;
    }
}

// cekTanggal(1);
// cekTanggal(0);
// cekTanggal(100);


function zodiak($tanggal, $bulan) {
    if ($tanggal > 0 && $tanggal < 32 && $bulan > 0 && $bulan < 13) {
    if ($bulan == 1) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "Zodiak Anda: Capricorn";
        } else {
            echo "Zodiak Anda: Aquarius";
        }
    }
    if ($bulan == 2) {
        if ($tanggal > 0 && $tanggal < 19) {
            echo "Zodiak Anda: Aquarius";
        } else {
            echo "Zodiak Anda: Pisces";
        }
    }
    if ($bulan == 3) {
        if ($tanggal > 0 && $tanggal < 21) {
            echo "Zodiak Anda: Pisces";
        } else {
            echo "Zodiak Anda: Aries";
        }
    }
    if ($bulan == 4) {
        if ($tanggal >0 && $tanggal <20 ) {
            echo "Zodiak Anda: Aries";
        } else {
            echo "Zodiak Anda: Taurus";
        }
    }
    if ($bulan == 5) {
        if ($tanggal >0 && $tanggal <21 ) {
            echo "Zodiak Anda: Taurus";
        } else {
            echo "Zodiak Anda: Gemini";
        }
    }
    if ($bulan == 6
    ) {
        if ($tanggal >0 && $tanggal <21 ) {
            echo "Zodiak Anda: Gemini";
        } else {
            echo "Zodiak Anda: Cancer";
        }
    }
    if ($bulan == 7) {
        if ($tanggal >0 && $tanggal <23 ) {
            echo "Zodiak Anda: Cancer";
        } else {
            echo "Zodiak Anda: Leo";
        }
    }
    if ($bulan == 8) {
        if ($tanggal >0 && $tanggal <23 ) {
            echo "Zodiak Anda: Leo";
        } else {
            echo "Zodiak Anda: Virgo";
        }
    }
    if ($bulan == 9) {
        if ($tanggal >0 && $tanggal <23 ) {
            echo "Zodiak Anda: Virgo";
        } else {
            echo "Zodiak Anda: Libra";
        }
    }
    if ($bulan == 10) {
        if ($tanggal >0 && $tanggal <23 ) {
            echo "Zodiak Anda: Libra";
        } else {
            echo "Zodiak Anda: Scorpio";
        }
    }
    if ($bulan == 11) {
        if ($tanggal >0 && $tanggal <22 ) {
            echo "Zodiak Anda: Scorpio";
        } else {
            echo "Zodiak Anda: Sagittarius";
        }
    }
    if ($bulan == 12) {
        if ($tanggal >0 && $tanggal <22 ) {
            echo "Zodiak Anda: Sagittarius";
        } else {
            echo "Zodiak Anda: Capricorn";
        }
    }
} else { 
    echo "Tanggal atau bulan tidak valid";
}
}

// zodiak(5, 3);
// zodiak(5, 5);
// zodiak(31, 12);

// echo "<br>";

// function cekBulan($bulan) {
//     if ($bulan > 0 && $bulan < 13) {
//         return true;
//     } else {
//         return false;
//     }
// }

// cekBulan(0);

// if (cekBulan(1) && cekTanggal(6)) {
//     echo "Bulan dan tanggal valid";
// } else {
//     echo "Bulan atau tanggal tidak valid";
// }

echo "<br>";

// function luasPersegiPanjang($p, $l) {
//     $luas = $p * $l;
//     return $luas;
// }

// $p = 10;
// $l = 5;
// $t = 3;

// echo "volume persegi panjang dengan panjang $p, lebar $l, dan tinggi $t  adalah " .
// echo luasPersegiPanjang($p, $l);



function tambah($a, $b) {
    return $a + $b;
}
function kurang($a, $b) {
    return $a - $b;
}
function kali($a, $b) {
    return $a * $b;
}
function bagi($a, $b) {
    return $a / $b;
}

?>