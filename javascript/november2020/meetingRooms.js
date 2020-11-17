let assert = require("assert");
// Given an array of metting time intervals where intervals[i] = [start, end], determine if a person could attend all meetings.

const canAttendMeetings = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length - 1; i++) {
        let curr = intervals[i];
        let next = intervals[i + 1];
        if (curr[1] > next[0]) {
            return false;
        }
    }
    return true;
};

assert.strictEqual(
    canAttendMeetings([
        [0, 30],
        [5, 10],
        [15, 20],
    ]),
    false
);

assert.strictEqual(
    canAttendMeetings([
        [7, 10],
        [2, 4],
    ]),
    true
);
