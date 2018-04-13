var express = require("express"),
    app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("landing2.ejs");
});

app.get("/media", function(req, res) {
    res.render("media2.ejs");
});

app.get("/shop", function(req, res) {
    res.render("shop.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Backroute Server has Started");
});
