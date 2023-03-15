let username=prompt("Adınızı giriniz.");
let name = document.getElementById('name');
name.innerHTML = username

function date(){
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById("clock").innerHTML=date;
}

setInterval(date, 1000);