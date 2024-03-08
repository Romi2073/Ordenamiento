/* 2.- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla 
ascii ref: http://www.asciitable.com/.
Entrada -> [‘b’,‘h’,‘w’,‘e’,‘a’]
Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’] */

function Ordenar(array) {
    return array.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
}

const entrada = ['b','h','w','e','a']
const salida = Ordenar(entrada);

console.log(salida);