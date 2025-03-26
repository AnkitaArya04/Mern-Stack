console.log("i am a tutorial on loops")
// let a=1;
// for(let a=1;a<=18;a++){
//     console.log(a)
// }

let obj={
    name:"Harry",
    role:"Programmer",
    company:"Google"
}
for (const key in obj) {
    // if (Object.prototype.hasOwnProperty.call(obj, key)) {
        
        console.log(key)
        
    }

for(const c of "Ankita") {
    console.log(c)
}   
// i=0;
// while(i<6){
//     console.log(i)
//     i++;
// }
i=0;
do {
    console.log(i)
    i++;
} while (i<6);