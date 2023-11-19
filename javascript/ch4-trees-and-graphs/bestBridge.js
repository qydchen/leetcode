const bestBridge = (grid) => {
  let best = Infinity;
  let visited = new Array(grid.length)
    .fill()
    .map(() => new Array(grid[0].length).fill(false));
  let visitedAnIsland = false;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "L" && !visitedAnIsland) {
        markIsland(i, j, visited, grid);
        visitedAnIsland = true;
      }
      if (grid[i][j] === "L" && visited[i][j]) {
        const bridgeLength = bfs(i, j, visited, grid);
        if (bridgeLength > 0) {
          best = Math.min(bridgeLength, best);
        }
      }
    }
  }
  return best;
};

const markIsland = (i, j, visited, grid) => {
  if (
    i < 0 ||
    j < 0 ||
    i > visited.length - 1 ||
    j > visited[0].length - 1 ||
    visited[i][j] === true ||
    grid[i][j] !== "L"
  ) {
    return;
  }
  visited[i][j] = true;
  markIsland(i + 1, j, visited, grid);
  markIsland(i - 1, j, visited, grid);
  markIsland(i, j + 1, visited, grid);
  markIsland(i, j - 1, visited, grid);
};

const bfs = (i, j, visited, grid) => {
  const positions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const token = (i, j) => `${i},${j}`;
  let q = [[i, j]];
  let shortest = 0;
  let visitedSet = new Set([token(i, j)]);
  while (q.length) {
    let newQ = [];
    while (q.length) {
      let curr = q.shift();
      let [currentI, currentJ] = curr;
      if (grid[currentI][currentJ] === "L" && !visited[currentI][currentJ]) {
        return shortest - 1;
      }
      for (let [x, y] of positions) {
        const newI = currentI + x;
        const newJ = currentJ + y;
        if (
          newI < 0 ||
          newJ < 0 ||
          newI > grid.length - 1 ||
          newJ > grid[0].length - 1 ||
          visited[newI][newJ] ||
          visitedSet.has(token(newI, newJ))
        ) {
          continue;
        }
        visitedSet.add(token(newI, newJ));
        newQ.push([newI, newJ]);
      }
    }
    q = newQ;
    shortest++;
  }

  return shortest - 1;
};
