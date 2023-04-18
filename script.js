
//task 1
let a = Number(prompt("Enter number a:"));
let b = Number(prompt("Enter number b:"));
function maxNumbers(a, b) {

            if (a > b) {
                return `a = ${a} > is bigger`
            };

            if (a < b) {
                return `b = ${b} > is bigger`
            };

            return `"${a} = ${b}"`
        };

        
            alert(maxNumbers(a, b))
    

 //task 2
  function task2(){
  let num2= prompt("Enter the number:?",'');
  alert(-num2);
  }
 task2();

 //task3

 let number3 = Number(prompt("Enter number n:"));
 let count3 = Number(prompt("How many times you want to repeat n+3?"));

 function three(number3, count3) {
   return((number3+3)*count3); 
 }

 alert(three(+number3, +count3));

//task4
 let km = Number(prompt("Enter distance in km:"));
 let metric = prompt("To which metric you want to convert km? If meters enter 'm', if cantimeters enter 'cm'.", '');

function getMetrics(metric, km){
if(metric==='m'){
  return km*1000;
  
}
if(metric==='cm'){
  return km*100000;
}
return false
}
alert(getMetrics(metric, km));
