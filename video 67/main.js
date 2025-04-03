// const { error } = require("console")
const fs=require("fs")

// console.log(fs)
console.log("starting")
// fs.writeFileSync("Ankita.txt","Ankita is a good girl")
fs.writeFile("ankita2.txt","ankita arya is a college student",()=>{
    console.log("done")
    fs.readFile("ankita2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("ankita.textk","harry",(e,d)=>{
    console.log(d.toString())
})
console.log("ending")