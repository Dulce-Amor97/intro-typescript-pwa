//Desestructuracion de Funciones

export interface Producto{
    desc: string;
    precio: number;

}

const telefono: Producto={ //cost= para crear Objetos
     desc: 'Sony erickson',
     precio: 1350
}

const tablet: Producto={
    desc: 'Ipad Air',
    precio:2500
}

function calcularIVA(Productos:Producto[]): number{
    let total=0;
    //for(let i=0; i<2; i++)
    Productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}

const articulos1=[telefono, tablet];
const iva1=calcularIVA(articulos1);
console.log(`IVA: ${iva1}`);

//Desestructuración de una función
export function calcularIVA2(Productos:Producto[]):[number,number]{
    let total=0;
    Productos.forEach(({precio})=>{
        total+=precio;
    })
    return[total, total*0.16];
}

const articulos2=[telefono, tablet];
const [total, iva]=calcularIVA2(articulos2);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva1}`);