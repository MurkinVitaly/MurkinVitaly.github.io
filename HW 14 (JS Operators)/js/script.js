// Операторы
// Практика 1
// Написать оператор if..else который принимает значение с prompt и
// выводит в консоль
// 1, если значение больше нуля,
// 1, если значение меньше нуля,
// 0, если значение равно нулю.

let result = prompt("Input your string");
if (result == null){
    alert("Key Cancel was pressed");
}
else
{
if (result == 0){
    alert("result is 0");
}
else if (result > 0){
    alert("result is bigger then 0");
}
else {
    alert("result < 0")
}
}

// Практика 2 (тернарный оператор)
// Переписать в тернарный оператор
// var с = 1;
// var n;
// if (с> 0) {n = true; }
// else {n = false; }

var c=1;
var n
n = (c>0) ? true : false
console.log(n);

// Практика 3
// a = 5; b = 3;
// (a>b) && (a===b)
// true && 0 && (‘a’ < ‘Z’)
// (a>b) || true || (‘2’==2) || (false == ‘’)
// (a<b) && (0 == false)
// !(2==2) || (true && ‘’)


let a=5;
let b=3;
if (a>b || a===b){
    console.log("a>b");
}
else {
    console.log("a<b");
}
console.log(true && 0 && ("a"<"Z"));
console.log((a>b) || true || ("2"==2) || (false == ""));
console.log((a<b) && (0 == false));
console.log(!(2==2) || (true && ""));

// Практика 4
// С помощью конструкции switch записать следующие условия:
// - если ввели 1, то вывести в консоль 'a'
// - если ввели 2 - "b"
// - если ввели 3 - "c"
// - иначе - "z"

let d
switch (d){
    case "1": 
        console.log("a");
        break;
    case "2":
        console.log("b");
        break;
    case "3":
        console.log("c");
        break;
    default: console.log("z")
}

//Циклы
//Практика 5
//Вывести в консоль с помощью цикла квадраты чисел от 1 до 9(1,4,9, ... 81)

for (let e= 1 ; e<=9; e++){
    console.log(e*e);
}

//Практика 6
//Вывести в консоль с помощью цикла while квадраты чисел от 1 до 9
// 1,4,9, ... 81

let f=1;
do {
   console.log(f*f);
   f++;
} while (f<=9);

//Практика 7
//Функция принимает два параметра (числа) и возвращает больший из них

function GetNumber(number1,number2){
     if (number1>number2)
          return number1;
        else
          return number2;
      }
      console.log (GetNumber(4,5))
      
  
  


  







