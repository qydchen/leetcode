let board1 = [
  ["X", "O", ""],
  ["X", "O", ""],
  ["O", "X", ""],
];

let board2 = [
  ["X", "O", ""],
  ["X", "O", ""],
  ["X", "", "O"],
];
let board3 = [
  ["X", "O", "X"],
  ["X", "O", "O"],
  ["O", "X", "O"],
];
let board4 = [
  ["O", "O", "X"],
  ["X", "O", "X"],
  ["O", "X", "O"],
];

function isSolved(board) {
  const possibleWins = getPossibleWins(board);
  let stillPlaying = null;
  for (let i = 0; i < possibleWins.length; i++) {
    const possibleWin = possibleWins[i];
    if (!stillPlaying) {
      stillPlaying = possibleWin.some((mark) => mark === "");
    }
    const xWon = possibleWin.every((mark) => mark === "X");
    const oWon = possibleWin.every((mark) => mark === "O");
    if (xWon) {
      return "X";
    } else if (oWon) {
      return "O";
    }
  }
  return stillPlaying ? "Still in progress" : "Draw";
}

function getPossibleWins(board) {
  const getMark = (row, col) => board[row][col];
  const horizontal = [[], [], []];
  const vertical = [[], [], []];
  const downdiag = [];
  const updiag = [];
  for (let i = 0; i < board.length; i++) {
    downdiag.push(getMark(i, i));
    updiag.push(getMark(board.length - 1 - i, i));
    for (let j = 0; j < board.length; j++) {
      horizontal[i].push(getMark(i, j));
      vertical[i].push(getMark(j, i));
    }
  }
  return horizontal.concat(vertical, [updiag, downdiag]);
}

console.log(isSolved(board1));
console.log(isSolved(board2));
console.log(isSolved(board3));
console.log(isSolved(board4));
