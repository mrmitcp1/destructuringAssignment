// let names =['cho','meo','lon','ga']
// // // let [firstName,secondName] = names;
// // console.log(firstName,secondName)
// let [firstName,, thirdName]= ['cho','meo','lon','ga']
// console.log(firstName,thirdName)

// let [firstName,,...lastName]=['cho','meo','lon','ga']
// console.log(firstName,lastName)
// let [firstName,secondName]=['cho','meo','lon','ga'];
// console.log(firstName);
// console.log(secondName);
// [firstName ,secondName]=[secondName,firstName]
// console.log(firstName)
// console.log(secondName)
function nameList() {
    return ['cho','meo','lon','ga']
}
let [firstName, secondName]=nameList()
console.log(firstName,secondName)
let marks = {x:1,y:2,z:3}
const {x,y,z} = marks
console.log(x,y,z)

const mark1 = {
    section1 : { alpha : 1, beta : 2 },
    section2 : { alpha: 3,beta: 4}
}
const {section1 : {alpha: alpha1, beta : beta1}}=mark1
console.log(alpha1,beta1)