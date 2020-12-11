
    const algoritmo = require('./algoritmos');

    // Teste 01: número inteiro
    test('Contar 1 até 3 é igual a 3', () => {
        const cont = algoritmo.contador(3);
        expect(cont).toBe(3);
    });

    // Teste 02: com string
    test('Contar 1 até 3 inserindo 3 como string', () => {
        const cont = algoritmo.contador('3');
        expect(cont).toBe(3);
    });

    // Teste 03: com número decimal
    test('Contar 1 até 3 é igual a 3.6', () => {
        const cont = algoritmo.contador(3);
        expect(cont).toBe(3);
    });