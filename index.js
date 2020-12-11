var express = require('express');           // Importamos o Express para a nossa aplicação poder utilizar;
var bodyParser = require('body-parser');    // Referência para a requisição da biblioteca(módulo) do Body-parser;
var funcoes = require('./algoritmos');      // Utilizamos essa variável para se referir ao diretório onde estão as funções.
var app = express();                        // Instanciamos uma aplicação Express. A partir de agora podemos utilizar os comandos que o Express nos fornece;
var path = require('path');                 // Pacote embutido no node. Trabalha com os caminho do SO. Concatena caminhos.

var port = 3000;
app.use(bodyParser.json());            // Está recebendo os dados como json. O bodyParser intercepta as requisições. Essa biblioteca ajudará na leitura dos dados que vamos enviar via POST.

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));          // Indicando a pasta public.

app.set('view engine', 'ejs');      // Setar o motor (template) de views usado.
app.set('views', path.join(__dirname, 'views')); // Caminho da pasta views.

app.get('/', function(req, res) {
    const parametro = {
        titulo: 'Algoritmos Fundamentais',      // O mesmo "titulo" do arquivo "index.ejs"
        integrantes: 'Anderson Marques | Davi Viana | Germano Macieira'
    };
    res.render('index', parametro);
});


// 1-url Contador
app.post('/contador', function(req, res) {
    var body = req.body;
    var a = parseFloat(body.a);
    var resultado = funcoes.contador(a);       // body.a é a variável enviada para a aplicação 
    const parametro = {
        resultado: `A contagem de 1 até ${a} é: ${resultado}`
    };
    res.render('contador', parametro);  // Finalização da requisição;
});

app.get('/contador', function(req, res) {
    res.render('contador', {resultado: ""});
});


// 2-url Fibonacci
app.post('/fibonacci', function(req, res) {
    var body = req.body;
    var a = parseInt(body.a);
    var resultado = funcoes.fibonacci(a);       // body.a é a variável enviada para a aplicação. 
    
    const parametro = {
        resultado: `O ${a}° termo da sequencia fibonacci é: ${resultado}`
    };
    res.render('fibonacci', parametro);  // Finalização da requisição;
});

app.get('/fibonacci', function(req, res) {
    res.render('fibonacci', {resultado: ""});
});


// 3-url MDC
app.post('/mdc', function(req, res) {
    var body = req.body;
    var a = parseInt(body.a);
    var b = parseInt(body.b);
    const parametro = {};

    if(a.toString() == "NaN" || b.toString() == "NaN")
        parametro.resultado = `O mdc de ${a} e ${b} é: ${undefined}`;
    else if(a < 0 || b < 0)
        parametro.resultado = "não é possivel realizar mdc de um numero negativo";
    else
        parametro.resultado = `O mdc de ${a} e ${b} é: ${funcoes.mdc(a, b)}`;

    res.render('mdc', parametro);  // Finalização da requisição;
});

app.get('/mdc', function(req, res) {
    res.render('mdc', {resultado: ""});
});


// 4-url Primo
app.post('/primo', function(req, res) {
    var body = req.body;
    var a = parseInt(body.a);
    var resultado = funcoes.primo(a);       // body.a é a variável enviada para a aplicação. 
    const parametro = {};
    if(resultado)
        parametro.resultado = `${a} é primo!`;
    else
        parametro.resultado = `${a} não é primo!`;   
    res.render('primo', parametro);  // Finalização da requisição;
});

app.get('/primo', function(req, res) {
    res.render('primo', {resultado: ""});
});


// 5-url Quicksort
app.post('/quicksort', function(req, res) {
    var body = req.body;
    var a = body.a.split(",");
    var entradaInvalida = false;
    const parametro = {};
    for(i in a){                        //validando e ajustando entrada
        a[i] = parseInt(a[i]);
        if(a[i].toString() == "NaN"){
            entradaInvalida = true;
            break;
        }
    }

    if(entradaInvalida){
        parametro.resultado = "Entrada Invalida";
    }else{
        var entrada = a.toString();
        funcoes.medianOfThree(a); //ordena os indices 0, array.lengh-1 e parseInt(array.lengh/2) entre eles
        funcoes.quickSort(a, 0, a.length-1);
        parametro.resultado = `Valores digitados: ${entrada}\t. Sequência ordenada: ${a}`;
    }
    res.render('quickSort', parametro);  // Finalização da requisição;
});

app.get('/quicksort', function(req, res) {
    res.render('quickSort', {resultado: ""});
});

// 6-url Somatorio
app.post('/somatorio', function(req, res) {
    var body = req.body;
    var a = parseInt(body.a);
    var resultado = funcoes.somatorio(a);       // body.a é a variável enviada para a aplicação. 
    
    const parametro = {
        resultado: `Número digitado: ${a}. Valor do somatorio: ${resultado}`
    };
    res.render('somatorio', parametro);  // Finalização da requisição;
});

app.get('/somatorio', function(req, res) {
    res.render('somatorio', {resultado: ""});
});


app.listen(port, function() {                                           // Indicação da porta.
    console.log(`Servidor escutando na porta http://localhost:${port}/`);
});
