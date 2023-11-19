function trojkatPascala(wysokosc) {
    if (wysokosc <= 0) {
        console.log("Wysokość trójkąta Pascala musi być większa od zera.");
        return;
    }

    // Funkcja do obliczania współczynnika Newtona (symbol Newtona)
    const symbolNewtona = (n, k) => {
        if (k === 0 || k === n) {
            return 1;
        } else {
            return symbolNewtona(n - 1, k - 1) + symbolNewtona(n - 1, k);
        }
    };

    // Wypisanie trójkąta Pascala
    for (let i = 0; i < wysokosc; i++) {
        let wiersz = '';
        for (let j = 0; j <= i; j++) {
            wiersz += symbolNewtona(i, j) + ' ';
        }
        console.log(' '.repeat(wysokosc - i - 1) + wiersz.trim());
    }
}

// Przykład użycia z wysokością trójkąta równą 5
trojkatPascala(5);
