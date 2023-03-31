// function displayBook(value){

// }

// function Book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getAge = function(){
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }
// const obj2 = new Book('No longer human', 'Osamu Dazai', 1948);
// displayBook(obj2);

// class Student{
//     constructor(studentName, studentSurname, albumNum, grade1, grade2, grade3){
//         this.studentName = studentName;
//         this.studentSurname = studentSurname;
//         this.albumNum = albumNum;
//         this.grade1 = grade1;
//         this.grade2 = grade2;
//         this.grade3 = grade3;
//     }
//     information(){
//         return this.studentName + ' ' + this.studentSurname + ' ' + this.albumNum + ' ' + this.grade1 + ' ' + this.grade2 + ' ' + this.grade3 + ' ' + (this.grade1 + this.grade2 + this.grade3)/3;
//     }
// }
// const maks = new Student('Maksym', 'Diakiv', 'w68138', 5, 4.5, 3);
// console.log(maks.information());

// class Auto{
//     constructor(marka, model, rok, kolor, pred){
//         this.marka = marka;
//         this.model = model;
//         this.rok = rok;
//         this.kolor = kolor;
//         this.pred = pred;
//     }
//     decreasePred(){
//         this.pred = this.pred - 20;
//         return this.pred + ' zmniejszona predkosc';
//     }
//     increasePred(){
//         this.pred = this.pred + 20;
//         return this.pred + ' zwiekszona pred';
//     }
//     information(){
//         return this.marka + ' ' + this.model + ' ' + '(' +this.rok+ ')' + " " + ',' +' ' + this.kolor + ' ' +  'Predkosc : ' + this.pred;
//     }
//     age(numb){
//         return numb + ' ' + "wiek samochodu"
//     }

// }

// audi = new Auto('Audi', 'a4', 1997, "czarwony", 287);
// console.log(audi.information());
// console.log(audi.increasePred());
// console.log(audi.decreasePred());
// console.log(audi.age(26))

class Rect{
    constructor(square, per){
        this.square = square;
        this.per = per;
    }
    squareRet(){
        return this.square;
    }
    perRet(){
        return this.per;
    }
    checkIfSqr(){
        if((this.per/4)**2 == this.square){
            return "is a square";
        }
        else{
            return "not a square";
        }
    }
}

kwad = new Rect(25, 20);
console.log(kwad.checkIfSqr());
rec = new Rect(30, 20);
console.log(rec.checkIfSqr());