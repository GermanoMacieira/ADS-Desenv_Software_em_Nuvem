
    const algoritmo = require('./algoritmos');

    // Teste 01: com dois números inteiros
    test('Entrando com dois números inteiros', () => {
        const mdc = algoritmo.mdc(4,8);
        expect(mdc).toBe(4);
    });

    // Teste 02: com strings
    test('Imput com uma string', () => {
        const mdc = algoritmo.mdc('8', '4');
        expect(mdc).toBe(4);
    });
