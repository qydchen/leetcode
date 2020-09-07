/**
 * Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.
    Note:

    Given target value is a floating point.
    You are guaranteed to have only one unique value in the BST that is closest to the target.
    Example:

    Input: root = [4,2,5,1,3], target = 3.714286

         4
        / \
        2   5
        / \
        1   3

    Output: 4
 */
const closestValue = function (root, target) {
    let closest = null;
    let closestNode = null;
    const queue = [root];
    while (queue.length) {
        const current = queue.shift();
        const diff = Math.abs(current.val - target);
        if (closest === null || diff < closest) {
            closest = diff;
            closestNode = current;
        }
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return closestNode.val;
};
