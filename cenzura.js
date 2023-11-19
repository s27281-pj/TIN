function cenzura(niedozwoloneSlowa, zdanie) {
    if (!Array.isArray(niedozwoloneSlowa) || typeof zdanie !== 'string') {
        console.log('Błąd: Nieprawidłowe argumenty.');
        return;
    }

    let zdanieCenzura = zdanie;

    niedozwoloneSlowa.forEach(slowo => {
        const regex = new RegExp('\\b' + slowo + '\\b', 'gi');
        zdanieCenzura = zdanieCenzura.replace(regex, '*'.repeat(slowo.length));
    });

    console.log(zdanieCenzura);
}

// Przykład użycia
cenzura(['Ala', 'kot'], 'Ala ma kota i psa');
