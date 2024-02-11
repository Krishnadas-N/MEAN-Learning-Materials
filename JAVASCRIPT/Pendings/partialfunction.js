
function sum(a,b){
    return a+b;
}


const add = sum.bind(null,23);
console.log(add(3));

const hello =(a,b,c)=>{
    console.log(c);
    return a+b;
}
console.log(hello.call(null,1,23,"helle"));

console.log(Function());