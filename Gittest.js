var express =require ('express');
var app= express();

app.get ('/', function (req, res){

    res.sendFile(__dirname+"/"+"GitTestCode.html");
} );
var server =app.listen(8088, function (){
    var host = server.address().address
    var port= server.address().port
    console.log('Test listening at %s %s', host, port)
});
