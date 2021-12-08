const geoCode = require("./geoCode");
const forecast = require("./forecast");

console.log("Enter : 4 args :city,(coordonnées ou ville),latitude,longitude([void] si pas d'argument \nSi 'ville' ajouter full pour toutes les infos")

const stdin = process.openStdin();

const tenki = async (city,type,lat,lon) =>{
    if(type === 'ville'){
        city = city.toString('utf8').split(" ").join("")
        city = city.toLowerCase()
        geoCode(city)
    }else if(type === 'coordonnées'){
        forecast(lat,lon)
    }
    

}
stdin.addListener("data", function (st) {
    const city = (st.toString().split(",",4))[0];
    const type = (st.toString().split(",",4))[1];;
    const lat = (st.toString().split(",",4))[2];
    const lon = (st.toString().split(",",4))[3];
    tenki(city,type,lat,lon);
})



