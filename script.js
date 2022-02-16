let weather = {
    "apiKey" : "64c3b298c7614c1b27eff98df5713b0e",   
    fetchWeather(ciudad){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +ciudad
        +"&units=metric&lang=es&appid="
        +this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather (data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".ciudad").innerText = "Clima en "+name;
        document.querySelector(".icono").src = "http://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".descripcion").innerText = description;
        document.querySelector(".temperatura").innerText = "Temperatura: " + Math.trunc(temp) + "° C";
        document.querySelector(".humedad").innerText = "Humedad: " + Math.trunc(humidity) + "%";
        document.querySelector(".viento").innerText = "Viento: " + Math.trunc(speed) + " Km/h";
    },
    buscar() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener('click', ()=>{
    weather.buscar();
});

document.querySelector(".search-bar").addEventListener('keyup', (event)=>{
    if (event.key == "Enter") {
        weather.buscar();
    }
})

weather.fetchWeather("Bariloche");