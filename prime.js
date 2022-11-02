function checkprime(number){
   let factors = 0;
 for(let i = 1; i<=num; i++){
     if(num%i==0){
        factors++;
     }
 }
  if(factor==2){
    return true;
  }
   return false;
}

let answer = checkprime(23);

if(answer==false){
  console.log("Prime Number);
}else{
  console.log("Not a Prime Number");
}