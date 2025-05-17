'use strict'

var gBoard
const EMPTY = ''
const BOMB = '💣'

// var gLevel = {
//   SIZE: 4,
//   MINES: 2,
// }

// var gGame = {
//   isOn: false,
//   revealedCount: 0,
//   markedCount: 0,
//   secsPassed: 0,
// }

function onInit() {
  console.log('Test')
  gBoard = buildBoard()
  renderBoard(gBoard)
  //   console.table(gBoard)
}

function buildBoard() {
  const board = createMat(4, 4)
  return board
}

function renderBoard(board) {
  var strHTML = ''

  for (var i = 0; i < board.length; i++) {
    strHTML += '<tr>'
    for (var j = 0; j < board[i].length; j++) {
      strHTML += `<td data-i=${i} data-j=${j} onclick='onCellClicked(this)'>${
        Math.random() > 0.2 ? EMPTY : BOMB
      }</td>`
    }
    strHTML += '</tr>'
  }

  var elTable = document.querySelector('.board')
  elTable.innerHTML = strHTML
}

function onCellClicked(elClick) {
  //   elClick.classList.add('selected')
  //   var selected = document.querySelector('.selected')
  //   console.log(selected)
}
