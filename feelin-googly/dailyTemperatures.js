const assert = require('assert');
/*
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days 
you would have to wait until a warmer temperature.If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should 
be[1, 1, 4, 2, 1, 1, 0, 0].

    Note: The length of temperatures will be in the range[1, 30000].Each temperature will be an integer in the range[30, 100].
*/

const dailyTemperatures = T => { // O(n^2) time
    const result = [];
    for (let i = 0; i < T.length; i += 1) {
        const currentTemp = T[i];
        for (let j = i + 1; j < T.length; j += 1) {
            const lookAhead = T[j];
            if (lookAhead > currentTemp) {
                result.push(j - i);
                break;
            } else if (lookAhead <= currentTemp && j === T.length - 1) {
                result.push(0);
            }
        }
        if (i === T.length - 1) {
            result.push(0);
        }
    }
    return result;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const output = [1, 1, 4, 2, 1, 1, 0, 0];
assert.deepEqual(dailyTemperatures(temperatures), output);

const temp2 = [34, 80, 80, 80, 34, 80, 80, 80, 34, 34];
const output2 = [1, 0, 0, 0, 1, 0, 0, 0, 0, 0]
assert.deepEqual(dailyTemperatures(temp2), output2);
