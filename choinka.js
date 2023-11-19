function narysujChoinkę(wysokość) {
    if (wysokość <= 0) {
        console.log("Wysokość choinki musi być większa od zera.");
        return;
    }

    for (let i = 1; i <= wysokość; i++) {
        let gwiazdki = '*'.repeat(2 * i - 1);
        let spacje = ' '.repeat(wysokość - i);

        console.log(spacje + gwiazdki);
    }

    // Stabilizator (dół choinki)
    console.log(' '.repeat(wysokość - 1) + '|');
}

// Przykład użycia funkcji z wysokością choinki równą 5
narysujChoinkę(5);