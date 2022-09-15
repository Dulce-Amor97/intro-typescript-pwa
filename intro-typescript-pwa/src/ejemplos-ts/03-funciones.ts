//Funciones

function sumar(a, b): void{ //void para que la función no regrese nada 
    console.log(a+b)


}

//sumar(2, 5);

const resultado = sumar ('Dulce' , 'Amor');
console.log(resultado)


function sumar2 (n1: number, n2: number):number{ //:number fuera del parentesis; indica el tipo de dato que se va a regresar
    return n1+n2;
}
console.log(sumar2(8,2))


function multiplicar(n1:number, otronumero:number, base:number=5):number{ //?= indica que el dato es opcional
    let tem=n1*base;
    
    return tem;
}

console.log(multiplicar(8,4));

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota);

}

const nuevaMascota:Mascota={
    nombre:'Miau',
    edad: 5,
    mostrarEdad(){
        console.log('La edad es: ', this.edad); //this hace propiedad al objeto actual, valor de la propiedad
    },
}

calcular(nuevaMascota,3);