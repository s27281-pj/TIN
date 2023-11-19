function fibonacci(length) {
    if (length <= 0) {
        console.log("Długość ciągu musi być większa od zera.");
        return;
    }

    let fibArray = [0, 1];

    for (let i = 2; i < length; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    console.log(`Ciąg Fibonacciego o długości ${length}:`);
    console.log(fibArray.join(', '));
}

// Przykład użycia funkcji z długością ciągu równą 10
fibonacci(10);
