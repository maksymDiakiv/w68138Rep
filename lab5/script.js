//zad1
// let age = prompt("enter your age ");
// if (parseInt(age) >= 18){
//     console.log("użytkownik jest pełnołetnim");
// }else{
//     console.log("użytkownik nie jest pełnołetnim");
// }

//zad2
// let Cels = prompt("celsiusz ");
// console.log((parseFloat(Cels)*(9/5)+32));



//zad3
// let numbers = [1, 34, 68, 35, 35, 35, 35];
// let sum = 0;
// let sredAr = 0;
// for(let i = 0; i<numbers.length; i++){
//     sum += numbers[i];
// }
// console.log(sum)
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i]%2 == 0){
//         console.log(numbers[i])
//     }

// }

// for(let i = 0; i < numbers.length; i++){
//     console.log("triple element " + numbers[i]*3)
// }

// numbers.push(68138)
// console.log(numbers.indexOf(68138))

// for(let i = 0; i < numbers.length; i++){
//     sredAr += numbers[i]
// }

// console.log(sredAr/numbers.length)

// let maxElement = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxElement) {
//         maxElement = numbers[i];
//     }
// }
// console.log(maxElement)

// console.log(numbers.filter(x => x==35).length)
//zad4
let fib = []
counter = 0
firstNum = 1;
secondNum = 2;
sum = firstNum + secondNum;
while(counter != 100){
    firstNum = secondNum
    secondNum = sum
    sum = firstNum + secondNum
    counter++
    console.log(firstNum, secondNum, sum)
}