const arryLength = arr => {
  let tLength=[];
  for ( i=0 ; i< arr.length ; i++){
    tLength[i]=arr[i].length ;
  }
return tLength ;
}
let arr= ["boo", "doooo", "hoo", "ro"];
console.log (arryLength(arr));