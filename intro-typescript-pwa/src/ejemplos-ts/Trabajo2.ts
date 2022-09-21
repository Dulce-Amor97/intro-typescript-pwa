/*pedir 3 valores creando funciones, propiedades, para calcular la formula
general*/

class Resultados{
    a: number;
    b: number;
    c: number;
    x1: number;
    x2: number;


    imprimir():void{

        this.x1=((-this.b) + Math.sqrt(Math.pow(this.b, 2) - (4 * this.a * this.c ))) / (2*this.a);
        this.x2=((-this.b) - Math.sqrt(Math.pow(this.b, 2) - (4 * this.a * this.c ))) / (2*this.a);
        
        
        console.log(`a= ${this.a} \n
        b= ${this.b} \n
        c= ${this.c} \n
        El resultado de x1= ${this.x1} \n
        El resultado de x2= ${this.x2}`);
    }

}

let resultados=new Resultados();
resultados.a=6;
resultados.b=-19;
resultados.c=7;
resultados.imprimir();


//Math.sqrt(3); //Raiz
//Math.pow(5, 2); //Potencia