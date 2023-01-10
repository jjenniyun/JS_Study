// const 상수(변수), 변하지 않는 값
// let 변수, 변경이 가능한 값
// var 변수, 쉽게 업데이트 가능, 어디에서 오류 났는지 알 수 없음
// 최대한 const를 쓸 것! let, var은 왠만하면 쓰지 않기!
// true false null(비어있음) undefined(값이 없음)
//const amIFat = null;  null 아무것도 없음
// let something; 값이 정의되지 않음, 비어있음
// 배열 []
// const daysOfWeek = ["mon","tue","wed","thu","fri","sat"];

//  Get item from Array
// console.log(daysOfWeek);

// Add one more day to the array
// daysOfWeek.push("sun")
// console.log(daysOfWeek);

// player[0] == name / player[1] == points
// const player = ["jenny",1212,false, "little bit"];
// object 
// const player = {
    // name:"jenny",
    // points: 10,
    // fat: true,
// };
// console.log(player);
// player.lastName = "potato";
// player.points = player.points + 15; // 객체 업데이트
// console.log(player.points);

// function 
// function sayHello(nameOfPerson, age){
    // console.log("Hello my name is "+nameOfPerson+" and I'm "+age);
// };

// sayHello("rose", 21);
// sayHello("lynn", 10);
// sayHello("risa", 23);

// function plus(firstNum, secondNum){
    // console.log(firstNum + secondNum);
// }
// function divide(a,b){
    // console.log(a / b);
// }
// plus(8, 60);
// divide(98, 20);

// const player = {
    // name: "jenny",
    // sayHello: function(otherPersonsName){
        // console.log("hello! "+otherPersonsName+" nice to meet you~");
    // },
// };

// console.log(player.name);
// player.sayHello("lynn");
// player.sayHello("jenny");

// 계산기 만들어보기
// const calculator = {
    // add: function(a,b){
        // alert(a+b);
    // },
    // minus: function(a,b){
        // alert(a-b);
    // },
    // multiply: function(a,b){
        // alert(a*b);
    // },
    // divide: function(a,b){
        // alert(a / b);
    // },
    // power: function(a,b){
        // alert(a**b);
    // },
// };
// console.log(calculator.add(5,2));

// const age = 96;
// function calculateKrAge(ageOfForeigner){
    // return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);

// const calculator = {
    // plus: function(a,b){
        // return a+b;
    // },
    // minus: function(a,b){
        // return a-b;
    // },
    // multiply: function(a,b){
        // return a*b;
    // },
    // divide: function(a,b){
        // return a /b;
    // },
    // power: function(a,b){
        // return a**b;
    // },
// };

// const plusResult = calculator.plus(2,3);
// const minusResult = calculator.minus(plusResult,10);
// const timesResult = calculator.multiply(10,minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);
//console.log(plusResult);

// if else 조건문
const age = parseInt(prompt("how old are you?"));

if(isNaN(age) || age <0){
    console.log("please write a real positive number");
}else if(age < 18){
    console.log("You are too young.");
}else if(age >= 18 && age<= 50){
    console.log("You can drink!");
}else if(age > 50 && age <= 80){
    console.log("You should exercise");
}else if(age === 100){
    console.log("wow you are wise");
}else if(age > 80){
    console.log("You can do whatever you want!");
}
