//Create Server Using node
var http = require('http');
var fs = require('fs');
var url = require('url');
var multer = require('multer');

//Create HTTP server
var server=http.createServer(function (req,res) {
    if(req.url=="/") 
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is About Page</h1>')
        res.end();
    }
        
    else if(req.url=="/about") 
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is About Page</h1>')
        res.end();
    }
        
    else if(req.url=="/contact") 
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is Contact Page</h1>')
        res.end();
    }
        
// File Write
    else if(req.url="/")
    {
        fs.writeFile('demo.txt','Hello World', function (error) 
                     {
            if (error) 
            {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write('<h1>not found this text');
                res.end();
            } 
            else 
            {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('<h1>file write success ... you can check folder');
                res.end();
            }
        })
    }

// Multer for file upload
    else if(req.method === 'POST' && req.url === '/success') 
    {
        upload(req,res,(error)=>{
            if(error) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write('<h1>upload file un success');
                res.end();
            }
            else 
            {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write('<h1>file upload success you can check folder');
                res.end();
            }
        })
    }
});

// Server Create Port Method
var port = process.env.port || 5500;
server.listen(port, () => {
    console.log(`http://www.localhost:${port}`)
})
