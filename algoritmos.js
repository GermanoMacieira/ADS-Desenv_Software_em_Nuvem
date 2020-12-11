// FUNÇÃO CONTADOR
function contador(a) {
    var total = 0;
    for(var i=1; i <= a; i++) {
    total++;
    }
    return total;
    }


//FUNÇÃO FIBONACCI
function fibonacci(num) {
    var a = 0;
    var b = 1;
    var aux;
    for(i=0; i < num; i++){
        aux = b
        b = a+b;
        a = aux;
    }
    return a;
}


//FUNÇÃO MDC
function mdc(m,n) {
    var candidato = 0;
    
    candidato = Math.min(m, n);
    
    while (m % candidato != 0 || n % candidato != 0) {
        candidato --;
    }
    
    return candidato;
}

// FUNÇÃO PRIMO
function primo(n){
	if(n<2 || n.toString() == "NaN") return false;
	for(let i=2; i <= Math.floor(Math.sqrt(n)); i++){
		if(n % i === 0) return false;
	}
	return true;
}

// FUNÇÃO QUICKSORT Digite de forma aleatória e separando com vírgulas, uma sequência de números:
const medianOfThree = (arr) => {
    // olhando apenas para o primeiro indice, ultimo indice, e o indice do centro do vetor
    // esta funcao ordena esses indices apenas entre eles
    var aux;
    if(arr[0] > arr[arr.length-1]){
        aux = arr[0];
        arr[0] = arr[arr.length-1];
        arr[arr.length-1] = aux;
    }
    if(arr[parseInt(arr.length/2)] > arr[arr.length-1]){
        aux = arr[arr.length-1];
        arr[arr.length-1] = arr[parseInt(arr.length/2)];
        arr[parseInt(arr.length/2)] = aux;
    }
    if(arr[0] > arr[parseInt(arr.length/2)]){
        aux = arr[0];
        arr[0] = arr[parseInt(arr.length/2)];
        arr[parseInt(arr.length/2)] = aux;
    }
}

const quickSort = (arr, left, right) => {
    // caso o vetor tenha tamanho menor que 2 a funcao para aqui
    if(right - left < 1) return;
    
    var initialRight = right;
    var initialLeft = left;

    //definindo o pivot para o meio do vetor delimitado pelas variaveis left right
    var pivot = parseInt((left + right+1) /2);

    // movendo pivot para o final do vetor caso não esteja, e mudando ponteiros
    if(pivot != right){
        var aux = arr[pivot];
        arr[pivot] = arr[right];
        arr[right] = aux;
        pivot = right;
        right--;
    }

    // colocando valores maiores que o pivot para direita e menores para esquerda
    while(left <= right){
        if(arr[left] > arr[pivot] && arr[right] <= arr[pivot]){
            aux = arr[left];
            arr[left] = arr[right];
            arr[right] = aux;
            left++;
            right--;
        }else{
            if(arr[left] <= arr[pivot]) left++;
            if(arr[right] > arr[pivot]) right--;
        }
    }

    // trocando o elemento do indice left com o pivot
    // desta forma todos os elementos a direita do pivot são maiores que ele, e os a esquerda menores
    if(left < pivot){
        aux = arr[pivot];
        arr[pivot] = arr[left];
        arr[left] = aux;
        pivot = left;
    }

    // chamando a funcao para as subpartes
    // esquerda
    quickSort(arr, initialLeft, pivot-1)
    // direita
    quickSort(arr, pivot+1, initialRight);
}

// FUNÇÃO SOMATÓRIO Digite um número! Será somado a ele todos os seus antecessores.
function somatorio(num) {
    var soma = 0;
    for(var i = 1; i <= num; i++) {
        soma += i;
    }
    return soma;
}


module.exports = {
    contador, fibonacci, mdc, primo, quickSort, medianOfThree, somatorio
};
