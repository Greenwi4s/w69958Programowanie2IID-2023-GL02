function obliczSilnie(n) {
    if (n < 0) {
        return 0;
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * obliczSilnie(n - 1);
    }
}
const formularz = document.querySelector('form');
const poleLiczby = document.getElementById('liczba');
const poleWyniku = document.getElementById('wynik');

formularz.addEventListener('submit', function(event) {
    event.preventDefault();

    const liczba = parseInt(poleLiczby.value);
    const wynik = obliczSilnie(liczba);

    poleWyniku.textContent = `Silnia ${liczba} wynosi: ${wynik}`;
});

const przyciski = document.querySelectorAll('.przycisk');

przyciski.forEach(przycisk => {
    przycisk.addEventListener('click', function() {
        aktywujPrzycisk(this);
    });
});

function aktywujPrzycisk(kliknietyPrzycisk) {
    przyciski.forEach(przycisk => {
        przycisk.classList.remove('przycisk-aktywny');
    });

    kliknietyPrzycisk.classList.add('przycisk-aktywny');
}
const zm = document.querySelector("#zmin");
function zmin()
{
    zm.classList.toggle('active');
}
const ul = document.querySelector('ul');
const table = document.getElementById('mytable')

function zad4()
{
    const value = document.querySelector('#name').value;
    document.querySelector('#name').value = null;
    const li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);

    const surname = document.querySelector('#surname').value;
    document.querySelector('#surname').value = null;
    var newRow = table.insertRow();
    var newCell = newRow.insertCell();
    newCell2=newRow.insertCell();
    newCell.textContent = value;
    newCell2.textContent = surname;
}