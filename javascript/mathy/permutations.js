/*
    Write a function that takes in an array of unique integers and returns
    an array of all permutations of those integers in no particular order.

    If the input array is empty, the function should return an empty array.

    array = [1,2,3]

    [1,2,3][1,3,2][2,1,3][2,3,1][3,1,2][3,2,1]
*/

// Upper Bound: O(n^2*n!) time | O(n*n!) space
// Roughtly: O(n*n!) time | O(n*n!) space
function permutations(arr) {
    const permutations = [];
    permute(arr, [], permutations);
    return permutations;
}

function permute(arr, currentPermutation, permutations) {
    if (!arr.length && currentPermutation.length) {
        console.log(`${currentPermutation}`);
        console.log("----");
        permutations.push(currentPermutation);
    } else {
        for (let i = 0; i < arr.length; i += 1) {
            const newArray = arr.slice(0, i).concat(arr.slice(i + 1));
            const newPerm = currentPermutation.concat([arr[i]]);
            console.log("newArray", newArray);
            console.log("newPerm:", newPerm);
            console.log("permutation:", permutations);
            console.log("-------");
            permute(newArray, newPerm, permutations);
        }
    }
}

/*
[]
[1]
[1,2]
[1,3]
[1,2,3]
[1,3,2]
*/
// console.log(permutations([1, 2, 3]));
permutations([1, 2, 3]);
