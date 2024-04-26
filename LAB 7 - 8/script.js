const formularz = document.getElementById('formularz');
const imieInput = document.getElementById('imie');
const nazwiskoInput = document.getElementById('nazwisko');
const emailInput = document.getElementById('email');
const hasloInput = document.getElementById('haslo');
const plecSelect = document.getElementById('plec');
const telefonInput = document.getElementById('telefon');
const dataUrodzenia = document.getElementById('dataUrodzenia'),
error = document.querySelector("#urderror")
function sprawdzDateUrodzenia() {
    const urodzony = new Date(dataUrodzenia.value);
    const dzisiaj = new Date();
    const rok18Lat = dzisiaj.getFullYear() - 18;
    const miesiac18Lat = dzisiaj.getMonth() + 1; // Uwaga na miesiąc od 0!
    const dzien18Lat = dzisiaj.getDate();
  
    if (urodzony.getFullYear() > rok18Lat) {
      
        error.innerHTML = 'dataUrodzenia Musisz mieć co najmniej 18 lat'
     
    } else if (urodzony.getFullYear() === rok18Lat && urodzony.getMonth() + 1 > miesiac18Lat) {
      error.innerHTML ='dataUrodzenia Musisz mieć co najmniej 18 lat'
    
     
    }}
    dataUrodzenia.addEventListener('input', () => {
    sprawdzDateUrodzenia()
});
