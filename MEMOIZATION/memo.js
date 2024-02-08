function fibo(n,memo={}){
    if(n in memo){
        return memo[n]
    }

    if(n<=2){
        return 1

    }

    memo[n]=fibo(n-1,memo)+fibo(n-2,memo)
    return memo[n]
}

console.log(fibo(9));// 34
console.log(fibo(10))
console.log(fibo(9))