class Node
    attr_accessor :val, :left, :right
    def initialize(val)
        @left = nil
        @right = nil
        @val = val
    end
end

one = Node.new(1);
two = Node.new(2);
three = Node.new(3);
four = Node.new(4);

root = three;
root.left = two;
root.right = four;
root.left.left = one;
root.right.right = Node.new(66);
root.right.right.left = Node.new(55);
root.right.right.right = Node.new(11);
root.right.right.left.left = Node.new(9);
root.right.right.left.right = Node.new(10);
root.right.right.right.right = Node.new(42);

ans1 = dfs(root, 42) # Node 42
ans2 = dfs(root, -99) # null
# puts ans1
# puts ans2

def dfs(node, target)
    return nil if (node.nil?) 
    return node if (node.val == target) 
    left = dfs(node.left, target)
    right = dfs(node.right, target)
    left || right
end

def breadth_first_search(node, target)
    return nil if node.nil?
    queue = []
    queue.push(node)
    while !queue.empty?
        curr = queue.shift
        return curr if curr.val == target
        queue.push(curr.left) unless curr.left.nil?
        queue.push(curr.right) unless curr.right.nil?
    end
    nil
end

#    3           
#   /  \
#  2   4         
# /     \
# 1     66       
#      / \
#     55  11     
#    / \   \
#   9  10  42    

# bfs(root, 42)
# bfs(root, -99)

queue = []
curr = 42


# 0 -> 1 <- 2    88
# | \    \  ^    ^
# v  v    v |    |
# 5   4 <- 3     99
class Graph
    attr_accessor :graph
    def initialize()
        @graph = []
    end

    def add(graph_node)
        @graph.push(graph_node)
    end
end

class GraphNode
    attr_accessor :val, :children
    def initialize(val)
        @val = val
        @children = []
    end
end

zero, one, two, three, four, five, eighteight, ninenine = 
  GraphNode.new(0),
  GraphNode.new(1),
  GraphNode.new(2),
  GraphNode.new(3),
  GraphNode.new(4),
  GraphNode.new(5),
  GraphNode.new(88),
  GraphNode.new(99)

zero.children.push(one, four, five);
one.children.push(three, four);
three.children.push(two, four);
two.children.push(one);
ninenine.children.push(eighteight);

graph = Graph.new
graph.add(zero)
graph.add(ninenine)

# dfs of a graph
def dfs_graph(graph, target, visited = Set.new)
    graph.graph.each do |g|
        val = dfs_helper(g, target, visited)
        if (!val.nil?)
            return val
        end
    end
    nil
end

def dfs_helper(graph_node, target, visited = Set.new)
    return nil if graph_node.nil?
    return nil if visited.include?(graph_node)
    return graph_node if (graph_node.val == target) 
    visited.add(graph_node)
    graph_node.children.each do |child|
        return_val = dfs_helper(child, target, visited)
        if (!return_val.nil?)
            return return_val
        end
    end
    nil
end

# bfs of a graph
def bfs_graph(graph, target, visited = Set.new)
    graph.graph.each do |g|
        val = bfs_helper(g, target, visited)
        if (!val.nil?)
            return val
        end
    end
    nil
end

def bfs_helper(graph_node, target, visited = Set.new)
    return nil if graph_node.nil?
    queue = []
    queue.push(graph_node)
    while !queue.empty?
        curr = queue.shift
        visited.add(curr)
        return curr if curr.val == target
        curr.children.each do |child|
            queue.push(child) unless visited.include?(child)
        end
    end
    nil
end

edges = [[0, 1],[0,4],[0,5],[1,3],[3,2],[3,4],[2,1],[99,88]]
# when we are given edges as above, we have to convert it to a graph
# representation: either Graph class or an adjacency list

def construct_adj_list(edges)
    map = Hash.new
    edges.each do |edge|
        from = edge[0]
        to = edge[1]
        if map[to].nil?
            map[to] = []
        end
        if map[from].nil?
            map[from] = []
        end
        map[from].push(to)
    end
    map
end

# topological sort

# Many real world situations can be modelled as a graph when directed edges where some
# events must occur before others.

# Suppose you're a student at university X and you want to take Class H, then you
# must take classes A, B, D and E as prerequsities. In this sense there is an ordering
# on the nodes of the graph.

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

//             Class C
//         /           \
// Class A                 Class J - Class K
//         \           /           /
//             Class D            /
//                               /
// Class B ---------------------

const input = [
  ["ClassD", "ClassJ"],
  ["ClassA", "ClassC"],
  ["ClassA", "ClassD"],
  ["ClassB", "ClassK"],
  ["ClassJ", "ClassK"],
  ["ClassC", "ClassJ"],
];

const input2 = [
  ["1", "2"],
  ["1", "3"],
  ["2", "4"],
  ["3", "4"],
];

// 1 - 2 - 4
//   \ 3 /

const output = ["ClassA", "ClassC", "ClassD", "ClassJ", "ClassB", "ClassK"];
// const output = ["ClassA", "ClassC", "ClassB", "ClassD", "ClassJ", "ClassK"];

// 1. Construct an adjacency list given the array of edges
// const adjacencyList = {
//   "ClassA": ["ClassC", "ClassD"],
//   "ClassD": ["ClassJ"],
//   "ClassC": ["ClassJ"],
//   "ClassB": ["ClassK"],
//   "ClassJ": ["ClassK"],
//   "ClassK": [],
// }

// 2. Perform topological sort
//    a. pick a random node
//    b. beginning with that selected node, do a DFS exploring only unvisited nodes
//    c. on the recursive callback of the DFS, append the current node to
//       the topological ordering (aka. let topologicalOrdering = []) in reverse order
