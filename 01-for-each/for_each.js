// define an array of fruits
const fruitsSaison = ['Cache', 'orange', 'pear', 'cherry', 'grape']
console.log(fruitsSaison)
const printFruits = (fruit, index) => console.log(`${index + 1} ${fruit}`) 
    // console.log() a message interpolating the name of the fruit and it's position in the array (index increased by 1);
  fruitsSaison.forEach(printFruits)
 //const fruitsSaison(fruits, index) => console.log(`${index + 1} ${fruit}`) 