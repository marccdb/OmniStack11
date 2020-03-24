const express = require("express");
const app = express();

app.get("/", function(require, response){
    response.json({
        name: "Marcio Del Bianco",
        evento: "Semana OmniStack 11.0"
    })
})









app.listen(3333, function(){
    console.log("Listening to port 3333");
})