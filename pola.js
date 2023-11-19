function poleFigury(rodzaj, a, b, h) {
    switch (rodzaj.toLowerCase()) {
        case 'prostokąt':
            return poleProstokata(a, b);
        case 'trapez':
            return poleTrapezu(a, b, h);
        case 'równoległobok':
            return poleRownolegloboku(a, b, h);
        case 'trójkąt':
            return poleTrojkata(a, h);
        default:
            return "Nieznany rodzaj figury.";
    }
}

function poleProstokata(a, b) {
    return a * b;
}

function poleTrapezu(a, b, h) {
    return ((a + b) * h) / 2;
}

function poleRownolegloboku(a, b, h) {
    return a * h;
}

function poleTrojkata(a, h) {
    return (0.5 * a * h);
}

// Przykład użycia
console.log(poleFigury('prostokąt', 4, 6)); // Wyświetli pole prostokąta o bokach 4 i 6
console.log(poleFigury('trapez', 3, 7, 5)); // Wyświetli pole trapezu o podstawach 3 i 7 oraz wysokości 5
console.log(poleFigury('równoległobok', 8, 5, 4)); // Wyświetli pole równoległoboku o bokach 8 i 5 oraz wysokości 4
console.log(poleFigury('trójkąt', 10, 8)); // Wyświetli pole trójkąta o podstawie 10 i wysokości 8
console.log(poleFigury('kula', 3, 4, 5)); // Wyświetli "Nieznany rodzaj figury."
