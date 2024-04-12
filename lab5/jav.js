function sprawdzWiek() {
    const wiek = parseInt(document.getElementById('wiek').value);
    const komunikat = document.getElementById('komunikat');

    if (wiek < 18) {
        komunikat.textContent = "Niestety, nie jesteś pełnoletni";
    } else {
        komunikat.textContent = "Jesteś pełnoletni";
    }
}

function konwertujCF() {
    const celsius = parseFloat(document.getElementById('temperaturaCelsjusza').value);
    if (isNaN(celsius)) {
        alert("Podana wartość nie jest liczbą!");
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    const wynikElement = document.getElementById('wynik');
    wynikElement.textContent = `${celsius} stopni Celsjusza odpowiada ${fahrenheit.toFixed(2)} stopniom Fahrenheita.`;
}

const numbers = [15, 2, 14, 8, 5];


const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`suma: ${sum}`);


const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(`liczby parzyste: ${evenNumbers}`);


const multipliedNumbers = numbers.map(number => number * 3);
console.log(`wartości pomnożone przez 3: ${multipliedNumbers}`);


const studentNumber = 69958; 
const updatedNumbers = [...numbers, studentNumber];
const studentNumberIndex = updatedNumbers.indexOf(studentNumber);
console.log(`tablica z dodanym numerem albumu: ${updatedNumbers}`);
console.log(`indeks numeru albumu: ${studentNumberIndex}`);

const average = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / numbers.length;
console.log(`srednia arytmetyczna: ${average.toFixed(2)}`); 

const largestNumber = Math.max(...numbers);
console.log(`najwieksza liczba: ${largestNumber}`);

const selectedValue = 5; 
const occurrenceCount = numbers.filter(number => number === selectedValue).length;

const fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; i < 100; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);
