//Desestructuración de Objetos y Arreglos

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string,
    detalles: Detalles;


}

interface Detalles{
    autor: string;
    year: number;
}

const reproductor: Reproductor={
    volumen: 90,
    segundo: 66,
    cancion: 'Mañanitas',
    detalles:{
    autor:'Cepillin',
    year: 1978,
    }
}

const{volumen, segundo, cancion, detalles}=reproductor; //Desestructurar de un Objeto
const{autor}=detalles;


console.log(`El volumen actualn es: ${volumen}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`El segundo actual es: ${cancion}`);
console.log(`El segundo actual es: ${autor}`);


const dbz: string[]=['Goku','Vegeta', 'Trunks', 'Yamcha'];
console.log(`Personaje 1: ${dbz[0]}`);
console.log(`Personaje 2: ${dbz[1]}`);
console.log(`Personaje 3: ${dbz[2]}`);
console.log(`Personaje 4: ${dbz[3]}`);

const[a, , , d]=dbz; /*Desestructurar un arreglo. Para desestructurar un objeto
es con llaves y corchetes para los arreglos*/
console.log(`Personaje 1: ${a}`);
//console.log(`Personaje 2: ${b}`);
//console.log(`Personaje 3: ${c}`);
console.log(`Personaje 4: ${d}`);
