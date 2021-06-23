// define an array of fruits
const fruitsSaison = ['Cache', 'orange', 'pear', 'cherry', 'grape']


    // console.log() a message interpolating the name of the fruit and it's position in the array (index increased by 1);
  console.log(fruitsSaison)
 //const fruitsSaison(fruits, index) => console.log(`${index + 1} ${fruit}`) 
 const printFruits = (fruit, index) => console.log(`${index + 1} ) ${fruit}`) 
 fruitsSaison.forEach(printFruits)