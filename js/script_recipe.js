var xmlhttp = new XMLHttpRequest();
var klucz = [47725, 170412, 175086, 629435, 162806, 160094, 158299, 233025, 163007, 157668, 158452, 171505, 129496, 234676, 200555, 190295, 165334, 168264, 190101, 734639];
var random_index = Math.floor(Math.random() * klucz.length);
var url = "https://api2.bigoven.com/Recipe/" + klucz[random_index] + "?api_key=vU231JWNs6s7Pb5K99lBSt1NpBPGr6Z7";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var zap = JSON.parse(this.responseText);
    var opis = zap.Description;
    var przepis = zap.Instructions;
    var p = "";
    for (i=0;i<przepis.length;i++){
      p = p + przepis[i];
      if (przepis[i]=='.'){
         p = p + "<br/>";
      }
    }
    var danie = zap.Title;
    var kuchnia = zap.Cuisine + ' - ' + zap.Category;
    var zdjecie2 = zap.ImageURL;
    var skladniki = zap.Ingredients;
    sessionStorage.setItem("liczbaKalorii", Math.round(zap.NutritionInfo.TotalCalories));
    sessionStorage.setItem("porcja", Math.round(zap.NutritionInfo.SingularYieldUnit));
    sessionStorage.setItem("tluszcz", Math.round(zap.NutritionInfo.TotalFat));
    sessionStorage.setItem("wegle", Math.round(zap.NutritionInfo.TotalCarbs));
    sessionStorage.setItem("bialko", Math.round(zap.NutritionInfo.Protein));
    sessionStorage.setItem("sol", Math.round(zap.NutritionInfo.SatFat));
    sessionStorage.setItem("sod", Math.round(zap.NutritionInfo.Sodium));
    sessionStorage.setItem("cukier", Math.round(zap.NutritionInfo.Sugar));
    var wpis = zap.Ingredients[0].Name+" - "+zap.Ingredients[0].MetricDisplayQuantity +" "+ zap.Ingredients[0].MetricUnit;
    console.log(zap);
    var listaSkl = document.getElementById("listaSkl");
    for (i=0;i<zap.Ingredients.length-1;i++){
      var punkt = document.createElement("li"); 
      var wpis = document.createTextNode(zap.Ingredients[i].Name+" - "+zap.Ingredients[i].MetricDisplayQuantity +" "+ zap.Ingredients[i].MetricUnit);
      punkt.appendChild(wpis); 
      listaSkl.appendChild(punkt); 
    }
    document.getElementById("opis").innerHTML = opis;
    document.getElementById("przepis").innerHTML = p;
    document.getElementById("danie").innerHTML = danie;
    document.getElementById("kuchnia").innerHTML = kuchnia;
    document.getElementById("zdjecie2").style.backgroundImage = "url("+zdjecie2+")";
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();