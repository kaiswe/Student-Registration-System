'use strict'

function route(pathname, handle, response, request) {

     console.log("About to route a request for: " + pathname);

     if(typeof handle[pathname] === 'function'){

          handle[pathname](response, request);

     } else {
          console.log("couldn't find " + pathname);
          response.writeHead(404, {"Content-Type": "text/plain"});
          response.write("Resource not found!");
          response.end();
     };
};

exports.route = route;