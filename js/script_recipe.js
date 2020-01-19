var xmlhttp = new XMLHttpRequest();
var klucz = [47725, 1155935, 170412, 1607613, 1191834, 846719, 574203, 1348071, 640960, 1312048, 846750, 1767412, 1155935, 16125, 1155935];
var random_index = Math.floor(Math.random() * klucz.length);
var url = "https://api2.bigoven.com/Recipe/" + klucz[random_index] + "?api_key=vU231JWNs6s7Pb5K99lBSt1NpBPGr6Z7";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var zap = JSON.parse(this.responseText);
    console.log(zap);
    var opis = zap.Description;
    var przepis = zap.Instructions;
    var danie = zap.Title;
    var kuchnia = zap.Cuisine + ' - ' + zap.Category;
    var zdjecie2 = zap.ImageURL;

    document.getElementById("opis").innerHTML = opis;
    document.getElementById("przepis").innerHTML = przepis;
    document.getElementById("danie").innerHTML = danie;
    document.getElementById("kuchnia").innerHTML = kuchnia;
    document.getElementById("zdjecie2").src = zdjecie2
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();