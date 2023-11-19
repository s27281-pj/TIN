function czyTrojkaPitagorejska(a, b, c) {
    // Sortujemy liczby rosnąco
    const sortedNumbers = [a, b, c].sort((x, y) => x - y);

    // Sprawdzamy warunek trójkąta pitagorejskiego
    return sortedNumbers[0] ** 2 + sortedNumbers[1] ** 2 === sortedNumbers[2] ** 2;
}

// Przykłady użycia funkcji
console.log(czyTrojkaPitagorejska(3, 4, 5));  // true
console.log(czyTrojkaPitagorejska(5, 12, 13)); // true
console.log(czyTrojkaPitagorejska(1, 2, 3));   // false
