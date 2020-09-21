/*
    Alex and Lee continue their games with piles of stones.  There are a number of piles arranged in a row, and
    each pile has a positive integer number of stones piles[i].  The objective of the game is to end with the most stones. 

    Alex and Lee take turns, with Alex starting first.  Initially, M = 1.

    On each player's turn, that player can take all the stones in the first X remaining piles,
    where 1 <= X <= 2M.  Then, we set M = max(M, X).

    The game continues until all the stones have been taken.

    Assuming Alex and Lee play optimally, return the maximum number of stones Alex can get.

    Example 1:

    Input: piles = [2,7,9,4,4]
    Output: 10
    Explanation:  If Alex takes one pile at the beginning, Lee takes two piles, then Alex takes 2 piles again. 
    Alex can get 2 + 4 + 4 = 10 piles in total. If Alex takes two piles at the beginning, then Lee can
    take all three piles left. In this case, Alex get 2 + 7 = 9 piles in total. So we return 10 since it's larger. 

    Constraints:

    1 <= piles.length <= 100
    1 <= piles[i] <= 10 ^ 4
*/

// Other explanations
// https://leetcode.com/problems/stone-game-ii/discuss/713502/Javascript-and-C%2B%2B-solutions
var stoneGameII = function (piles) {
    const n = piles.length;
    const memo = new Map();
    const sums = new Array(n).fill(0);

    sums[n - 1] = piles[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        sums[i] = sums[i + 1] + piles[i]; // (1)
    }
    console.log("sums:", sums);
    return findMax(0, 1);

    function findMax(index, M) {
        // (2)
        const key = `${index}#${M}`;

        // base case
        if (n - index <= 2 * M) {
            console.log("base case return:", sums[index]);
            console.log("-----------");
            return sums[index]; // (3)
        }
        if (memo.has(key)) return memo.get(key);

        let res = Number.MIN_SAFE_INTEGER;
        console.log("memo:", memo);
        console.log("M:", M);
        console.log("index:", index);
        for (let x = 1; x <= 2 * M; x++) {
            // (4)
            const newM = Math.max(x, M); // (5)
            res = Math.max(res, sums[index] - findMax(index + x, newM)); // (6)
            console.log("result:", res);
        }
        console.log("-----------");

        memo.set(key, res);
        return res;
    }
};

/* 
Comments:

(1) sums[i] = piles[i] + sum(piles[i + 1], piles[i + 2], ... piles[n - 1]).

(2) You can think of index as the starting position of the stone piles that are remaining. So at beginning, where index = 0,
	we have all the original piles left. If index = 2, then we have the piles[2] ... piles[n - 1] untouched.

(3) In this case the current move will be the last move made. Therefore, a player will want to take all the remaining piles.

(4) A player at any point in the game will have the option of taking x piles, where 1 <= x <= 2M. If the remaining piles is less
	than 2M, the if conditional at (3) take care of it.

(5) M, which initially equals 1, is the value used to set the limitation of stone piles a player can take at each turn. 
	The value gets updated to M = Math.max(x, M) and the limit of stone piles is doubled based on the new value of M. 

(6) As x increases, the current player is taking more piles.
*/

// console.log(stoneGameII([2, 7, 9, 4, 4]));
console.log(stoneGameII([22, 17, 89, 44, 34, 28, 15, 32, 6]));
// console.log(stoneGameII([5, 2, 6, 4]));
