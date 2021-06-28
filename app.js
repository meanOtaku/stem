const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const ejs = require("ejs");

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static("public"));


app.get("/", function(req, res){
    console.log("/home");
    res.render("home");
})
app.get("/about",function(req, res){
    console.log("/about");
    res.render("about");
})

app.get("/KickStart",function(req, res){
    console.log("/KickStart");
    res.render("KickStart");
})
app.get("/NextSteps",function(req, res){
    console.log("/NextSteps");
    res.render("NextSteps");
})
app.get("/TakeOff",function(req, res){
    console.log("/TakeOff");
    res.render("TakeOff");
})
app.get("/Java",function(req, res){
    console.log("/about");
    res.render("about");
})
app.get("/PathAhead",function(req, res){
    console.log("/about");
    res.render("about");
})
app.get("/DataScience",function(req, res){
    console.log("/about");
    res.render("about");
})
app.get("/WebDevelopment",function(req, res){
    console.log("/about");
    res.render("about");
})
app.get("/iOSDevelopment",function(req, res){
    console.log("/about");
    res.render("about");
})
app.get("/Beekeeping",function(req, res){
    console.log("/about");
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server Created");
})