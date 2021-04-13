var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let port=process.env.PORT || 5000;

if(process.env.NODE_ENV==="production"){
    app.get("/",(req,res)=>{
        res.sendFile(path.resolve("index.html"));
    });
}else{
    console.log("In dev mode");
    app.get("/",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"public","index.html"));
    });
}
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

module.exports = app;
