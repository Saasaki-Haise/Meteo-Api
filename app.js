const nameVille = document.querySelector("#lieu");
const descript = document.querySelector("#descript");
const temperature = document.querySelector("#temp");
const humiditer = document.querySelector("#hum");
const icone = document.querySelector("#icn");
const heure = document.querySelector("#hour");
let ville = "Paris";
const APIKey = "1613d15366e49d99faf965a3c247bf3a";
const validRecherche = document.querySelector("#valid");


validRecherche.addEventListener("click", function(){
    let ville = document.querySelector("#bar").value;
    request(ville);

})
axios.get("https://api.apixu.com/v1/current.json?key=9e7a402560384698834100634192305&q=" + ville).then(function(rep){
    heure.innerHTML = rep.data.location.localtime;
})

function request (ville){
axios.get( 'https://api.openweathermap.org/data/2.5/weather?q='+ ville + '&units=metric'+'&APPID=' + APIKey)
.then(function(response){
    console.log(response);
    var Temp = response.data.main.temp;
    temperature.innerHTML = Math.floor(Temp)+"°" ;
    var Humide = response.data.main.humidity;
    humiditer.innerHTML = Humide+"%" ;
    nameVille.innerHTML = response.data.name;
    descript.innerHTML = response.data.weather[0].description;
    axios.get("https://api.apixu.com/v1/current.json?key=9e7a402560384698834100634192305&q=" + ville).then(function(rep){
    heure.innerHTML = rep.data.location.localtime;
})
    if (response.data.weather[0].description == "clear sky"){
        icone.setAttribute("src" , "img/clear sky.png");
        return;
    }
    if (response.data.weather[0].description == "few clouds"){
        icone.setAttribute("src" , "img/few clouds.png");
        return;
    }
    if (response.data.weather[0].description == "scattered clouds"){
        icone.setAttribute("src" , "img/scattered clouds.png");
        return;
    }
    if (response.data.weather[0].description == "broken clouds"){
        icone.setAttribute("src" , "img/broken clouds.png");
        return;
    }
    if (response.data.weather[0].description == "shower rain"){
        icone.setAttribute("src" , "img/shower rain.png");
        return;
    }
    if (response.data.weather[0].description == "rain"){
        icone.setAttribute("src" , "img/rain.png");
        return;
    }
    if (response.data.weather[0].description == "thunderstorm"){
        icone.setAttribute("src" , "img/thunderstorm.png");
        return;
    }
    if (response.data.weather[0].description == "snow"){
        icone.setAttribute("src" , "img/snow.png");
        return;
    }
    if (response.data.weather[0].description == "mist"){
        icone.setAttribute("src" , "img/mist.png");
        return;
    }
    
    
  })}
  request(ville);