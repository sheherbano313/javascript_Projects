let DATA = "secret information";
class User{
 constructor(name, email) {
    this.name = name;
    this.email = email;
 } 
 viewData()  {
    console.log("Data = ", DATA)    
} 
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "some new secret information";
    }
}

let std1 = new User("John Doe",'abc@gmail.com');
let std2 = new User("Bano",'abcd@gmail.com');

let teacher1  = new User ("ALi ", "Ali@gmail.com");

let admin1 = new Admin("admin", "adminA@gmail.com");


