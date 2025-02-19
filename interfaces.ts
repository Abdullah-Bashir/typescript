// app.ts
let mes = "Hello, TypeScript!";
console.log(mes);

let num: number = 5;  // First declaration of `num`
num = 5 + 6;
console.log(num);

mes = "again its me"
console.log(mes)

let isVALID = true
console.log(isVALID);

// Using bigint for displaying large numbers.
let Bnumber: bigint = 5999995666666666666669999999n;
let sum = Bnumber + 98n;
console.log(Bnumber)
console.log("Sum:", sum)

const greet = (name: string) => {
    return console.log(`The name is ${name}`)
}

greet("abdullah")
