const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static("public"));



app.listen(port,() => {
    console.log(`listening to port ${port}........`);
});
app.get("/search",(req,res) => {
    res.send({
            name : "Vaibhav Goel",
            age : 18
        });
});

app.get("/module",(req,res) => {
    let name = "Vaibhav Goel";
    res.render("module.ejs",{name});
});