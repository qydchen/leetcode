let board1 = [
  ["X","O",""],
  ["X","O",""],
  ["O","X",""]];
let board2 = [
  ["X","O",""],
  ["X","O",""],
  ["X","","O"]
];
let board3 = [
  ["X","O","X"],
  ["X","O","O"],
  ["O","X","O"]
];
let board4 = [
  ["O","O","X"],
  ["X","O","X"],
  ["O","X","O"]
];

function isSolved(board) {
  let stillPlaying = null;
  let winConditions = getWinningConditions(board);
  for (let i = 0; i < winConditions.length; i++) {
    let winCondition = winConditions[i];
    let possibleWin = winCondition.map((coord) => board[coord[0]][coord[1]]);
    if (!stillPlaying) {
      stillPlaying = possibleWin.some((mark) => mark === "");
    }
    let xWon = possibleWin.every((mark) => mark === 'X');
    let oWon = possibleWin.every((mark) => mark === 'O');
    if (xWon) {
      return 'X';
    } else if (oWon) {
      return 'O';
    }
  }
  if (stillPlaying) {
    return 'Still in progress';
  } else {
    return 'Draw';
  }
}

function getWinningConditions(board) {
  let horizontal = [[],[],[]];
  let vertical = [[],[],[]];
  let downdiag = [];
  let updiag = [];
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    downdiag.push([i,i])
    updiag.push([row.length - 1 - i, i])
    for (let j = 0; j < row.length; j++) {
      let cell = row[j];
      horizontal[i].push([i,j]);
      vertical[i].push([j,i]);
    }
  }
  return horizontal.concat(vertical, [updiag, downdiag]);
}

console.log(isSolved(board1));
console.log(isSolved(board2));
console.log(isSolved(board3));
console.log(isSolved(board4));
