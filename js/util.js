'use strict'
function createMat(ROWS, COLS) {
  const mat = []
  for (var i = 0; i < ROWS; i++) {
    const row = []
    for (var j = 0; j < COLS; j++) {
      row.push('')
    }
    mat.push(row)
  }
  return mat
}


// function setMinesNegsCount(board) {
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             const currCell = board[i][j]
//             if (currCell.isMine) continue
//             currCell.minesAroundCount = countMinesAroundCell(i, j)
//         }
//     }
// }