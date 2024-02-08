function createCOunter(){
    let counter=0
    return {
        increment:function () {counter++},
        decrement:function (){counter--},
        reset:function() {counter = 0},
        getCOut:()=>{
            return counter;
        }
    }
}

let c1=createCOunter();
console.log(c1)
console.log(c1.increment());//1
console.log(c1.getCOut());
console.log(c1.increment());//1
console.log(c1.increment());//1
console.log(c1.increment());//1
console.log(c1.increment());//1

console.log(c1.increment());//1
console.log(c1.decrement());//0
console.log(c1.getCOut());
console.log(c1.reset()) //undefined
console.log(c1.getCOut());