const assert = require('assert');
/*
Suppose you have a random list of people standing in a queue. Each person is described by a pair of 
integers (h, k), where h is the height of the person and k is the number of people in front of this
person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/

const reconstructQueue = function (people) {
    for (let i = 0; i < people.length; i += 1) {
        const person = people[i];
        const [hI, kI] = person;
        for (let j = i; j < people.length; j += 1) {
            const ahead = people[j];
            const [hA, kA] = ahead;
            for (let k = j; k > j - kA; k -= 1) {
                const lookBehind = people[k];
                const [hB, kB] = lookBehind;
                if (hA <= hB && kB <= kB) {
                    [people[i], people[j]] = [people[j], people[i]];
                }
            }
        }
    }
    console.log(people);
    return people;
};

const input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
const output = [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]];

assert.deepEqual(reconstructQueue(input), output)
