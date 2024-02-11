

function Animal(name){
    this.name=name;
}

Animal.prototype.sayName=function(){
    console.log(`My name is ${this.name}.`);
}

let cat = new Animal("Whiskers");
cat.sayName()
