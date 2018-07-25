abstract class Person{
    
    constructor(){
     
    }
    city = "";

    abstract display();


}


class Employee extends Person{
    display(){

    }


}

class Customer extends Person{
    display(){

    }

}


let person = new Employee();
person.city ="Mumbai";


var cities = ["a","b","c"];

function print(x?, y?, z?){
    console.log(x +" "+ y+" "+ z);
}

print(...cities);

// Strongly typed array

class product{
    constructor(){
        
    }
}