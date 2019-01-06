
let N = 1000; 
let arr = Array.apply(null, {length: N}).map(Number.call, Number);
let final = [];

function sumOf3or5(array) {
    let final = [];
  for(var i=0;i<=array.length-1;i++){
    if(array[i]%3===0 || array[i]%5===0) final.push(array[i]);
  }
  
  return final.reduce((a,c)=> a + c);
  
}

final = sumOf3or5(arr);

console.log(final)