const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const host = "127.0.0.1",
    port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, "../templates/partials");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', templatePath);
app.set(hbs.registerPartials(partialsPath));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about-us", (req, res) => {
    res.render("about");
});
app.get("/sustainability", (req, res) => {
    res.render("sustainability");
});

app.get("*", (req, res) => {
    res.send("404 Error! Page not found")
})




app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});



//serve html file in nodejs?