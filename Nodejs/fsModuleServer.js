const { isUtf8 } = require('buffer');
const fs =require('fs');

fs.writeFileSync('input.txt','GeeksforGeeks: A computer science portal','utf-8',(err)=>{
    if(err) console.log(err);
})


const data=fs.readFileSync('input.txt',{encoding:'utf-8',flag:'r'})
console.log(data);


fs.open('input.txt','r+',(err,res)=>{
    if(err) console.log(err);
    console.log("file opernerd",res);
})


const text='fs.writeFile(path, data, options, callback)'
fs.appendFile('input.txt',text,(err,data)=>{
    console.log(data);
})

fs.exists('input.txt',(err,data)=>{
    console.log(err,data);
})

fs.renameSync('test.txt','newTest.txt')

fs.stat('input.txt',(err,status)=>{
    if(err){
        console.log(err);
    }
    console.log(status);
})


fs.unlink('.test.txt',(err,dat)=>{
    if(err) console.log(err);
    else console.log(dat);
})