//CLASES

class Persona{
    nombre: string;
    edad: number;

    imprimir():void{
        console.log(`El nombre es: ${this.nombre} \n
        La edad es: ${this.edad}`);
    }
}

let persona1=new Persona();
persona1.nombre='Alexander';
persona1.edad=22;
persona1.imprimir();

//Math.sqrt(3); //Raiz
//Math.pow(5, 2); //Potencia


/*pedir 3 valores creando funciones, propiedades, para calcular la formula
general*/