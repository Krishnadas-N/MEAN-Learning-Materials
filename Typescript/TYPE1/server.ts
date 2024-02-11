const Tup:[string,number,boolean]=["Hello",123,true];

let arr:[number,number,number] =[12,34,34]
arr.forEach((item)=>console.log(item))

interface obj{
  name:string,
  age:number,
  place:string
}
interface obj2{
  Age:number
}

const userDetails:obj & obj2={
  name:"Krihsna",
  age:23,
  place:'ewewew',
  Age:12
}

console.log(userDetails);

type Employee={
  readonly id:number,
  name:string,
  printname:()=>void
}

const emp:Employee={
  id:1234,
  name:"Krihsna",
  printname(){
    console.log("hai ",this.name)
  }
}


console.log(emp);
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};
function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jun)); // true




//Poly morphism
class Hell{

    private name!:string;
    constructor(){
  
    }
  
    set Setname(name:string){
      this.name=name
    }
    get Name():string{
      return this.name
    }
  }
  
  const obj =new Hell();
  
  obj.Setname="AHkewj";
  console.log(obj.Name);
  
  interface shape{
    calculateArea:()=>number
  }
  
  class AreaOfRect implements shape{
    constructor(private width:number,private height:number){}
    calculateArea(){
      return this.width*this.height
    }
  }
  
  const area = new AreaOfRect(12,12);
  console.log(area.calculateArea());
  //METHOD OVERLOADING
  
  class Add{
    add(a:number,b:number):number;
    add(a:string,b:string):string;
    add(a:any,b:any):any{
      if(typeof a === 'number' && typeof b ==='number'){
        return a+b;
      }else if(typeof a ==='string' && typeof b==='string'){
        return a+b;
      }else{
        throw new Error("Invalid Arguments")
      }
  
    }
  }
  
  const h = new Add();
  console.log(h.add(1,2),h.add("Hail ","World "))



  
abstract class HelloWord {
    abstract Heol(): string;
    abstract HelloWorld(num: string): string;
  }
  
  abstract class child extends HelloWord {
    Heol() {
      return "Haiias";
    }
    abstract HelloWorld(num: string): string; // You need to declare this method here
  }
  
  class chilres extends child {
    HelloWorld(num: string) {
      return "sdds";
    }
  }
  


  function Hoow<T>(val: T): T {
    if (typeof val === 'string') {
      return val + "s"; 
    }
    return val;
  }
  
  console.log(Hoow<string>("Hua"));
  
  interface Boy<T,K>{
    name:T,
    age:K,
    height:K
  }
  
  const boy:Boy<string,number>={
  name:'KKKK',
  age:21,
  height:223
  }
  
  
  class reaDoNLy{
    constructor(readonly data:number){
  
    }
  }
  const mm = new reaDoNLy(12);
  console.log(mm.data)
  mm.data=2121
  console.log(mm.data);
  
  class MOYE{
    static counter:number=0;
    constructor(){
    MOYE.counter++
    }
  }
  
  const boo=new MOYE();
  const ne = new MOYE();
  new MOYE();new MOYE();new MOYE();new MOYE();new MOYE();new MOYE();
  console.log(MOYE.counter);
  
  console.log(new MOYE() instanceof MOYE)




  

function Merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  const obj = {
    nam: 'sa'
  };
  
  const obj2 = {
    age: 12
  };
  const oo=(Merge(obj, obj2));
  
  function Koi<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
  }
  
  const fucns =<T,>(val:T):T=>{ // comma is to be used to tell the compiler it is not a jsx function is in react
    return val
  }
  
  

  

function Merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  const obj = {
    nam: 'sa'
  };
  
  const obj2 = {
    age: 12
  };
  const oo=(Merge(obj, obj2));
  
  function Koi<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
  }
  
  const fucns =<T,>(val:T):T=>{ // comma is to be used to tell the compiler it is not a jsx function is in react
    return val
  }
  
  
  type a =Awaited<Promise<any>>
  
  
  interface acds{
    name?:string,
    age?:string
  }
  
  const persomse:Required<acds>={
    name:'sd',
    age:'we'
  }
  
  interface BETE{
    name:string,
    age:number,
    isAdmin:boolean
  }
  
  
  const Maybe:Readonly<BETE>={
    name:'AAA',
    age:23,
    isAdmin:true
  }
  
  const Mayb2 :Pick<BETE,'name'|'age'>={ //pick the key we want from that 
    name:'s',
    age:2
  }
  
  const MaybOmit:Omit<BETE ,'age'|'name'>={
    isAdmin:true,
  }
  
  type status = "Delivered" | "Pending" | "Good";
  
  const Sare: Exclude<status, "Pending" | "Good"> = "Delivered"; //Exxlude uusinf to remove the values from union types 
  
  
  const MayBeNull:NonNullable<BETE>={
    name:'ds',
    age:21,
    isAdmin:false
  }


  type Car = 'Toyota' | 'Honda' | 'Ford';
type CarInventory = Record<Car, number>;
// Equivalent to:
// interface CarInventory {
//     Toyota: number;
//     Honda: number;
//     Ford: number;
// }
