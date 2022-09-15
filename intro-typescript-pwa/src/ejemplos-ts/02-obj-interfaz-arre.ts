//Objeto con ts

//Definicion de interface
interface Alumno{
    matricula:number;
    nombre: string;
    email: string;
}

let alumno: Alumno = {
    nombre: 'Dulce',
    matricula: 19002508,
    email: "dulceamorgomezmunoz@gmail.com"
}

//Arreglos
let mascotas=['perro', 'gato', 'panda']

mascotas[1] = 'shshsh';
mascotas.push('nuevo')

let tem:(number | string)[]=[]
tem.push('Nombre');
tem.push(246);

console.log(mascotas)
console.table(alumno)