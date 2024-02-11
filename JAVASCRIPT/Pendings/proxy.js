const target ={
    name:'Krishnadas',
    age:287
}

const handler ={
    set:function(target,property,value){
        console.log(`Accessed property: ${property}`);
        target[property]=value
     },
    get:function (target, property){
        return `${property}=${target[property]}`;
        }
}

const proxy = new Proxy(target,handler);
console.log(proxy.name);
proxy.name="JAcky";
console.log(proxy.name);
//proxy.age=300; //This will throw an error as we have not defined 'set' for the 'age' in our handler 
console.log(proxy.age);