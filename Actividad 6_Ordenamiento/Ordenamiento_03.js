/* 3.- Crear una clase Alumno con los siguientes datos:
Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio. */ 

class Alumno {
    constructor (nombre, calificaciones){
 this.nombre = nombre;
 this.calificaciones = calificaciones;
    }

    Promedio(){

        if (this.calificaciones.length === 0) {
            return 0;
          }

          const sumatoria = this.calificaciones.reduce((suma, calificacion) => suma + calificacion, 0);
          return sumatoria / this.calificaciones.length;
    }
}

class Salon {

    constructor(){
        this.alumnos=[];
    }

   AñadirAlumnos(alumno){
    this.alumnos.push(alumno)
   }

   OrdenarPorPromedio(){
    this.alumnos.sort((a, b) => b.Promedio() - a.Promedio());
   }
}

// Alumnos y calificaciones

const alumno1 = new Alumno('Romina Loyda', [8, 9, 10, 7, 10]);
const alumno2 = new Alumno('Luis García', [9, 9, 10, 6, 10]);
const alumno3 = new Alumno('Alex Tlaxcala', [8, 7, 10, 7, 8]);
const alumno4 = new Alumno('Jovany Rafael', [6, 6, 9, 7, 10]);
const alumno5 = new Alumno('Diego Díaz', [10, 9, 10, 8, 10]);
const alumno6 = new Alumno('Monse Arenas', [10, 9, 10, 9, 10]);

// Alumnos en el salón

const salon = new Salon();
salon.AñadirAlumnos(alumno1);
salon.AñadirAlumnos(alumno2);
salon.AñadirAlumnos(alumno3);
salon.AñadirAlumnos(alumno4);
salon.AñadirAlumnos(alumno5);
salon.AñadirAlumnos(alumno6);

console.log("Alumnos en el Salón:")
console.log(salon.alumnos);

//Alumnos ordenados con CALIFICACIONES

salon.OrdenarPorPromedio();
console.log("Alumnos ordenados por calificaciones:")
console.log(salon.alumnos);

// Alumnos ordenados por PROMEDIO

console.log("Alumnos ordenados por promedio total:")

salon.alumnos.forEach(alumno => {

    console.log(`${alumno.nombre}: ${alumno.Promedio()}`);    

})

