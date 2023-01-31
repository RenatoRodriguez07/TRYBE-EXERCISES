const readline = require('readline-sync');

const weight = readline.questionInt('What is your weight?');
const height = readline.questionFloat('What is your heigth?');

const bmi = (weight, height) => {
    const imc = weight / (height ** 2);
    if (bmi < 18.5) {
        console.log("Abaixo do peso (magreza)") 
        return;
    }
    if (bmi >= 18.5 && bmi < 25) {
        console.log("Peso normal")
        return; 
    }
    if (bmi >= 25 && bmi < 30) {
        console.log("Acima do peso (sobrepeso)")
        return; 
    }
    if (bmi >= 30 && bmi < 35) {
        console.log("Obesidade grau I");
        return;
    }
    if (bmi >= 35 && bmi < 40) {
        console.log("Obesidade grau II");
        return;
    }
        console.log("Obesidade graus III e IV");
        return;
    
};


console.log(`Hello, your bmi is ${bmi}!`);