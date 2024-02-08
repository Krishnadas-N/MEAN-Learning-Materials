const obj1={
    name:"Mohanlal",
    age:{
        name:'sd',
        number:{
            al:23,
            sui:{
                expr:'ger',
                ad:{
                    n:21
                }
            }
        }
    }
}

const obj2=Object.assign({},obj1);

const obj3 =structuredClone(obj1)

console.log(obj2);
console.log(obj1)
obj2.age.name="gfggd"

console.log(obj1)

console.log(obj3);

console.log(this.Audio)

function jj(){
    console.log("ksds");
}

console.log(jj?.());



console.log(parseInt("sdds",2));


console.log(Object.entries(obj1))

let[name="alls",age=2312]=["Krissa"]

console.log(name,age)


//Nested Destructure
// let {nam,size:{max,ll},item:[sa,as]}={}

console.log()

// Object.getOwnPropertyDescriptor(obj1,"name").configurable?:false;
console.log(Object.getOwnPropertyDescriptor(obj1,"name"));



let user={
    get name(){
            return `${this._name} is Your Name`
    },
    set name(value){
        this._name=value
    }
}

user.name="Ashnama"
console.log(user.name);


function*  genFunc(){
    yield "Hello";
    yield "works";
    yield  "!";
    return "Bahi"
}
const ler=genFunc()

for(val of ler){
    console.log(val);
}
// console.log(genFunc().next);