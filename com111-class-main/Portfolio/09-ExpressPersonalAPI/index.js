const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000,function(){
    console.log("Server is running on port 3000")
})
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
})
app.get("/success",function(req,res){
    let name = req.query.name;
    res.send(`<h1>Success!!</h1><h3>Wazzup ${name}</h3><br/><a href="/">Go back</a>`);
}
)
