//import biblioteki readline-sync
const readline = require('readline-sync');

//zmienna przechowująca informację czy liczba jest pierwsza
let isPrime = true;

//pobranie od użytkownika liczby
const number = parseInt(readline.question('Podaj cyfre wiekszą od 0: '));
console.log(number);
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
                isPrime = false;
                break;
            }
        }
    }
}

//pobranie długości
const numberLen = number.toString().length;
console.log(isPrime);



   




