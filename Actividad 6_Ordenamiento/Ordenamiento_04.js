/* 4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.
Entrada -> [“adios”,“hola”,“maximo”,“uno”,“despedida”]
Salida -> [“uno”,“hola”,“adios”,“maximo”,“despedida”] */

function Ordenar(array) {
    return array.sort(function (a, b) {
        return a.length - b.length;
    })
}

const entrada = ['adios', 'hola', 'maximo', 'uno', 'despedida']
const salida = Ordenar(entrada);

console.log(salida);