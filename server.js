const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app  = express();
const expressLayout = require("express-ejs-layouts")

app.use(expressEjsLayouts)
app.set("layout", "./layout/main")
app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index", { title: "change"})
})

app.get("/about", (req, res) => {

    const users = [
        {
            name: "lebron james"
        },
        {
            name: "kofi arhin"
        },
        {
            name: "kyrie Irving"
        }
    ]
    res.render("about", {users})
})
app.listen(5000)