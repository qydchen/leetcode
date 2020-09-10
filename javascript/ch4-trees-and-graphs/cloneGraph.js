/**
 * Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return node;
    const queue = [node];
    const map = new Map();
    while (queue.length > 0) {
        const current = queue.shift();
        if (!map.has(current.val)) {
            map.set(current.val, new Node(current.val));
        }
        current.neighbors.forEach((neighbor) => {
            if (!map.has(neighbor.val)) {
                map.set(neighbor.val, new Node(neighbor.val));
                queue.push(neighbor);
            }
            map.get(current.val).neighbors.push(map.get(neighbor.val));
        });
    }
    return map.get(node.val);
};
