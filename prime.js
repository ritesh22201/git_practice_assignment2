function twoPrimes(a) {
    let x="True";
    for(let i=2;i<a;i++){
        if(a%i==0){
            x="False";
            break;
        }
    }console.log(x);

}
twoPrimes(23);


