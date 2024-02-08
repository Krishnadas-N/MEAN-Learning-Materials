const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use((req,res,next)=>{
    console.log("HELLO WORL LOGINIIFG");
    next()
})

app.get('/',(req,res)=>{
   
    res.send(`
    <div class="icon icon-elixir-thinking" jseval="updateIconClass(this.classList, iconClass)" alt="" jstcache="1"></div>
    <form action='/' method='post'>
    <input type='text' name='name' >
    </form>
    `)
})

app.post('/',(req,res)=>{

    console.log(req.body);

    res.download('../input.txt')
   
})

process.on('uncaughtException',(err)=>{
    console.log(err);
})

const port = 3000;

console.log(process.argv);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});