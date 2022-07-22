// 2
// console.log(numbers)


// 2 
// let soma = 0;
// for (index = 0; index < numbers.length; index +=1 )
// soma += numbers[index];
// console;console.log(soma);

// 3
// let soma = 0;
//     for (index = 0; index < numbers.length; index +=1 )
//        soma += numbers[index];

// let media = soma / numbers.length;
// console.log(media);        
// 4
// let soma = 0;
//     for (index = 0; index < numbers.length; index +=1 )
//        soma += numbers[index];

// let media = soma / numbers.length;
// if (media > 20) {
//     console.log("Valor maior que 20");
// } else {
    //     console.log("valor menor ou igual a 20")
// }
// 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for (let index = 0;  index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
        if (numbers[index] > numbers[index2] && numbers[index] > maior) {
            maior = numbers[index];
        }
    }
}
console.log(maior)

