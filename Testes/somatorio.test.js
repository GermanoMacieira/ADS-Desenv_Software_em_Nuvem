
    const algoritmo = require('./algoritmos');

    // Teste 01: com um número inteiro
    test('Somatório de um número inteiro', () => {
        const somatorio = algoritmo.somatorio(4);
        expect(somatorio).toBe(10);
    });

    // Teste 02: com uma string
    test('Somatório de um número tipo string', () => {
        const somatorio = algoritmo.somatorio('4');
        expect(somatorio).toBe(10);
    });
