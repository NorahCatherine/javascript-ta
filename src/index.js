// complete the function
function prime (num) {
  // code goes here
  const number = parseInt(prompt("Enter a positive number: "));
  let isPrime = true;
  
 
  if (number === 1) {
      console.log("1 is neither prime nor composite number.");
  }
  
  
  else if (number > 1) {
  
    
      for (let i = 2; i < number; i++) {
          if (number % i == 0) {
              isPrime = false;
              break;
          }
      }
  
      if (isPrime) {
          console.log(`${number} is a prime number`);
      } else {
          console.log(`${number} is a not prime number`);
      }
  }
  
 
  else {
      console.log("The number is not a prime number.");
  }

}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
