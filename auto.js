const auto = {
    rok: 2010,
    przebieg: 120000,
    cena_wyjsciowa: 30000,
    cena_koncowa: 25000,
    
    powiekszCeneWyjsciowa: function() {
        this.cena_wyjsciowa += 1000;
    },

    obnizCeneKoncowaZaRok: function() {
        const wiek = new Date().getFullYear() - this.rok;
        this.cena_koncowa -= wiek * 1000;
    },

    obnizCeneKoncowaZaPrzebieg: function() {
        const iloscSetekTysiecyKm = Math.floor(this.przebieg / 100000);
        this.cena_koncowa -= iloscSetekTysiecyKm * 10000;
    },

    dopiszPrzebiegIRok: function(przebiegNowy, rokNowy) {
        this.przebieg = przebiegNowy;
        this.rok = rokNowy;
        this.obnizCeneKoncowaZaRok();
        this.obnizCeneKoncowaZaPrzebieg();
    }
};

// Przykłady użycia
console.log("Cena przed: ", auto.cena_wyjsciowa);
auto.powiekszCeneWyjsciowa();
console.log("Cena po powiększeniu: ", auto.cena_wyjsciowa);

console.log("Cena końcowa przed: ", auto.cena_koncowa);
auto.obnizCeneKoncowaZaRok();
console.log("Cena końcowa po obniżeniu za rok: ", auto.cena_koncowa);

console.log("Cena końcowa przed: ", auto.cena_koncowa);
auto.obnizCeneKoncowaZaPrzebieg();
console.log("Cena końcowa po obniżeniu za przebieg: ", auto.cena_koncowa);

console.log("Przebieg przed: ", auto.przebieg, " Rok przed: ", auto.rok);
auto.dopiszPrzebiegIRok(150000, 2015);
console.log("Przebieg po: ", auto.przebieg, " Rok po: ", auto.rok, " Cena końcowa po zmianach: ", auto.cena_koncowa);
