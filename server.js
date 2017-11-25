var http = require ('http');
var fs   = require  ('fs');

//404 response
function error404 (response){
    response.writeHead(404,{"Context-Type":"text/plain"});
    response.write("Error 404: Page Not Found");
    response.end();   
}

function onRequest (request, response){

    if (request.method =='GET' && request.url =='/'){
    response.writeHead(200,{"Context-Type":"text/html/css"});
    fs.createReadStream("./login/index.html").pipe(response);
    }
    else {
        error404(response);
    }
    //response.write("Here is your response from the server..");
    //response.end();   
}

http.createServer(onRequest).listen(5400);
console.log("Server is listening on port 5400" );
