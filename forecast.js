module.exports =  async(lat,lon) => {

  try{
    lat = parseFloat(lat);
    lon =parseFloat(lon);
    require('dotenv').config();
    const axios = require("axios");
    const {data : weather} = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.CLIENT_TOKEN}`);
    console.log(`Il fait ${(weather.current.temp - 273.15).toFixed(2)} degrés celcius à ces coordonnées\nTimezone de : ${(weather.timezone).split("/",2)[1]}`);
    console.log("\nSVP Entez soit : {nom de la vile} + full(pour plus d'infos)\nsoit : latitude,longitude\nTo exit type 'exit'\n\n")
  }catch(err){
    console.log("\n"+err.message + "\nSVP Entez soit : {nom de la vile} + full(pour plus d'infos)\nsoit : latitude,longitude\nTo exit type 'exit'\n\n")
  }
  
}




