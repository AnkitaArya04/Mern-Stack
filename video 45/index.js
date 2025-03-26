function nice(name) {
    console.log("Hey "+ name + " you are nice!")
    console.log("Hey "+ name + " you are nice!")
    console.log("Hey "+ name + " you are nice!")
    console.log("Hey "+ name + " you are nice!")
    
}
function sum(a,b,c=3){
    // console.log(a+b)
    return a+b+c;
}
result=sum(2,3)

console.log("the sum of two number is "+ result)
// nice("harry")
// console.log("Hey How are you?")

const func1=(x)=>{
    console.log("I am an arrow function",x)
}
func1(1);
func1(23)