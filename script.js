// let a = 30;
// let b = 40;

// let choice = "+s";

// switch (choice) {
//     case "*": 
//         console.log(a*b); 
//         break;  
//     case "-":
//         console.log(a-b);
//         break;
//     case "+":
//         console.log(a+b);
//         break;
//     case "/":
//         console.log(a/b);
//         break;
//     default:
//         console.log("hehe");
        
// }

//for loop
// for(let i = 0; i<=10; i++) {
//     console.log(i);
// }

//while loop
// let st = 1;
// let en = 10;

// while(st < en) {
//     console.log(st +  "->" + en );
//     st+=1;
// }

//function

//void function
// function printName(){
//     console.log("gaurav kumar");
    
// }
// printName();

//function that return a value
// function loop(st, en){
//     let v = 0;
//     while(st < en) {
//         st++;        
//     }
//     v = st;
//     return v;
// }

// let val = loop(1, 11);
// console.log(val);

//arrow function

// const add = (a,b) => a+b;
// console.log(add(1,2));

// const func = () => {
//     console.log("gaurav is great");    
// }

// func();

//arrow function to add 5 integers

// const add = (...nums) => {
//     let val = 0;
//     for(let i = 0; i<5; i++) val += nums[i];
//     return val;
// } 

// console.log(add(1,2,3,4,5));

//higher order function when we are deaing with maybe time thing

// const func = (a,b , store) => {
//     let res = a+b;
//     store(res);
// }

// func(2,3, val => console.log(val));

//array in js

// const nigs = ["a" , "b", "c"];
// console.log(nigs[1]);
// nigs.push("😅");
// nigs.push("😅");
// console.log(nigs);
// nigs.pop();
// console.log(nigs);

// let size = nigs.length;
// for(let i = 0; i<size; i++) console.log(nigs[i]);
