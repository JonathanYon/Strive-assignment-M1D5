/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/

const giveMeRandom = function (num){
    let arr1 = [];
    for (let i = 0; i < num; i++){
      arr1.push(Math.floor(Math.random() * 11))
    }
    return arr1;
  }
  

 const checkArray = function (num1){
   let arr3 = [];
   let arr4 = 0;
   for (let i = 0; i < num1.length; i++){
     if (num1[i] < 5){
       continue;
     } else if (num1[i] >= 5){
       arr3.push(num1[i])
     }
   }
   console.log(arr3);
   for (let i = 0; i < arr3.length; i++){
     arr4 += arr3[i]
   }
   return arr4;
 }

console.log(checkArray(giveMeRandom(4)))

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, 
a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

let shoppingCart = [
    {id: 11, name: "iphone3", quantity: 10, price: 200},
    {id: 12, name: "iphone4", quantity: 20, price: 300},
    {id: 13, name: "iphone5", quantity: 30, price: 400},
    {id: 14, name: "iphone6", quantity: 40, price: 500},
    {id: 15, name: "iphone7", quantity: 50, price: 600}
  ]

  const shippingCartTotal = function (){
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++){
      total += shoppingCart[i].price;
  }
  return total;
  }
  console.log(shippingCartTotal())

/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

const addToShoppingCart = function(item){
  shoppingCart.push(item)
}
addToShoppingCart({id: 16, name: "iphone8", quantity: 60, price: 700})

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

const datee = function (d){
    let aDate = new Date();
    let bDate = aDate.getDate();
    let numDate = d - bDate;
    if (d < bDate){
      return `${Math.abs(numDate)} has passed`
    } else if (d > numDate){
      return numDate + " days left"
    } 
  }

/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

/* WRITE YOUR CODE HERE */
