import fs from "fs/promises"

let a=await fs.readFile("Ankita.txt")
let b=await fs.appendFile("Ankita.txt","\n\n\nthis is amazing promise")
console.log(a.toString(),b)