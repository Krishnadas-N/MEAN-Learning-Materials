function generateOtp(){
    const digits ='123456789';
    var result = '';
    for(let i=0;i<=5;i++){
        result+=digits[Math.floor(Math.random()*10)]
    }
    return result;
}

console.log(generateOtp());