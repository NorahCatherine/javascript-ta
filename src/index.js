// complete the function
function prime (num) {
  // code goes here
  let isPrime = true;
  
 
  if (num === 1) {
      return false
  }
  
  
  else if (num > 1) {
  
    
      for (let i = 2; i < num; i++) {
          if (num % i == 0) {
              isPrime = false;
              break;
          }
      }
  
      if (isPrime) {
         return true
      } else {
        return false
      }
  }
  else {
      console.log("The number is not a prime number.");
      return false
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
