var xmlhttp = new XMLHttpRequest();
var url = "https://randomuser.me/api/?result=3";
 
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var zap = JSON.parse(this.responseText);
    var imie = zap.results[0].name['first'];
    var nazwisko = zap.results[0].name['last'];
    var email = zap.results[0].email;
    var zdjecie = zap.results[0].picture.large;
    var narodowosc = zap.results[0].nat;
    var wiek = zap.results[0].dob['age'];
 
    document.getElementById("dane").innerHTML = imie + " " + nazwisko;
    document.getElementById("zdjecie").style.backgroundImage  = "url("+zdjecie+")";
    document.getElementById("email").innerHTML = "<br />" + email;
    document.getElementById("nat").innerHTML = "<br />" + "Nationality: " + narodowosc;
    document.getElementById("dob").innerHTML = "<br />" + "Age: " + wiek;
 
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();