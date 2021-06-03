function binarysearch(arr, l, r, x){
  if(r >= l){
    let mid = (l + (r - l)) / 2;
    if(arr[mid] == x){
      return mid;
    }
    if(x < arr[mid]){
      return binarysearch(arr, l, mid - 1, x);
    }
    return binarysearch(arr, mid + 1, r, x);
  }
  return -1;
}

let arr = [5,1,2,3,4,5,6];
arr.sort();
let index = binarysearch(arr, 0, arr.length - 1, 4);

console.log(arr);
console.log(index);