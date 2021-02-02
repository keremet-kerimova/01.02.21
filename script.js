document.write(userList);


let user = {
    fistName:"Keremet",
    lastName:"Jarkynbekova",
    sayHello:function(){
        document.write("Hello, my name is " + fistName);
    }
};



let user = {
    fistName:"Keremet",
    lastName:"Jarkynbekova",
    age:16,
    "likes music":true,
    friends:"Aidai",
};


function User(firstName, lastName){
    this.firstName = lastName;
    this.lastName = lastName;
    this.sayHello = function(){
        document.write("Good morning, my name is " + this.firstName + "<br>");
    }
}

let user1 = new User("Keremet","Jarkynbekova");
let user2 = new User("Aidanek","Jarkynbekova");
let user3 = new User("Elbek","Jarkynbekov");
let user4 = new User("Nurseit","Jarkynbekov");

user1.sayHello();
user2.sayHello();
user3.sayHello();
user4.sayHello();

document.write(user1.firstName);


