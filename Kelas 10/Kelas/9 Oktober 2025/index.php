belajar php
<h1>saya belajar php</h1>
<?php
    $nama = "Mas Rendi Robertho";
    $kelas = "12";
    $umur = 15;
    $alamat = "Perum Jaya Regency Blok Z No. 23";
    $hobi = "Main Gitar";
    $cita_cita = "Programmer";
    $enter = "<br>";

echo $nama;
echo $enter;
echo $kelas;
echo $enter;
echo $umur;
echo $enter;
echo $alamat;
echo $enter;
echo $hobi;
echo $enter;
echo $cita_cita;

// echo '<h1>saya sedang belajar php</h1>';
// echo 'saya kelas';
// echo ' 12 <br>';
// echo 'nama: Mas Rendi Robertho<br>';
// echo 'umur: 15 tahun<br>';
// echo 'kelas: 12<br>';
// echo 'alamat: Perum Jaya Regency Blok Z No. 23<br>';
// echo 'hobi: Main Gitar<br>';
// echo 'cita cita: Programmer<br>';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Rendi</title>
</head>
<body>
    <div>
        <h1>Identitas</h1>
        <table>
            <tbody>
                <tr>
                    <td>Nama: <?=$nama?></td>
                </tr>
                <tr>
                    <td>Kelas: <?=$kelas?></td>
                </tr>
                <tr>
                    <td>Umur: <?=$umur?></td>
                </tr>
                <tr>
                    <td>Alamat: <?=$alamat?></td>
                </tr>
                <tr>
                    <td>Hobi: <?=$hobi?></td>
                </tr>
                <tr>
                    <td>Cita cita: <?=$cita_cita?></td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>