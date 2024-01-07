/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
  const newArray=[];
  while(arr.length>0){
    newArray.push(arr.splice(0,size));
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
