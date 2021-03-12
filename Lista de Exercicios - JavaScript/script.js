function exe1() {
    var notas = [10, 7, 8, 10, 6, 3, 5];
    var quantidade = notas.length;
    var soma = 0;

    for (var i=0; i<quantidade; i++){      
            soma += notas[i];
    };

    var media = (soma/quantidade);
    alert("A média das notas é " + media);
};

function exe2() {
    const notas = prompt("Digite as notas separadas por vírgulas: ")
    array_notas = notas.split(",");
    
    var quantidade = array_notas.length;
    var soma = 0;

    for (var i=0; i<quantidade; i++){      
            soma += parseInt(array_notas[i]);
    };
    
    var media = (soma/quantidade);
    alert("A média das notas inseridas é " + media);
};

function exe3() {
    var numeros = [];
    for (var i = 0; i<5;i++) {
        var numero = prompt("Digite um número: ");
        numeros.push(numero*numero);
    };
    alert("O quadrado dos numeros digitados é, respectivamente: " + numeros);
};

function exe4() {
    const numeros = prompt("Digite os números separadas por vírgulas: ")
    array_numeros = numeros.split(",");

    var maior = 0;
    for (let i=0; i < array_numeros.length; i++) {
        if (array_numeros[i] > maior) {
            maior = array_numeros[i];
        }
    }
    alert("O maior número digitado é o: " + maior);
}

function exe5() {
    let idade = prompt("Digite as idades separadas por vírgulas: ");
    let ages = idade.split(",");
    alert("Maiores de idade: " + maioresDeIdade(ages)+ "\nMenores de idade: "+ menoresDeIdade(ages));

    function maioresDeIdade(idades){
        let countmaior = 0
        idades.forEach(element => {
            if (element >= 18) {
                countmaior = countmaior + 1;
            }
        })
        return countmaior;
    };

    function menoresDeIdade(idades) {
        let countmenor = 0
        idades.forEach(element => {
            if (element < 18) {
                countmenor = countmenor + 1;
            }
        });
        return countmenor;
    }     
}