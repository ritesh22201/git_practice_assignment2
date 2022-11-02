function checkprime(num){
   let factor = 0;
 for(let i = 1; i<=num; i++){
     if(num%2==0){
        factor++;
     }
 }
  if(factor==2){
    return true;
  }
}

let ans = checkprime(23);

if(ans==false){
  console.log("Prime Number);
}
else{
  console.log("Not a Prime Number");
}