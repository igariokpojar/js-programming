/**
 * This function is used to find an element on a webpage using a given locator.
 * It returns a Promise that resolves with a success message if the element is found,
 * or rejects with an error message if the element is not found.
 *
 * @param {string} locator - The locator used to identify the element on the webpage.
 * @returns {Promise} - A Promise that resolves with a success message or rejects with an error message.
 */
async function findElement(locator) {
  return new Promise((resolved, rejected) => {
    if (locator == "valid-locator") {
      resolved("Element Found");
    } else {
      rejected("Element Not Found");
    }
  });
}

/**
 * This function is used to click an element on a webpage using a given locator.
 * It calls the findElement function to locate the element and then logs the result or error message.
 *
 * @param {string} locator - The locator used to identify the element on the webpage.
 */
async function clickElement(locator) {
  findElement(locator)
    .then((result) => {
      console.log(result);
      console.log("Element Clicked");
    })
    .catch((error) => {
      console.error(error);
      console.log("Unable to click the element");
    });
}

console.log("----------------------------------------------------------------");

/**
 * This function is used to test the clickElement function by clicking elements with valid and invalid locators.
 */
async function test() {
  await clickElement("valid-locator");
  await clickElement("invalid-locator");
}

test();
