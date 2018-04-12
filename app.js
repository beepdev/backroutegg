var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("landing.ejs");
});

app.get("/media", function(req, res) {
    res.render("media.ejs");
});

app.get("/shop", function(req, res) {
    res.render("shop.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Backroute Server has Started");
});
