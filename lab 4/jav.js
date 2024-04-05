
// const Book = function(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   };
  
//   Book.prototype.getDetails = function() {
//     return `${this.title} - ${this.author} (${this.year})`;
//   };
  
//   const book = new Book("Hero of WSIZ", "Pasha Mysliuk", 1954);
//   console.log(book.getDetails());

//   const Student = function(imie, nazwisko, numerAlbumu, oceny) {
//     this.imie = imie;
//     this.nazwisko = nazwisko;
//     this.numerAlbumu = numerAlbumu;
//     this.oceny = oceny;
//   };
  
//   Student.prototype.obliczSredniaOcen = function() {
//     const sumaOcen = this.oceny.reduce((a, b) => a + b, 0);
//     return sumaOcen / this.oceny.length;
//   };
  
//   const student = new Student("Sanya", "Vyshneski", 69950, [4, 5, 3, 4]);
//   const sredniaOcen = student.obliczSredniaOcen();
//   console.log(`Średnia ocen studenta ${student.imie} ${student.nazwisko}: ${sredniaOcen}`);

// class Samochod {
//     constructor(marka, model, rokProdukcji, kolor, predkosc) {
//       this.marka = marka;
//       this.model = model;
//       this.rokProdukcji = rokProdukcji;
//       this.kolor = kolor;
//       this.predkosc = predkosc;
//     }
  
//     zwiekszPredkosc(wartosc) {
//       this.predkosc += wartosc;
//     }
  
//     zmniejszPredkosc(wartosc) {
//       this.predkosc -= wartosc;
//     }
  
//     getInformacje() {
//       return `Marka ${this.marka} ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc}`;
//     }
    
//     getWiek() {
//         const dzisiaj = new Date();
//         return dzisiaj.getFullYear() - this.rokProdukcji;
//       }
    
//   }
  
//   const samochod = new Samochod("Fiat", "w666", 2010, "czerwony", 50);
//   samochod.zwiekszPredkosc(20);
//   console.log(samochod.getInformacje());
//   samochod.zmniejszPredkosc(10);
//   console.log(samochod.getInformacje());
//   console.log(`Wiek samochodu: ${samochod.getWiek()} lat`);

class Prostokat {
  constructor(dlugosc, szerokosc) {
    this.dlugosc = dlugosc;
    this.szerokosc = szerokosc;
  }

  getPole() {
    return this.dlugosc * this.szerokosc;
  }

  getObwod() {
    return 2 * (this.dlugosc + this.szerokosc);
  }

  czyJestKwadratem() {
    return this.dlugosc === this.szerokosc;
  }
}

// const prostokat = new Prostokat(5, 10);
// console.log(`Pole prostokąta: ${prostokat.getPole()}`);
// console.log(`Obwód prostokąta: ${prostokat.getObwod()}`);
// console.log(`Czy prostokąt jest kwadratem? ${prostokat.czyJestKwadratem()}`);

// const kwadrat = new Prostokat(5, 5);
// console.log(`Pole kwadratu: ${kwadrat.getPole()}`);
// console.log(`Obwód kwadratu: ${kwadrat.getObwod()}`);
// console.log(`Czy kwadrat jest kwadratem? ${kwadrat.czyJestKwadratem()}`)
window.onload = function() {
    const dlugoscEl = document.getElementById("dlugosc");
    const szerokoscEl = document.getElementById("szerokosc");
    const obliczEl = document.getElementById("oblicz");
}
const dlugoscEl = document.getElementById("dlugosc");
const szerokoscEl = document.getElementById("szerokosc");
const obliczEl = document.getElementById("oblicz");

obliczEl.addEventListener("click", () => {
  const dlugosc = parseInt(dlugoscEl.value, 10);
  const szerokosc = parseInt(szerokoscEl.value, 10);

  const prostokat = new Prostokat(dlugosc, szerokosc);

  const informacje = `
    Pole prostokąta: ${prostokat.getPole()}
    Obwód prostokąta: ${prostokat.getObwod()}
    Czy prostokąt jest kwadratem? ${prostokat.czyJestKwadratem()}
  `;

  console.log(informacje);
});