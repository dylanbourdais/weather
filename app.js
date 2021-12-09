const geoCode = require("./geoCode");
const forecast = require("./forecast");


const stdin = process.openStdin();

console.log("SVP Entez soit : {nom de la vile} + full(pour plus d'infos)\nsoit : latitude,longitude\nTo exit type 'exit'\n\n")

const tenki = async (city,lat,lon,len) =>{
    if(len === 1){
        city = city.toString('utf8').split(" ").join("")
        city = city.toLowerCase()
        geoCode(city)
    }else if(len === 2){
        forecast(lat,lon)
    }
    

}
stdin.addListener("data", function (st) {
    const argLen = (st.toString().split(",",3)).length
    if(st.toString().slice(0, st.length - 2) === 'exit'){
        process.exit();
    }else if(argLen === 1){
        const city = st.toString();
        tenki(city,"void","void",argLen);
    }else if(argLen === 2){
        const lat = (st.toString().split(",",2))[0];
        const lon = (st.toString().split(",",2))[1];
        tenki("void",lat,lon,argLen);
    }else{
        console.log("SVP Entez soit : {nom de la vile} + full(pour plus d'infos) \nsoit : coordonnées,latitude,longitude\nTo exit type 'exit'\n\n")
    }
    
})



