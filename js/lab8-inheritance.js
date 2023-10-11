//Question 1:
let Student = {
    lastname: "",
    firstname: "",
    grades: [],
    inputNewGrade: function(newGrade) {
        if(this.grades === null || this.grades === undefined)
            this.grades = new Array(0);
        this.grades.push(newGrade);
    },
    computeAverageGrade: function() {
        if(this.grades === null || this.grades === undefined)
            return 0;
        let sum = this.grades.reduce((sum, current) => sum += current);
        return sum / this.grades.length;
    }
}

let std1 = Object.create(Student);
std1.firstname = "Hieu";
std1.lastname = "Tran";
std1.grades = [10,9];
std1.inputNewGrade(9.5);
console.dir(std1);
console.log(std1.computeAverageGrade());

let std2 = Object.create(Student);
std2.firstname = "Hieu 2";
std2.lastname = "Tran";
std2.grades = [];
std2.inputNewGrade(9);
std2.inputNewGrade(8);
console.dir(std2);
console.log(std2.computeAverageGrade());




//Question 2:

function Student2(lastname, firstname, grades) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.grades = grades;
}

Student2.prototype.inputNewGrade = function(newGrade) {
    if(this.grades === null || this.grades === undefined)
        this.grades = new Array(0);
    this.grades.push(newGrade);
};

Student2.prototype.computeAverageGrade = function() {
    if(this.grades === null || this.grades === undefined)
        return 0;
    let sum = this.grades.reduce((sum, current) => sum += current);
    return sum / this.grades.length;
};

let std3 = new Student2("Tran","Hieu",[10,9]);
std3.inputNewGrade(9.5);
console.dir(std3);
console.log(std3.computeAverageGrade());
let std4 = new Student2("Tran","Hieu 2",[]);
std4.inputNewGrade(9);
std4.inputNewGrade(8);
console.dir(std4);
console.log(std4.computeAverageGrade());


//Question 3
Array.prototype.sort = function() {
    this.sort((a,b) => a - b);
}


//Question 4
function Animal(name, speed){
    this.name = name;
    this.speed = speed;
}

Animal.prototype.run = function(speed){
    this.speed += speed;
}

Animal.compareBySpeed = function(e1, e2){
    return e1.speed - e2.speed;
}

function Rabbit(name, speed){
    Animal.call(this, name, speed);
}

Rabbit.prototype.hide = function(){
    console.log(this.name + " hides");
}

Object.setPrototypeOf(Rabbit,Animal);
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);

let r1 = new Rabbit("Poppy",5);
let r2 = new Rabbit("Lucky",7);

console.dir(r1);    
console.log(r1.name + " speed:" + r1.speed);
r1.run(3);
console.log(r1.name + " speed after run:" + r1.speed);

let compareSpd = Animal.compareBySpeed(r1,r2);
if(compareSpd < 0){
    console.log(r1.name + " run slower than "+ r2.name);
} else if(compareSpd == 0){
    console.log(r1.name + " run equal "+ r2.name);
} else{
    console.log(r1.name + " run faster than "+ r2.name);
}

r2.hide();