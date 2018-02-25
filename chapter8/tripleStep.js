// A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
// or 3 steps at a time. Implement a method to count how many possible ways the child
// can run up the stairs.

function tripleStep(steps, memo = []) {
  if (steps < 0) {
    return 0;
  } else if (steps === 0) {
    return 1;
  } else if (memo[steps] > -1) {
    return memo[steps];
  } else {
    memo[steps] = tripleStep(steps - 1, memo) + tripleStep(steps - 2, memo) + tripleStep(steps - 3, memo);
    return memo[steps];
  }
}

console.log(tripleStep(50)); // 10562230626642

// Notes:
// The very last hop the child makes, the one that hands her on the nth step, ways
// either a 3-step hop, a 2-step hop, or a 1-step hop.

// If we thought about all of the paths to the nth step, we could jsut build them
// off the paths to the tree previous steps. We can get up to the nth step by any
// of the following:

// - Going to the (n - 1)st step and hopping 1 step.
// - Going to the (n - 2)nd step and hopping 2 steps.
// - Going to the (n - 3)rd step and hopping 3 steps.

// Suppose 3 steps.
// 1: child can make one 3 step
// 2: child can make three 1-step
// 4: child can make one 2-1 step
// 3: child can make one 1-2 step
console.log(tripleStep(3)); // 4
// 4 ways the child can run up the stairs
