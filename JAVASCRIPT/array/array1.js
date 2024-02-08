let arr=[1,3,43,4343,434];

// console.log(arr)


// console.log(String(null))

// console.log(23+undefined)

let str='KAKKASHI ';
let str2='KAKK'

console.log(str.substring(1,5));
console.log(str.slice(1,4));

console.log(str.trim());

console.log(str.includes('K'));

console.log(str[0].toLowerCase()+str.slice(1))

console.log(str.localeCompare(str2));

// The localeCompare() method in JavaScript is used to compare 
// two strings based on the current locale or locale-specific 
// order. It is particularly useful when you want to perform 
// string comparison in a way that respects the language and 
// cultural conventions of the user.

// If the result is negative, it means string1 comes before string2.
// If the result is positive, it means string1 comes after string2.
// If the result is zero, it means the strings are equal.



console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE,Number.NEGATIVE_INFINITY);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);

console.log(Math.ceil(4.5));

console.log(Math.floor(4.5));

console.log(Math.round(4.5));

console.log(Math.random()*10);

console.log(new Date().toISOString());

console.log(new Date().getTime());

console.log(new Date().toJSON());

console.log(new Date().getUTCFullYear());

console.log(new Date().getMilliseconds());

console.log(new Date().getTimezoneOffset());


const sim=[2,334,34,342,223,23];

console.log(sim.entries(tem=> console.log(tem)));

console.log(sim.copyWithin());

console.log(...sim);

console.log(undefined??null??12)

let obj={
    name:'Ranhul',
    age:23,
    address:{
        street:'12',
        city:'Delhi'

    }
}
console.log(obj);


const obj2={
    name:'aswathy',
    age:23
}

const Name={...obj,...obj2}

console.log(Name)

const multi={
    "hell 0":12213
}
console.log(multi["hell 0"])


console.log("23"*"2332");

function hello(...args){
    return args.reduce((acc,num)=>acc+num,0);
   
}

console.log(hello(1,2,3,34,5,34,23,43,34,34,5,4,54))

function helo(a){
    let abc=a
    console.log(abc);
    return  (function  () {
       let  abc=233
       console.log(abc);
        
    })()

}

helo(1)

console.log('///////////////// <=======SCOPE=======> //////////////////');

for(let i=0;i<1;i++){
    var a="apple"
    console.log(a)
}
console.log(a);

let ac=[1221,2323,23,23,2332];

for(let key in ac){
    console.log(key);
}

const checkIsNan=[1,23,34,'sds','sdsd','dssds',21];

for(let item of checkIsNan){
    if(isNaN(item)){
        console.log(`${item} is  NaN`);
    }else{
        console.log(`${item} is not NaN`)
    }
}
let appl="apple"
const app= {appl};
console.log(app);

const hell=function (a,b,c){
    console.log(this.name);
    console.log(a,b,c);
}

let s21={
    printNma:function(a){
        console.log(this.name)
        console.log(a)
    }
}
let s2 ={
    name:'Krishnadas'
}
s21.printNma.apply(s2,[1,3,3,4])

const callLater =s21.printNma.bind(s2,[1,3,3,4])
callLater()


///currying

const koi= function hello(a){
    return  function world(b){
        return function  final(c){
            console.log('Hello ', a , ' World ', b , ' and ', c )
        }
    
    }

}
koi("Amit")("Sharma")('India')

// memoization


// const fibonacci = _.memoize((n) => {
//     if (n <= 1) return n;
//     else return fibonacci(n - 1) + fibonacci(n - 2)
// });
// console.log(fibonacci(9)); // 34
// // debounce and throttle
// const log = _.debounce(() => console.log('Flushed'), 50)
// for (var i = 0; i < 1000; i++) {
//     log();

// }


const basicPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const success = true; // Change to false to simulate a failure
        if (success) {
            resolve("Operation succeeded!");
        } else {
            reject("Operation failed!");
        }
    }, 1000);
});
const fetchPromise = fetch('https://jsonplaceholder.typicode.com/todos/1');
const promise1 = Promise.reject("Promise 1 resolved");
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 1500));

Promise.race([basicPromise,fetchPromise,promise1,promise2])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log("err  "+err);
})


checkCOntext()

function checkCOntext(){
    console.log("context checked");
}

const her =()=>{
    console.log("here cehecged");
}

her()

//closure

function hllo(){
    let x=99;
    function  hhs(){
        console.log(x);
    }
    return  hhs();

}

console.log(hllo());

let user ={
    "like birds":true
}
if (user["like birds"]) {
    console.log(user["like birds"]);
}