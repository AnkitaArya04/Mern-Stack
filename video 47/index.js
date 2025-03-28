console.log("hlo")

let random=Math.random()
let a=prompt("Enter first number")
let b=prompt("enter second number")
let c=prompt("enter operation")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

// c=obj[c];
if(random>0.1){
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c];
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}