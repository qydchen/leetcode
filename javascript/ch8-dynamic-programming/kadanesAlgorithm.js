/*
Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by
summing up all of the intergers in a non-empty subarray of the input array. A subarray must only contain adjacent
numbers.

array = [3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4]
output = 19 [3,-2,3,4,7,2,-9,6,3,1]

Negative nums problems are a problem here.

First take the array that just consists of 3 and then 3,5 and then 3,5,-9
When we have only 3, the greatest sum is just 3
3,5 then greatest sum is 8
3,5,-9 the sum is -1
When we get to 1, we can sum 3,5,-9,1 to get 0, but 1 itself is greater than 0
Whenever we're at a new index, we are trying to look for a maximum sum ending at that index

[3,5,-9,1,3,-2,3,4, 7, 2,-9, 6, 3, 1,-5, 4]
 3,8,-1,1,4, 2,5,9,16,18, 9,15,18,19,14,18
   ^  ^
      is -9 > -1 ? so we select -1 (aka. Math.max(currentNum, currentNum + runningMax))  

      ^ ^
      -1 > 1 ? so we select 1
*/

function kadanesAlgorithm(array) {
  if (!array.length) return null;
  let runningMax = array[0];
  let largestMax = array[0];
  for (let num of array.slice(1)) {
    runningMax = Math.max(runningMax + num, num);
    largestMax = Math.max(largestMax, runningMax);
  }
  return largestMax;
}
