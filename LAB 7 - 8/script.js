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
//Funkcja sprawdzająca czy pole jest puste. Gdy jest puste ustawia treść wiadomości w polu z błędem oraz zwraca true
function requiredValidation(field, errorField) {
  //filed.value zawiera wartość wprowadzoną w polu
  //!field.value sprawdza czy pole nie jest nullem albo undefined
  if (!field.value || field.value === '') {
      errorField.innerHTML = 'To pole jest wymagane';
      return true;
  }
  else {
      errorField.innerHTML = '';
      return false;
  }
}

//Funkcja sprawdzająca czy pole spełnia wymaganie co do ilości znaków
//Funkcja przyjmuje parametr minLength (domyślnie ustawiany na 0), który definuje ile znaków jest wymaganych w polu
function minLengthValidation(field, errorField, minLength = 0) {
  if (field.value.length < minLength) {
      errorField.innerHTML = `To pole musi mieć conajmniej ${minLength} znaków`;
      return true;
  }
  else {
      errorField.innerHTML = '';
      return false;
  }
}



//Funckja sprawdzająca czy któreś pole typu radio zostało zaznaczone
function radioRequiredValidation(fields, errorField, errorMessage = '') {
  let result = false;

  fields.forEach(field => {
      result = field.checked || result;
  });

  errorField.innerHTML = result ? '' : errorMessage;

  return !result;
}




function validConfirmPassword(confirmPasswordField, passwordField, errorField) {
  if (confirmPasswordField.value !== passwordField.value) {
      errorField.innerHTML = 'Hasła nie są takie same';
      return true;
  }
  else {
      errorField.innerHTML = '';
      return false;
  }
}
const telefon = document.getElementById('telefon');

telefon.addEventListener('keydown', (event) => {
  // Sprawdź, czy naciśnięty klawisz nie jest cyfrą (0-9)
  if (!/[0-9]/.test(event.key)) {
    // Zapobiegnij domyślnemu zachowaniu (wpisanie znaku)
    event.preventDefault();
  }
});