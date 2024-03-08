/* 5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
Entrada -> [[7,3],[2,2],[1,0],[4,3]]
Salida -> [[1,0],[2,2],[4,3],[7,3]] */ 

function coordenadas(array){
    return array.sort(function(a,b){
        const puntoX = Math.hypot(a[0], a[1]);
        const puntoY = Math.hypot(b[0], b[1]); 

        return puntoX - puntoY;
    })
}

const entrada = [[7,3],[2,2],[1,0],[4,3]]
const salida = coordenadas(entrada);

console.log(salida);