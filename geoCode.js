module.exports = async (city) =>{
    require('dotenv').config();
    const axios = require("axios");
    const mess = [
        "Températue moyenne : ",
        "Températue ressentie : ",
        "Températue minimale : ",
        "Températue maximale : ",
        "Pression atmosphèrique : ",
        "Humidité de l'air : ",
        "Pression atmosphèrique au niveau de la mer : ",
        "Pression atmosphèrique au sol : "
    ]

    try{
        if(city.includes('full')){
            city = city.split("full").join("")
            const {data : weather} = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.CLIENT_TOKEN}`)
            const {lon,lat} = weather.coord
            console.log("Latitude : " + lat.toString() + "\n" + "Longitude : " + lon.toString())
            Object.keys(weather.main).map((key, index) => {
                index < 4 && (weather.main[key] =  (weather.main[key] - 273.15).toFixed(2) + " degrés celcius");
                (index === 4 || index > 5) && (weather.main[key] += " hectopascal");
                (index === 5) && (weather.main[key] += " % d'humidité");
              })
            Object.keys(weather.main).forEach((key, index) => console.log(mess[index] + weather.main[key])),
            console.log(weather.weather[0].description)
            console.log("\n\nSVP Entez soit : {nom de la vile} + full(pour plus d'infos)\nsoit : latitude,longitude\nTo exit type 'exit'\n\n")  
         }else{
                const {data : weather} = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.CLIENT_TOKEN}`)
                const {lon,lat} = weather.coord
                console.log("Latitude : " + lat.toString() + "\n" + "Longitude : " + lon.toString())
                console.log(`Il fait ${(weather.main.temp - 273.15).toFixed(2)} degrés celcius à ${city}`)
                console.log("\n\nSVP Entez soit : {nom de la vile} + full(pour plus d'infos)\nsoit : latitude,longitude\nTo exit type 'exit'\n\n")
         }
    }catch(err){
        console.log("\n"+err.message + "\nSVP Entez soit : {nom de la vile} + full(pour plus d'infos)\nsoit : latitude,longitude")
    }    
}
