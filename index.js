/********************************
 *
 * DO YOUR ASSIGNMENT IN THIS FILE
 *
 *********************************/

// TEST EARLY AND OFTEN - run the code in the terminal by typing 'node index.js' in this directory
// After each step, git add . AND git commit -m "completed part PART-LETTER-HERE"
// Complete all steps specified below - each piece of each step needs to be logged to the console
// using console.log.
// EXAMPLE - Try running node index.js before working on any of the parts and see what happens in the terminal.

const givenVariable = 20;
const doubledVariable = givenVariable * 2;
const tripledVariable = givenVariable * 3;
console.log(doubledVariable);
console.log("EXAMPLE", "tripledVariable", tripledVariable);
// After running this and feeling comfortable, feel free to comment the above block of code out
// (either give each line a // or highlight the block of code and press COMMAND - / )

/********************************
 *
 * STEP A: Strings and Numbers
 *
 *********************************/

// 1. Set a variable called favPizzaTopping to equal to the name of your favorite pizza topping
// Log this value to the console

// 2. Set a variable called favPizzaToppingUppercase that converts favPizzaTopping to an all uppercase string
// Log this value to the console

const pizzaPrice = 10;
const toppingPrice = 0.5;

// 3. Write an expression that adds the pizzaPrice and the toppingPrice
// and sets the value equal to a variable called totalPrice
// Log the value of totalPrice to the console

/********************************
 *
 * STEP B: Arrays
 *
 *********************************/

// 4. Create a variable pizzaToppings that is equal to an array containing the following three strings:
// 'Pepperoni', 'Mushrooms', 'Red Peppers'
// Log pizzaToppings to the console

// 5. Oops our customer wants one more topping! Add 'Pineapple' to the end of the array
// Log pizzaToppings to the console

// 6. False Alarm! Our customer realized that Pineapple doesn't belong on pizza (at least not this one!)
// Remove 'Pineapple' from the end of the pizzaTopping array
// Log pizzaToppings to the console

// 7. Ok they finally made up their mind and they want one more topping. Add 'Onions' to the end of the array
// Log pizzaToppings to the console

// 8. Ok! Time to ring the customer up! Create a variable called totalToppings that is equal to the number
// of toppings the customer wants on their pizza by checking the item count of pizzaToppings

// 9. Another Change!! (Can't this customer make up their mind??)
// They want to add Basil to the pizza and they want A LOT.
// Add 'Basil' to the beginning of the array to show it's importance
// Log pizzaToppings to the console

// 10. Ok! We have to ring the customer up again! reassign the variable that is equal to the number
// of toppings the customer wants on their pizza by checking the current item count of pizzaToppings
// (Don't create a new variable!!!!!!)
// Log the variable to the console

// 11. Your boss comes over and reminds you that you need to have a copy of the receipt for each order
// Create a variable called receipt that is a copy of the pizzaToppings array and log the result to the console

// 12. Your boss wants some information on your last customer. Check your receipt variable to see if the order
// contains your boss's favorite topping - 'Basil'

// 13. Now that the boss has verified Basil is on the list, he notices
// over your shoulder that its the first item. He wants you to move the
// list order around so that Basil is at the end because "You save the best for
// last! Scramble it, reverse it, do whatever you have to do"
// Find the right method to accomplish this task.

/********************************
 *
 * BONUS!!!!!!!!
 *
 *********************************/

// Our pizza place wants to show each customer a print out of their toppings to double check
// that there are no mistakes. Use a for loop and log 'You ordered *TOPPING* on your pizza'
// for each item in the pizzaTopping array.

// We need to give the customer a final price. Our pizza place has decided to charge .50 cents per topping.
// Loop over the toppings array and add .50 to the price variable for each topping.
// Log out the price variable to the console after the loop

let price = 10;
