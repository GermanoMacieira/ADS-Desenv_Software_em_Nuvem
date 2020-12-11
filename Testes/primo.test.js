
    const algoritmo = require('./algoritmos');

    // Teste 01: é primo
    test('Entrando com um número primo', () => {
        const primo = algoritmo.primo(5);
        expect(primo).toBe(true);
    });

    // Teste 02: não é primo
    test('Imput com um não primo', () => {
        const primo = algoritmo.primo(4);
        expect(primo).toBe(false);
    });

