var xmlhttp = new XMLHttpRequest();
var url = "https://randomuser.me/api/?result=3";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var zap = JSON.parse(this.responseText);
    var imie = zap.results[0].name['first'];
    var nazwisko = zap.results[0].name['last'];
    var email = zap.results[0].email;
    var zdjecie = zap.results[0].picture.large;

    document.getElementById("dane").innerHTML = imie + "<br />" + nazwisko;
    document.getElementById("zdjecie").src = zdjecie;
    document.getElementById("email").innerHTML = email;

  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();