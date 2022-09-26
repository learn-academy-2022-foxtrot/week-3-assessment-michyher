// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Pseudocode:
  // input1: fibLength1
  // output1: [1, 1, 2, 3, 5, 8]

  // Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
    // one parameter: number
  // I googled the fibonacci sequence algorithm because I had no idea what it was. 
  // I then adjusted the algorithm in order to apply it to my code. 
  // (pseudocode continues on line 60)


const fibLength1 = 6
Expected output: [1, 1, 2, 3, 5, 8]

describe("fibSequence", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
      let input1 = fibLength1
      let result1 = [1, 1, 2, 3, 5, 8]
      expect(fibSequence(input1)).toEqual(result1)
    })
  })

  // Good fail!


const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// input2: fibLength2
// output2: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibSequence", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    let input2 = fibLength2
    let result2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibSequence(input2)).toEqual(result2)
  })
})



// b) Create the function that makes the test pass.

// Pseudocode: 
//(the following is within context of fibLength2 = 10)
// The Fibonacci sequence is taking the last two numbers and adding them together to form the next one. 
  // for example: if number=4 --> [1,1,2,3]
    // number tells you how many times to add, in this example, it would be 4 times. 
    // I used this website as a reference when making my function: https://www.programiz.com/javascript/examples/fibonacci-series
// I made a function named fibSequence, the only parameter is number 
  // number is (reference line 63)
// After I made the template of a function, I needed somewhere to push the result, instead of using console.log
  // I let array = an empty array
// In the code from the referenced website, n1 and n2 were originally 0 and 1.
  // I tested and found out that n1 and n2 are the starting numbers 
  // Knowing that the first two values in the outcome needed to be [1,1], then  I changed n1=1 and n2=1
  // If we wanted to start at [8,13] then n1=8 and n2=13 and we would be starting at index 5 of the Fibonacci Sequence.
// I know that the for loop runs as many times as number is provided.
// I know that inside the for loop is the Fibonacci algorithm, where n1 needs to be pushed into the empty array. 
// I finished the for loop and the array should have all the values for the Fibonacci sequence. 
const fibSequence = (number) => {
  let array = []

  let n1 = 1, n2 = 1, nextTerm;

  for (let i = 1; i <= number; i++) {
      array.push(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  }
  return array 
 
}

// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

//Pseudocode:
  // Create a function called objectToArray that takes in an object and returns an array of the numbers sorted from least to greatest.
    // One parameter: object
  // (Pseudocode continues on line 125)


// input 1: studyMinutesWeek1
// output 1: [15, 15, 20, 30, 30, 60, 90]
  

describe("objectToArray", () => {
    it("that takes in an object and returns an array of the numbers sorted from least to greatest.", () => {
      let input1 = studyMinutesWeek1
      let result1 = [15, 15, 20, 30, 30, 60, 90]
      expect(objectToArray(input1)).toEqual(result1)
    })
  })

  // Good Fail!

// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }

//   Pseudocode:
//     I made the basic tempplate of a function and named it objectToArray like I instructed myself to do so on line 98.
//     I then read through the link that was provided and learned about Object.values()
//       Object.values() is a method that returns an array 
//     I needed to make the input an array, in order to do so I needed to use Object.values()
//     After establishing an array, I needed to sort the array. 
//     I used the .sort() method to do so.
//       The .sort() method alphabetizes the values in an array or basically reorganizes them in the way you tell it to.
const objectToArray = (object) => {
  let array = Object.values(object)
  array.sort((a, b) => a - b)
  return array
}
console.log(objectToArray(studyMinutesWeek1))


// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// Pseudocode:
  //   input 2: studyMinutesWeek2
  // output 2: [10, 15, 20, 45, 60, 65, 100]

  describe("objectToArray", () => {
    it("that takes in an object and returns an array of the numbers sorted from least to greatest.", () => {
      let input2 = studyMinutesWeek2
      let result2 = [10, 15, 20, 45, 60, 65, 100]
      expect(objectToArray(input2)).toEqual(result2)
    })
  })
// Good Fail!


// b) Create the function that makes the test pass.

// Pseudocode:
// I made the basic tempplate of a function and named it objectToArray like I instructed myself to do so on line 98.
// I then read through the link that was provided and learned about Object.values()
//   Object.values() is a method that returns an array 
// I needed to make the input an array, in order to do so I needed to use Object.values()
// After establishing an array, I needed to sort the array. 
// I used the .sort() method to do so.
//   The .sort() method alphabetizes the values in an array or basically reorganizes them in the way you tell it to.

const objectToArray = (object) => {
let array = Object.values(object)
array.sort((a, b) => a - b)
return array
}
console.log(objectToArray(studyMinutesWeek1))


const objectToArray = (object) => {
let array = Object.values(object)
array.sort((a, b) => a - b)
return array
}
console.log(objectToArray(studyMinutesWeek2))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// Pseudocode:
  // input 1:accountTransactions1
  // output 1: [100, 83, 60, 51]

  // input 2:accountTransactions2
  // output 2: [250, 161, 261, 165]

  // input 3:accountTransactions3
  // output 3: []

  // Pseudocode:
    // Create a function called arrayOfSum that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
    // One parameter: array

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

describe("arrayOfSum", () => {
    it("that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
      let input1 = accountTransactions1
      let result1 = [100, 83, 60, 51]
      expect(arrayOfSum(input1)).toEqual(result1)
    })
  })
  // Good Fail!

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

describe("arrayOfSum", () => {
  it("that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    let input2 = accountTransactions2
    let result2 = [250, 161, 261, 165]
    expect(arrayOfSum(input2)).toEqual(result2)
  })
})
// Good Fail!
const accountTransactions3 = []
// Expected output: []


describe("arrayOfSum", () => {
  it("that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    let input3 = accountTransactions3
    let result3 = []
    expect(arrayOfSum(input3)).toEqual(result3)
  })
})
// // Good Fail!

// b) Create the function that makes the test pass.

// I set my function to have a parameter of an array because I instructed myself to do so in my pseudocode earlier.
// I needed somwhere to place my output so I let newArray = [] (empty array)
// Since I need the sum of all the elements before the current index, I set sum equal 0 because that is where I want to start.
// I needed a for loop because I was going to look at each individual index within the array.
// on line 261, as a way to understand what I was doing, I needed to see what array[i] displayed.
  // array[i] displays the value of each index within the array.
// knowing that, I was able to set sum to equal sum plus array[i]
  // In other words, I needed sum to add to each number in the array.
// In order to push sum into the new array, I used .push()
const arrayOfSum = (array) => {
  let newArray = []
  let sum = 0
  for (let i=0; i<array.length; i++) {
    // console.log(array[i])
    sum = sum + array[i]
    newArray.push(sum)
  }
  return newArray
}
console.log(arrayOfSum(accountTransactions1))
console.log(arrayOfSum(accountTransactions2))
console.log(arrayOfSum(accountTransactions3))



