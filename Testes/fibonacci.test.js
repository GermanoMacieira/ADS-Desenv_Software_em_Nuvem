
    const funcao = require('./algoritmos');

    // Teste 01: número inteiro
    test('Entrando com um número inteiro', () => {
        const fibo = funcao.fibonacci(4);
        expect(fibo).toBe(3);
    });

    // Teste 02: com string
    test('Imput com uma string', () => {
        const fibo = funcao.fibonacci('4');
        expect(fibo).toBe(3);
    });
