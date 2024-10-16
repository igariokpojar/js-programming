/**
 * This script demonstrates error handling and browser validation.
 */

console.log("Test Started");

try {
  console.log(result); // This line will throw a ReferenceError because 'result' is not defined.
} catch (error) {
  console.log("An error has occurred"); // This will be logged when the error is caught.
}

console.log("Test Completed");

console.log("--------------------------------");

console.log("Test started");

let browser = "cydeo";

browser = browser.toLowerCase();

if (browser == "chrome" || browser == "safari" || browser == "firefox") {
  console.log("Valid browser"); // This will be logged if the browser is valid.
} else {
  throw new Error(`Invalid browser: ${browser}`); // This will throw an error if the browser is not valid.
}

console.log("Test Completed");
