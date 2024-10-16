// Unit test for removeDivisibleByThree function

const { removeDivisibleByThree } = require("./AI_Coding"); // Import the function to be tested

// Test case: Should return an empty array when the input array is empty
test("removeDivisibleByThree should return an empty array when the input array is empty", () => {
  const inputArray = [];
  const expectedOutput = [];

  const result = removeDivisibleByThree(inputArray);

  expect(result).toEqual(expectedOutput);
});

// Unit test for removeDivisibleByThree function

const { removeDivisibleByThree } = require("./AI_Coding"); // Import the function to be tested

test("removeDivisibleByThree should remove all elements divisible by three from the array", () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const expectedOutput = [1, 2, 4, 5, 7, 8, 10];

  const result = removeDivisibleByThree(inputArray);

  expect(result).toEqual(expectedOutput);
});

// Unit test for removeDivisibleByThree function with floating point numbers

test("removeDivisibleByThree should handle arrays with floating point numbers correctly", () => {
  const inputArray = [1.5, 2.7, 3.3, 4.2, 5.8, 6.6, 7.1, 8.4, 9.9, 10.5];
  const expectedOutput = [1.5, 2.7, 4.2, 5.8, 7.1, 8.4, 10.5];

  const result = removeDivisibleByThree(inputArray);

  expect(result).toEqual(expectedOutput);
});

// Unit test for removeDivisibleByThree function with zero

test("removeDivisibleByThree should handle arrays with zero correctly", () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const expectedOutput = [1, 2, 4, 5, 7, 8];

  const result = removeDivisibleByThree(inputArray);

  expect(result).toEqual(expectedOutput);
});
