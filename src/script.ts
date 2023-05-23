// document.write('Hello Tanvir Hossen Bappy' + '</br>')
//
//
// function multiply(a: number, b: number) {
//     return a * b;
// }
//
// document.write(String(multiply(10, 20)) + '</br>')
//
// let fruits = ['apple', 'banana', 'orange']
// fruits.push('34')
// // @ts-ignore
// document.write(fruits + '</br>')
//
// let a: any[] = [];
// a.push('Bangladesh')
//
// const additionOfTwoNumber = (m: number, n: number, x: string = 'true') => {
//     // @ts-ignore
//     return (`The result of ${m} and ${n} is: ${m + n}` );
// }
// document.write(additionOfTwoNumber(1, 2)+ '</br>');
//
// type stringOrNum = string | number;
// type userType = { name: string, age: number }
//
// const userDetails = (id: stringOrNum, user:userType) => {
//     // @ts-ignore
//    return (`User id is ${id}, Name is ${user.name}, Age is ${user.age}` );
// }
//
// // @ts-ignore
// // @ts-ignore
// document.write(userDetails(1,{name: "Jane", age: 90,})+ '</br>');
//
// let calculation: (x: number, y: number, z: string) => number
//
// // @ts-ignore
// calculation = (a: number, b: number, c: string) => {
//     if (c === 'abc') {
//         return a + b;
//     } else {
//         return a - b;
//     }
// }
//
// document.write(String(calculation(20, 25, 'bc'))+ '</br>');
//
// let userDetailsFun: (
//     id: number | string, userInfo: {
//         name: string,
//         age: number,
//     }) => string
//
// // @ts-ignore
// userDetailsFun = (id: number, user: {
//                    name: string, age: number }) => {
//     return `The user name is ${user.name} and he is ${user.age} years old`
// }
// // @ts-ignore
// document.write(userDetailsFun(1,{name:'Tanjib',age:30}))
//
// --------------class-----------------------

// import {Player} from './classes/player.js'
// import {IsPlayer} from "./interfaces/IsPlayer.js";
//
// const masrafi = new Player('Masrafi', 40, 'BD');
// let sakib: IsPlayer;
// sakib =  new Player('Sakib', 40, 'BD');
//
// // @ts-ignore
// // document.write(JSON.stringify(masrafi))
// // document.write(sakib.name)
//
// const players: Player[] = [];
// players.push();
// // @ts-ignore
// document.write(players)



// -----------------GENERICS-------
const addId = <T extends {
    name:string,
    age:number
}>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id}
}

let user = addId({
    name: "Tanvir",
    age : 24,
    country: "Bangladesh"
})

// @ts-ignore
document.write(addId(user))



// -----------------Interface generic---------------

enum statusType{
    SUCCESS,FAILURE,UNAUTHINCATED,FORBIDDEN
}

interface ApiResponse<T>{
    status : number;
    type: statusType;
    data: T;
}

const responseOne : ApiResponse<object> ={
    status: 200,
    type: statusType.SUCCESS,
    data:{
        name : 'Test',
        userId: 20,
    }

}

// @ts-ignore
console.log(responseOne.data);