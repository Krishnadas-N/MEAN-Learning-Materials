const path = require('path')
const event =require('events');
const { EventEmitter } = require('stream');

console.log(path.parse('input.txt'));

const emmiteer =new EventEmitter();

emmiteer.on('evi',(arg1)=>{
    console.log(arg1);
})

emmiteer.once('su',()=>{
    console.log("once ");
})

emmiteer.emit('evi','Error in the system!');
emmiteer.emit('su')
// emmiteer.addListener('evv',()=>{console.log("
