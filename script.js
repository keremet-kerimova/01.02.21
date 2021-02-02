// document.write(userList);


// let user = {
//     fistName:"Keremet",
//     lastName:"Jarkynbekova",
//     sayHello:function(){
//         document.write("Hello, my name is " + fistName);
//     }
// };



// let user = {
//     fistName:"Keremet",
//     lastName:"Jarkynbekova",
//     age:16,
//     "likes music":true,
//     friends:"Aidai",
// };


// function User(firstName, lastName, prefix){
//     this.firstName = lastName;
//     this.lastName = lastName;
//     this.sayHello = function(){
//         document.write("Good morning, my name is " + this.prefix + " "+ this.firstName + "<br>");
//     }
// }


// let user1 = new User("Keremet","Jarkynbekova");
// let user2 = new User("Aidanek","Jarkynbekova");
// let user3 = new User("Elbek","Jarkynbekov");
// let user4 = new User("Nurseit","Jarkynbekov");

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// user4.sayHello();



// function Apple(weight = 0){
//     this.name = name;
//     this.weight = weight;

//     // this.toString = function(){
//     //     return "Apple type " + this.name;
//     // }
//     // this.valueOf = function(){
//     // return this.weight;
//     // }
//     this[Symbol.toPrimitive] = function(hint) {
//         switch (hint){
//             default:
//             case 'string': return this.name + " apple";
//             case 'number': return this.weight;
//         }
//    }
// }

// function Tomato(name,weight){
//     this.name = name;
//     this.weight = weight;

//     // this.toString = function(){
//     //     return "Tomato type " + this.name;
//     // }
//     // this.valueOf = function(){
//     //     return this.weight;
//     //     }

//     this[Symbol.toPrimitive] = function(hint) {
//          switch (hint){
//              default:
//             case 'string': return this.name + " tomato";
//             case 'number': return this.weight;
//          }
//     }
// }


// let apple1 = new Apple("Aport", 150);
// let apple2 = new Apple("Aport", 50);
// let tomato1 = new Apple("Aport", 10);
// let tomato2 = new Apple("Aport", 100);


// document.write(apple1 + ", " + tomato1 + ", " + apple2)
// document.write("Total weight: " + (+apple1 + +tomato1 + +apple2 + +tomato2));




// let fruits = ['Apple', "Bananas", "Strawberries"];


// document.write(fruits[2]);
// fruits.push("Pear");
// fruits.unshift("Lemon");
// fruits.pop();
// fruits.shift();
// fruits.log(fruits);
// document.write(fruits.length);

// for (let i = 0; i < fruits.length; i++){
//     document.write(fruits[i]+ "<br>")
// }

// for (const fruit of fruits) {
// document.write(fruit + "<br>");
// }



// function example(a, b){
//     // let c = a;
//     // for (let i = 1; i < b; i++);{
//     //     a *= a;
//     // }
//     let c= a
//     return example(a,b);
// }
//     document.write(example(5, 2) + "<br>");
//     document.write(example(5, 3) + "<br>");
//     document.write(example(5, 4) + "<br>");

for (i = 1; a <= 9; a++) {
    for ( b = 1; b <= 10; b++) {
        System.out.print(a + " X " + b + " = " + (a * b) + "\t");
    }
    System.out.println();
 }