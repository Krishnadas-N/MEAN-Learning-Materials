(function (a,b){
    console.log(a+b)
})(2,3)

//to create a dom element 

// const div = document.createElement('div');
// div.id='newiDiv';
// div.className='container';
// div.innerHTML="Hello World";
// div.style.color='red'
// div.setAttribute('data-id','SayMyName');
// console.log(div);
console.log(process.argv)



const current = new Date();

const fotyfive = new Date(current.getTime() - 45*24*60*60*1000)