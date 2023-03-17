let factMax = 10;
let fact = 1;

while(true){
    fact*=factMax;
    factMax--;
    if(factMax===1){
        break;
    }
}

console.log(fact);