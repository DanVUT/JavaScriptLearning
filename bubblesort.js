function bubblesort(arr){
  let copy = [...arr];
  for(let i = 0; i < copy.length - 1; i++){
    for(let j = i + 1; j < copy.length; j++){
      if(copy[j] < copy[i]){
        let tmp = copy[j];
        copy[j] = copy[i];
        copy[i] = tmp;
      }
    }
  }

  return copy;
}

let arr = [3, 1, 5, 4, 2];
let sortedArr = bubblesort(arr);

console.log(arr);
console.log(sortedArr);