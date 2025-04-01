// let obj={
//     a:1,
//     b:"Ankita"
// }
// console.log(obj)

// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// }

// rabbit.__proto__=animal //sets rabbit.[[prototype]]=animal

class Animal{
    constructor(name){
        this.name=name
        console.log("object is created...")
    }

    eats(){
        console.log("kha rha hoon...")
    }
    jumps(){
        console.log("kood rha hoon...")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        
        console.log("object is created and he is a lion...")
    }
    eats(){
        super.eats()
        console.log("kha rha hoon roar...")
    }
}


let a=new Animal("Bunny")
console.log(a)

let l=new Lion("Shera")
console.log(l)