var xoMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var winList =   [[[0, 0], [0,1], [0, 2]], [[1,0], [1,1], [1,2]], [[2,0], [2,1], [2,2]],
                [[0, 0], [1,0], [2,0]], [[0,1], [1,1], [2,1]], [[0,2], [1,2], [2,2]],
                [[0,0], [1,1], [2,2]], [[0,2], [1,1], [2,0]]];

const coordinateToCell = [["cell1", "cell2", "cell3"], 
                        ["cell4", "cell5", "cell6"],
                        ["cell7", "cell8", "cell9"]];

var modeOfGame = 0;
var gameOver = false;
var player = 1;
var aiVsaiToggle = false;
var userVsai = false;
const resultPara = document.querySelector(".resultPara");
const ticTacCells = document.querySelector(".tictactoeCell");