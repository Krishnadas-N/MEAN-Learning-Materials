const fs = require('fs');
const writeStream = fs.createWriteStream('stream.json', { encoding: 'utf-8' });

// Define the initial JSON content
const initialContent = JSON.stringify([
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    // Include other objects as needed
]);
writeStream.write(initialContent)

const readstream =fs.createReadStream('stream.json');

readstream.on("data",(chunk)=>{
    console.log(chunk);
})

readstream.on( "end" ,()=>{
   console.log("文件读取结束"); 
   })

   readstream.on( 'error', (err) => {
    console.log(err);
   })
// .pipe(process.stdout) //将内容输出到标准