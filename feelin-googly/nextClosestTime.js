const assert = require('assert');
/*
Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits.
There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid.For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

    Example 1:

Input: "19:34"
Output: "19:39"
Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19: 39, which occurs 5 minutes
later.It is not 19: 33, because this occurs 23 hours and 59 minutes later.
    Example 2:

Input: "23:59"
Output: "22:22"
Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22: 22. It may be assumed that
the returned time is next day's time since it is smaller than the input time numerically.
*/

// Increment every minute, check if each of the digits in the new time exist in the set of the original time.
// If true, return the new time, else, continue looping until the time is established.

const nextClosestTime = time => {
    const digits = time.split(':').join('').split(''); // [1,9,3,4]
    let [ hours, minutes ] = time.split(':').map(Number);
    while (true) {
        minutes += 1;
        if (minutes > 59) {
            minutes = 0;
            hours += 1;
            if (hours > 23) {
                hours = 0;
            }
        }
        const mString = String(minutes).length === 1 ? `0${minutes}` : String(minutes);
        const mHours = String(hours).length === 1 ? `0${hours}` : String(hours);
        if (mString.split('').every(num => digits.indexOf(num) > -1) && mHours.split('').every(num => digits.indexOf(num) > -1)) {
            return `${mHours}:${mString}`;
        }
    }
}

assert.equal(nextClosestTime('19:34'), '19:39');
assert.equal(nextClosestTime('23:59'), '22:22');