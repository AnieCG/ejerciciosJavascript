function bubbleSort(arr) {
    let n = arr.length;
    
   
    for (let i = 0; i < n - 1; i++) {
     
      let cambio = false;
      
      
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
       
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          cambio = true; 
        }
      }
      
      
      if (!cambio) {
        break;
      }
    }
    return arr;
  }
 
  let input = [3, 6, 12, 5, 100, 1];
  let arrayOrdenado = bubbleSort(input);
  console.log(arrayOrdenado); 