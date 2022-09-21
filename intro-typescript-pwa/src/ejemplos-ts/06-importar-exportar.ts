//REUSABILIDAD

import{calcularIVA2, Producto} from './05-desestructura-funciones';


const carrito: Producto[]=[
    {
        desc: 'Telefono1',
        precio: 1000
    },
    {
        desc:'Telefono2',
        precio:800
    },
    {
        desc:'Telefono3',
        precio:200
    },
];

const [total,iva]=calcularIVA2(carrito);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);
