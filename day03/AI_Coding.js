 // create a forloop that starts from 1 and end at 10
 for (let i = 1; i <= 10; i++) {
    console.log(i);
 }

  console.log("================================================================");

 // create an array of Strings and add 10 students names to it
 let students = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Harry", "Isabella", "Jack"];

 // print each student name in the array on a new line
  for (let student of students) {
    console.log(student);
  }

  console.log("================================================================");

// set the forst student name to Alexandru and las students to Marry
    students[0] = "Alexandru";
    students[students.length - 1] = "Marry";
    console.log(students);

  console.log("================================================================");

    // idsplay all yhe elemnts if the student array in reverse order in table
     for (let i = students.length - 1; i >= 0; i--) {
        console.log(students[i] + '.');
     }
    
  console.log("================================================================");


  let email = 'Schoo@gmail.com';
  // chech the email address containing 'gmail.com'
    if (email.includes('gmail.com')) {
        console.log('The email address contains gmail.com');
    } else {
        console.log('The email address does not contain gmail.com');
    }


console.log("================================================================");

// using tring manipulation to retrieve the domain of email addresses
    let domain = email.substring(email.indexOf('@') + 1, email.lastIndexOf('.'));
    console.log('The domain of the email address is '+ '--> '+domain);

console.log("================================================================");

 let numbers  = [100,200,300,400,5,6,4,8,7,9,1,0,11];
// write a program that can display that can display the max and min numbers for the numbers array
    let max = numbers[0];
    let min = numbers[0];

    for(let number of numbers) {
        if(number > max) {
            max = number;
        }

        if(number < min) {
            min = number;
        }
    }

    console.log('The maximum number is '+'--> '+max);

    console.log('The minimum number is '+'--> '+min);

    console.log("================================================================");

    let nums = [5,3,8,2,1,7,4,6,0,9];
    // write a program that can sort nums arrays in asscendent order. do not use any build-in sort functions
    let len = nums.length;
    for(let i = 0; i < len - 1; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    console.log('The sorted numbers are '+'--> '+nums);
    console.log("================================================================");

    // create an array that contains multiple duplicates elements
    let duplicates = [1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9];
    // write a program that can remove all duplicates elements from the duplicates array and return new array
     let uniqueArray = [];
    for(let i = 0; i < duplicates.length; i++) {
    if(uniqueArray.indexOf(duplicates[i]) === -1) {
            uniqueArray.push(duplicates[i]);
        }
    }
    console.log('The unique numbers are '+'--> '+uniqueArray);
    console.log("================================================================");

    

  


    


 
  

   