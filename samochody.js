const samochody = [
    { rok: 2010, przebieg: 120000, cena_wyjsciowa: 30000, cena_koncowa: 25000 },
    { rok: 2015, przebieg: 80000, cena_wyjsciowa: 35000, cena_koncowa: 28000 },
    { rok: 2018, przebieg: 60000, cena_wyjsciowa: 40000, cena_koncowa: 32000 }
];

// Funkcja dopisująca auto do tablicy samochodow, jeśli jego cena jest większa niż 10000
function dopiszAuto(samochod) {
    if (samochod.cena_wyjsciowa > 10000) {
        samochody.push(samochod);
    }
}

// Funkcja zwiększająca rok o 1 dla wszystkich aut w tablicy
function zwiekszRok() {
    samochody.forEach(auto => {
        auto.rok += 1;
    });
}

// Przykłady użycia
console.log("Tablica samochodow przed dodaniem:");
console.log(samochody);

const noweAuto = { rok: 2020, przebieg: 5000, cena_wyjsciowa: 15000, cena_koncowa: 12000 };
dopiszAuto(noweAuto);

console.log("Tablica samochodow po dodaniu nowego auta:");
console.log(samochody);

zwiekszRok();

console.log("Tablica samochodow po zwiekszeniu roku o 1 dla wszystkich aut:");
console.log(samochody);
