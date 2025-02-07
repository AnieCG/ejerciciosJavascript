/*Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/

const arregloNumeros = [6,6,1,5,2];
const valorInicial = { suma: 0, producto: 1 };
const sumaYProducto = (valorAcumulado, valorActual) => {

    valorAcumulado.suma += valorActual;
    valorAcumulado.producto *= valorActual;
    
    return valorAcumulado; 

  }
  const resultado = arregloNumeros.reduce(sumaYProducto, valorInicial);

console.log(resultado);
   

