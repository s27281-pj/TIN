function wypiszPodzielne(a, b, c) {
    if (a > b || c === 0) {
        console.log("Nieprawidłowe dane wejściowe.");
        return;
    }

    console.log(`Liczby podzielne przez ${c} w przedziale od ${a} do ${b}:`);
    
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}

// Przykład użycia funkcji
wypiszPodzielne(10, 50, 5);
