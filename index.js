function hasTargetSum(array, target) {
  for (let i = 0; i < array.length -1; i++) {
    for (let j=i +1; j < array.length; j++) {
   if (array[i] + array[j] === target) {
     return true;
   }
    }
  }
  return false;
}


/* 
  The time complexity function is O(n^2), where n is the length of the array.
  This is because there are two nested loops, and each loop iterates through the array once.
  Therefore, the time complexity of this implementation is O(n**2).
*/

/* 
  Pseudocode;
  Iterate through the array from both ends.
  Move up to the middle of the array adding up the numbers with both the for loops.
  if they add up to the target we return true if not return false. 


*/

/*
  Iterate through the array from both ends.Move up to the middle of the array adding up the numbers with both the for loops.
  when  they add up to the target we return true if not return false. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
