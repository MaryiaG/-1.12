function repeat(string, number){
    let result = [];
    for(let i = 0; i < number; i++) {
        result.push(string);
    }
    return result;
}
let array = repeat("dog", 3);
console.log(array);