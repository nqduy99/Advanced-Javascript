// 1. IIFE (Immediately Invoked Function Expression)------------------------
// ;(function(){
//     console.log('Now now')
// })();

// const app = (function(){
//     //Private
//     const cars = []

//     return {
//         get(index){
//             return cars[index];
//         },
//         add(car) {
//             cars.push(car)
//         },
//         edit(car) {
//             cars[index] = car
//         }, 
//         delete(car) {
//             cars.splice(index, 1);
//         }
//     }
// })

// 2. Scope
// var fullName = 'Son Dang';

// function test(){
//     console.log(fullName);
    
//     const age = 18;
//     function test2(){
//         console.log(age);
//     }
//     test2();
// }

// test();

// 3. Hoisting
// var age
// console.log(age);
// // console.log(fullName)

// age = 16;

// console.log(age)

// 4. this keyword

// const iPhone7 = {
//     //Thuoc tinh
//     name: 'iPhone 7',
//     color: 'pink',
//     weight: 300,

//     // Phuong thuc method
//     takePhoto(){
//         console.log(this)
//     },

//     objChild: {
//         name: 'object child',
//         methodChild() {
//             console.log(this)
//         }
//     }
// }

// console.log(iPhone7.objChild.methodChild());

// function Car(name, color, weight){
//     this.name = name;
//     this.color = color;
//     this.weight = weight;
//     this.run = function(){
//         console.log('Running...!', this);
//     }
// }


// const mercedes5450 = new Car('Mercedes 5450', 'Black', '')

// console.log(mercedes5450.run());

// const button = document.querySelector('button')

// button.onclick = function(){
//     console.log(this)
// }