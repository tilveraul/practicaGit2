const { conIva, aplicarDescuento } = require('./src/precios');

console.log('Precio con IVA:', conIva(100));
console.log('Precio con descuento:', aplicarDescuento(100, 10));