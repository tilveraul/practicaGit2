/**
 * Suma el IVA a un precio.
 * @param {number} precio - Precio sin IVA.
 * @returns {number} Precio con IVA.
 */
function conIva(precio) {
  return precio + (precio * 21) / 100;
}

module.exports = { conIva };