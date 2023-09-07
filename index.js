//import biblioteki readline-sync
const readline = require('readline-sync');

//pobranie od użytkownika liczby
const number = parseInt(readline.question('Podaj cyfre wieksza od 0: '));

//sprawzdenie czy liczba jest mniejsza od 1
if (number < 1) {
    console.log('Podana liczba jest mniejsza od 1, nie może być liczbą pierwszą');
    process.exit(0);
}

//sprawdzenie czy liczba jest równa 1
if (number === 1) {
    console.log ('1 nie jest ani liczbą pierwszą ani złożoną');
    process.exit(0);
}

//pobranie liczby całkowitek pierwiastka z liczby
//number = parseInt(Math.sqrt(number));

//funkcja sprawdzenia czy liczba jest pierwsza
function checkPrime(number) {
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
    }
    return true;
}

function prepareNumber(number) {
    let numbers = [];
    number.split('').forEach(num => {
        numbers.push(parseInt(num));
    });
    return numbers;
}

//zamiana int na string
const numberString = number.toString();

//przygotowanie tablicy z liczbami
let numbersArray = prepareNumber(numberString);

//sprawdzenie czy cała liczba jest pierwsza
let whole = checkPrime(number);

//sprawdzenie sumy cyfr
let sumArray = 0;
for (let x of numbersArray) {
    sumArray += x;
}
let sum = checkPrime(sumArray);

//sprawdzenie poszczeólnych cyfr
let each = true;
for (let z of numbersArray) {
    if (checkPrime(z) === true) {
        each = true;
    } else {
        each = false;
        break;
    }
}

//podsumowanie
if (whole === true && sum === true && each === true) {
    console.log(`${number} jest w pełni liczbą pierwszą`);
} else {
    console.log(`${number} nie jest w pełni liczbą pierwszą`);
}

process.exit(0);





   




