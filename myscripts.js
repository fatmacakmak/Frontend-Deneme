var count = 0;
function basla() {
    document.getElementById("girisKart").style.display = "none";
    document.getElementById("girisForm").style.display = "block";
}

function iptal() {
    document.getElementById("girisKart").style.display = "block";
    document.getElementById("girisForm").style.display = "none";
    document.getElementById("buttons").style.display = "none";
}

function login() {
    var sifre = document.getElementById("sifre").value;

    if (sifre=="1234") {
        document.getElementById("buttons").style.display = "block";
        document.getElementById("girisForm").style.display = "none";
    } else {
        document.getElementById("mesaj").innerHTML="yanlış şifre girdiniz";
        count++;
    }

    if (count==3){
        document.getElementById("girisKart").style.display = "none";
        document.getElementById("girisForm").style.display = "none";
        document.getElementById("buttons").style.display = "none";
        
        alert("Kartınız bloke olmuştur artık işlem yapamazsınız. Lütfen en yakın bankaya gidiniz.");
    }
}