function tampil() {
    // document.querySelector("h1").innerText = "Belajar JavaScript";
    // document.querySelector(".container").style.backgroundColor = "red";
    // document.querySelector("#para").style.fontSize = "50px";

    // console.log(document.querySelectorAll("img") );

    // min = Math.ceil(0);
    // max = Math.floor(2);
    // let n = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(n);

    // document.querySelectorAll("img")[n].style.visibility = "visible";

    // alert(document.querySelector("#nama").value );

    document.querySelector("#hasil").value = document.querySelector("#nama").value;

    document.querySelector("#para").innerText = document.querySelector("#nama").value;
}

// btn.onclick = tampil;

// btn.onmouseover = function() {
//     alert("Hello");
// }

// btn.addEventListener('mouseover', tampil);

// btn.addEventListener('mouseover', function() {
//     alert("Hello");
// });

btn.onclick = function() {

    const nama = document.querySelector("#nama") ;

    if(nama.value == "") {
        alert("Nama harus diisi");
    }else{
        alert("Hello " + nama.value);
    }

    // let a = 3;
    // let b = 4;

    // // b = b + a;
    // // b = b * 2;
    // // b = b / 2;
    // // b = b - a;
    // // b = b % 3;
    // // b = b ** 3;
    // // b += a;
    // // b -= a;
    // // b *= a;
    // // b /= a;
    // // b %= 3;
    // b **= 3;

    // console.log(b);

    // let menu = document.querySelector("ul") ;
    // menu.removeChild(menu.children[0])

    // const nama = document.querySelector("#nama") ;
    // const judul = document.querySelector("h1") ;

    // let tampil = "belajar" ;

    // judul.innerHTML = tampil + nama.value ;

    // tampil = "Memahami" ;
    // judul.innerHTML = tampil + nama.value ;
}