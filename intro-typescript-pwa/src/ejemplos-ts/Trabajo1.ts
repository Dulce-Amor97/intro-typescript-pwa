interface Alumnno{
    nombre: string;
    edad: number;
    direccion: {
        calle: string;
        pais: string;
        estado: string;}
    
    mostrarDireccion:()=>void;
}

function dire(alumno:Alumnno, x:string, y:string, z:string):void{
    alumno.direccion.calle=x;
    alumno.direccion.pais=y;
    alumno.direccion.estado=z;
    console.log(alumno);
}

const AlumnoUTL: Alumnno={
    nombre: 'Alexander',
    edad: 22,
    direccion:{
        calle: 'margaritas',
        pais: 'MX',
        estado: 'GTO'
    },
    mostrarDireccion(){
        return this.nombre+', del pais: '+this.direccion.pais+', Estado: '
        +this.direccion.estado+', Calle: '+this.direccion.calle;
    },
}
const dirreccion=AlumnoUTL.mostrarDireccion();
console.log(dirreccion);