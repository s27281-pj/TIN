function tabliczkaMnozenia(bok) {
    for (let i = 1; i <= bok; i++) {
        let row = '';
        for (let j = 1; j <= bok; j++) {
            row += `${i * j}\t`;
        }
        console.log(row);
    }
}

// Przykład użycia funkcji z bokiem o długości 5
tabliczkaMnozenia(5);