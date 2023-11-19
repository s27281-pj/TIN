class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this._oceny = []; // Zmieniłem nazwę właściwości ocen, aby uniknąć konfliktu z setterem
        this.sredniaOcen = 0;
    }

    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.sredniaOcen}.`;
    }

    set ocena(ocena) { // Zmieniłem nazwę settera na ocena, aby uniknąć konfliktu z właściwością
        if (ocena instanceof Ocena) {
            this._oceny.push(ocena);
            this.przeliczSrednia();
        } else {
            console.log("Błąd: Ocenę można dodać tylko w formie obiektu klasy Ocena.");
        }
    }

    get oceny() {
        return this._oceny.map(ocena => `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}`).join('. ');
    }

    przeliczSrednia() {
        if (this._oceny.length === 0) {
            this.sredniaOcen = 0;
        } else {
            const sumaOcen = this._oceny.reduce((suma, ocena) => suma + ocena.wartosc, 0);
            this.sredniaOcen = sumaOcen / this._oceny.length;
        }
    }
}

// Przykład użycia
let s = new Student('Jan', 'Kowalski');
console.log(s.hello());

s.ocena = new Ocena('WPR', 4);
s.ocena = new Ocena('TIN', 3);
s.ocena = new Ocena('POJ', 2);

console.log(s.oceny);
console.log(s.hello());
