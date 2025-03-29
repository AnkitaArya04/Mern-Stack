let a=7;

function factorial(num){
    let arr=Array.from(Array(num+1).keys())
    let c=arr.slice(1,).reduce((a,b)=>a*b)
    return c
}

function facFor(num){
    let fac=1;
    for(let index=1;index<=num;index++){
        fac=fac*index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))