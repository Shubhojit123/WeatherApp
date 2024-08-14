
let apiKey = "9ccf94232b67a0f7021eaf9a142d7af6";
let api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.querySelector(".search input");
let btn = document.querySelector(".search button");
let weatherImg = document.querySelector(".weatherImg");
console.log(searchBox.value);


async function weather(city){
    const response = await fetch(api + city + `&appid=${apiKey}`);
    if(response.status == 404 || response.status == 400)
    {
        document.querySelector(".city").innerHTML = "Enter Valid City"
        document.querySelector(".city").style.fontSize = "30px";
    document.querySelector(".temp").innerHTML = "0°c";
    document.querySelector(".wind").innerHTML = "0"+" "+"km/h";
    document.querySelector(".humadites").innerHTML ="0%";
    document.querySelector(".feel").innerHTML = "Feels like"+" "+"0°c";

    }
    else
    {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";
    document.querySelector(".humadites").innerHTML = data.main.humidity+"%";
    document.querySelector(".feel").innerHTML = "Feels like"+" "+Math.round(data.main.feels_like)+"°c";
    if(data.weather[0].main == "clouds")
    {
        weatherImg.src = "overcast.png";
    }
    else if (data.weather[0].main == "clear")
    {
        weatherImg.src = "clear.png";
    }
    else if (data.weather[0].main == "Rain")
    {
        weatherImg.src = "rain.png";
    }
    else 
    {
        weatherImg.src = "overcast.png";
    }
}
}
btn.addEventListener("click",()=>{
    
    let result = searchBox.value.toLowerCase();
    let lowerCaseValue = result.trim();
    weather(lowerCaseValue);

})

