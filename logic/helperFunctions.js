function resetGame() {
    player = 1;
    xoMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    console.log("XO MATRIX SET TO 0");
    gameOver = false;
    aiVsaiToggle = false;
    userVsai = false;
    for (let index = 1; index < 10; index++){
        // const element = array[index];
        // let index11 = String(index);
        // const cellID = 'cell ${index1}';
        const cellID = 'cell'+index;
        document.getElementById(cellID).innerHTML = "";
        document.getElementById(cellID).classList.add('hoverCell');
        console.log(cellID, "is reset", typeof(cellID));
    }
    resultPara.textContent="";
}

function blockAllInputs() {
    console.log("INPUTS DISABLED");
    // ticTacCells.disabled = true;
    gameOver = true;
    // document.getElementById("cell1").disabled = true;
    // document.getElementById("cell4").onclick = blockThis();
}

function checkForWin(val){

    return winList.some(listof3 => {
        // console.log(xoMatrix[listof3[0][0]][listof3[0][1]], xoMatrix[listof3[1][0]][listof3[1][1]], xoMatrix[listof3[2][0]][listof3[2][1]])
        if (xoMatrix[listof3[0][0]][listof3[0][1]] == xoMatrix[listof3[1][0]][listof3[1][1]] && xoMatrix[listof3[1][0]][listof3[1][1]] == xoMatrix[listof3[2][0]][listof3[2][1]] && xoMatrix[listof3[2][0]][listof3[2][1]] == val) {
            // console.log("INSIDE THE IF")
            return true;            
        }
    });
}

function isGameNotOver(){
    return xoMatrix.some(row => {
        return row.some(cell => {
            // console.log(cell)
            if(cell == 0){
                return true;
            }
        });
    });
}

function getCellsAvailable(){
    emptyCells = [];
    for (let rowIndex = 0; rowIndex < xoMatrix.length; rowIndex++) {
        const row = xoMatrix[rowIndex];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            const element = row[colIndex];
            if(element == 0){
                emptyCells.push([rowIndex, colIndex]);
            }   
        }        
    }
    return emptyCells;
}

function returnScore(depth){
    if(checkForWin(1)) {
        return depth - 10;
    }
    else if (checkForWin(2)) {
        return 10 - depth;
    } 
    else {
        return 0
    }
}

function randomIntGenerator(maxVal) {
    return Math.floor(Math.random() * maxVal);
}

function getChoices(moves, scores, maxScore){
    let retChoices = [];
    for (let index = 0; index < scores.length; index++) {
        const element = scores[index];
        if(element == maxScore) {
            retChoices.push(moves[index]);
        }
    }
    return retChoices;
}

function checkForUserWin(cell){
    xoMatrix[cell[0]][cell[1]] = 1;
    if(checkForWin(1)){
        xoMatrix[cell[0]][cell[1]] = 0;
        return true;
    }
    xoMatrix[cell[0]][cell[1]] = 0;
    return false;
}

function checkForAIWin(cell){
    xoMatrix[cell[0]][cell[1]] = 2;
    if(checkForWin(2)){
        xoMatrix[cell[0]][cell[1]] = 0;
        return true;
    }
    xoMatrix[cell[0]][cell[1]] = 0;
    return false;
}