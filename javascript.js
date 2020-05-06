console.log("Hello Bence");

let post = {
    author: 'Bill Gates',
    content: "Online communication will change how companies work",
    date: "2020-04-01 18:06",
  };
console.log(post['author'])

let myObject = { colors:["blue" , "yellow", "green"]}
myObject.hasManyColors = myObject.colors.length > 3;


let variable = 12;
let myVariable = false;
if (myVariable === true) {
    console.log(`The condition has been evaluated to true`)};

let a=7
if (a <5) {console.log(a/2)}
else{console.log(a*2)}

let bookCount = 21
for (let i = 0; i < bookCount; i++) {console.log(i)

}

let add = (a, b) => {
    return a+b
}

    console.log(add)

    let printNumbersTill = 20;

    for (let i = 0; i < printNumbersTill; i++) {console.log(i)}

    let getGreetingTo = (Mark) => {
        return "Hello, " +Mark;
    }

    let printValues = [0, 3, 6, 7, 9]
    printValues.forEach((number) =>{
        console.log(number)
    })

    let myNumbers = [10, 20, 30, 50, 12]
      myNumbers.forEach((number) =>{
          console.log(number)
      })
