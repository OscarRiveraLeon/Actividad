const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000,function(){
    console.log("Server is running on port 3000")
})
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})
app.post("/bmicalculator",function(req,res){
    let laHeight = parseFloat(req.body.height);
    let laWeight = parseFloat(req.body.weight);
    bmi = (laWeight / (laHeight)**2) * 10000
    res.send(`Your BMI is ${bmi}`)

})
