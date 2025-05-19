'use strict'
const EMPTY = '🩶'
const BOMB = '💣'
const FLAG = '🚩'

var gBoard = {
  minesAroundCount: 4,
  isRevealed: false,
  isMine: false,
  isMarked: false
}

var gLevel = {
  SIZE: 4,
  MINES: 2,
}

var gGame = {
  isOn: false,
  revealedCount: 0,
  markedCount: 0,
  secsPassed: 0,
}

function onInit() {
  gBoard = buildBoard(gLevel.SIZE)
  renderBoard(gBoard)
}

function buildBoard() {
  const board = createMat(4, 4)
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      board[i][j] = EMPTY
    }

    return board
  }
}

function renderBoard(board) {
  var strHTML = ''

  for (var i = 0; i < board.length; i++) {
    strHTML += '<tr>'
    for (var j = 0; j < board[i].length; j++) {
      var currCell = board[i][j]
      var cellBoard = currCell.isMine ? BOMB : EMPTY
      strHTML += `<td data-i=${i} data-j=${j} onclick='onCellClicked(this)'>${cellBoard}</td>`

    }
    strHTML += '</tr>'
  }

  var elTable = document.querySelector('.board')
  elTable.innerHTML = strHTML
}

function onCellClicked(elclick) {
  elclick.classList.add('selected')
  console.log('i:', elclick.dataset.i, 'j:', elclick.dataset.j)
}


// mineLoction(gBoard)
// function mineLoction(board) {

//   for (var i = 0; i < board.length; i++) {
//     for (var j = 0; j < board[i].length; j++)
    
// }
// }

























