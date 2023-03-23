const numMAX = 20;
let a = 0, b = 1, proxNum;

console.log('Sucesión de Fibonacci:');

for (let i = 1; i <= numMAX; i++) {
    console.log(a);
    proxNum = a + b;
    a = b;
    b = proxNum;
}