let sayi1=Number(prompt("Lütfen Sayı Giriniz"));
let sayi2=Number(prompt("Lütfen Sayı Giriniz"));

let islem=prompt("Yapmak istediğiniz işlemi seçiniz.(+,-,/,*):");

let sonuc;

if (islem === "+") {
    sonuc=sayi1 + sayi2;
}
else if (islem === "-") {
    sonuc=sayi1 - sayi2;
}
else if (islem === "/") {
    if (sayi2 === 0) {
        console.log("Bir sayıyı 0'A bölemezsiniz"); 
    }
    else{
        sonuc=sayi1 / sayi2;
    }
}
else if (islem === "*") {
    sonuc=sayi1 * sayi2;
}

else{
console.log("Geçersiz işlem! Lütfen +, -, * veya / giriniz.");
}

if (islem === "+" || islem === "-" || islem === "*" || (islem === "/" && sayi2 !== 0)) {
    console.log("Sonuç :" , sonuc);
}



