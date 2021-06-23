// create a randomNumbers array, containing 100 random numbers
const randomNumbers = [];
for (i = 0; i < 100; i++){
  randomNumbers.push( Math.ceil(Math.random()*100));
}
//console.log(randomNumbers)
// create a function isPrime(number)
const isPrime = number => {
    for (let i = 2; i < number; i++){
    if (number % i === 0){
    return false;
  } 
}  
  return number > 1; 
    
}

// create a primeNumbers array
 const primeNumbers = randomNumbers.filter(isPrime);
 // filter randomNumbers with isPrime(number)
console.log(primeNumbers);
//sort  prime numbers ascending
//   primeNumbers.sort((a, b) = a - b);
// console.log(primeNumbers) 