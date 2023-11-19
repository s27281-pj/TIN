function narysujChoinkę(wysokość) {
    if (wysokość <= 0) {
        console.log("Wysokość choinki musi być większa od zera.");
        return;
    }

    const szerokośćRamki = 2 + 2 * wysokość; // szerokość ramki (2 od lewej + 2 od prawej)

    // Góra choinki
    for (let i = wysokość; i >= 1; i--) {
        let gwiazdki = '*'.repeat(i);
        let spacjePo = ' '.repeat(2 * (wysokość - i));
        let gwiazdkiPo = '*'.repeat(i);

        console.log('*' + gwiazdki + spacjePo + gwiazdkiPo + '*');
    }

    
    // Ramka dolna
    console.log('*'.repeat(szerokośćRamki));
}

// Przykład użycia funkcji z wysokością choinki równą 10
narysujChoinkę(10);
