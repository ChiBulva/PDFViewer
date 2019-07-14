var express = require('express'),
    fs = require('fs'),
    app = express();

const bodyParser = require('body-parser');

var PORT = 8080;

//GOTO: <DOMAIN>/pdf/<filename>

//Get PDF version
app.get('/pdf/:pdf', function (req, res) {
    var filePath = "/files/pdf/"+ req.params.pdf + ".pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

//Node.js Server
app.listen(PORT, function(){
    console.log('Listening on 8080');
});