module.exports =  async(lat,lon) => {

  try{
    lat = parseInt(lat);
    lon =parseInt(lon);
    require('dotenv').config();
    const axios = require("axios");
    const {data : weather} = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.CLIENT_TOKEN}`);
    console.log(`Il fait ${(weather.current.temp - 273.15).toFixed(2)}`)
  }catch(err){
    console.log("\n"+err.message + "\nSVP Entez soit : {nom de la vile} + full(pour plus d'infos),ville \nsoit : latitude,longitude")
  }
  
}




