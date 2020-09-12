/*
Write a function that takes in two strings and returns the minimum number of edit operations
that need to be performed on the first string to obtain the second string.

There are three edit operations: insertion of a character, deletion of a character, and substitution
of a character for another

str1 = "abc"
str2 = "yabd"
*/

// O(nm) time | O(nm) space

function levenshteinDistance(str1, str2) {
    const grid = new Array(str1.length + 1);
    for (let i = 0; i < str1.length + 1; i += 1) {
        grid[i] = new Array(str2.length + 1);
        grid[i][0] = i;
    }
    for (let i = 0; i < str2.length + 1; i += 1) {
        grid[0][i] = i;
    }
    for (let i = 1; i < grid.length; i += 1) {
        const row = grid[i];
        for (let j = 1; j < row.length; j += 1) {
            if (str1[i - 1] === str2[j - 1]) {
                grid[i][j] = grid[i - 1][j - 1];
            } else {
                grid[i][j] =
                    1 +
                    Math.min(
                        grid[i][j - 1],
                        grid[i - 1][j],
                        grid[i - 1][j - 1]
                    );
            }
        }
    }
    return grid[str1.length][str2.length];
}
