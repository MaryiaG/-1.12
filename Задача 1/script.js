const array = [1, 5, 8, 9, 6, 4, 2, 5, 10, 9, 6];

// Расчет суммы четных чисел 36

// function evenNum(numbers) {
//     let result = 0;
//     for(let i = 0; i< numbers.length; i++) {
//         if(numbers[i]% 2 === 0) {
//             result = result + numbers[i];
//         }
//     }
//     return result;
// }
// let result = evenNum(array);
// console.log("Сумма четных чисел:", result);





// расчет суммы нечетных чисел 29

// function oddNum(numbers) {
//     let result = 0;
//     for(let i = 0; i< numbers.length; i++) {
//         if(numbers[i]% 2 !== 0) {
//             result = result + numbers[i];
//         }
//     }
//     return result;
// }
// let result = oddNum(array);
// console.log("Сумма нечетных чисел:", result);






// Выводит наибольшую сумму

function biggerSum (sum1, sum2) {
    if(sum1 > sum2){
        console.log("Наибольшая сумма: " + sum1);
    }
    else{
        console.log("Наибольшая сумма: " + sum2);
    }
    }
    biggerSum(oddNum, evenNum);
    
