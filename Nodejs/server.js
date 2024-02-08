const http = require('http');
const fs = require('fs');
const path = require('path');
  
  
const port = 3000;

const server = http.createServer((req,res)=>{
    if(req.url==='/home'){
    res.writeHead(200,'OK',{'Content-Type':'text/plain'});
    // res.writeHead(200,'OK',{'content-location':'sdsd'})
    res.write( Date.now().toString()+'\n');
    res.write( Date.now().toString()+'\n');
    res.write( Date.now().toString()+'\n');
    res.write( Date.now().toString()+'\n');
    res.write( Date.now().toString()+'\n');
    res.write("hais my slef  ")
    res.write( path.extname(req.url) )
    res.write(fs.readFileSync('./input.txt','utf-8',(err,data)=>{if(err)console.log(err); else console.log(data);}));
    res.end( Date.now().toString())
    }

   

})




server.listen(port,()=>{
    console.log("server listening at port"+port);
})