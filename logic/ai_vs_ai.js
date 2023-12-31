var xoMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var winList = [[[0, 0], [0,1], [0, 2]], [[1,0], [1,1], [1,2]], [[2,0], [2,1], [2,2]],
              [[0, 0], [1,0], [2,0]], [[0,1], [1,1], [2,1]], [[0,2], [1,2], [2,2]],
              [[0,0], [1,1], [2,2]], [[0,2], [1,1], [2,0]]];

const aiVsaiToggle = false;

// const coordinateToCell = [["cell1", "cell2", "cell3"], 
                        // ["cell4", "cell5", "cell6"],
                        // ["cell7", "cell8", "cell9"]];
var gameOver = false;

function mySleepFunc(milliSeconds) {
    var dateOfCall = new Date();
    var currentDate = null;
    do {
        currentDate = new Date();
    } while (currentDate - dateOfCall < milliSeconds);
}



function autoPlay() {
    if (!aiVsaiToggle){
        console.log("AI VS AI");
        while(!gameOver){
            let retCell1 = miniMax(0, 1)[1];
            console.log("Return Cell from minimax: ", retCell1);
            xoMatrix[retCell1[0]][retCell1[1]] = 1;
            let retCell1ID = coordinateToCell[retCell1[0]][retCell1[1]];
            console.log("RetCell1 ID ",retCell1ID);
            document.getElementById(retCell1ID).innerHTML='<img src="https://krishna-chilukuri.github.io/TicTacToe-with-Minimax/resources/xIcon.png" alt="X"/>';
            mySleepFunc(2000);
            // for (let index = 0; index < 20000; index++) {
                // ;
            // }
            // setTimeout(() => console.log("Sleeping"), 10000);
            // setTimeout(() => {
            //     console.log("Sleeping for a while")
            // }, 1000);
            if(!isGameNotOver()) {
                console.log("It's a Draw between AI's");
                resultPara.textContent = "It's a Draw between AI\'s";
                gameOver = true;
            }
            else if(checkForWin(1)) {
                console.log("AI 1 (X) Won the Game");
                resultPara.textContent = "AI 1 (X) Won the Game";
                gameOver = true;
            }
            else {
                let retCell2 = miniMax(0, 1)[1];
                console.log("Return Cell from minimax: ",retCell2);
                xoMatrix[retCell2[0]][retCell2[1]] = 2;
                let retCell2ID = coordinateToCell[retCell2[0]][retCell2[1]];
                console.log("RetCell2 ID",retCell2ID);
                document.getElementById(retCell2ID).innerHTML='<img src="https://krishna-chilukuri.github.io/TicTacToe-with-Minimax/resources/oIcon.png" alt="O"/>';
                if(!isGameNotOver()) {
                    console.log("It's a Draw between AI's");
                    resultPara.textContent = "It's a Draw between AI\'s";
                    gameOver = true;
                }
                else if(checkForWin(1)) {
                    console.log("AI 1 (X) Won the Game");
                    resultPara.textContent = "AI 1 (X) Won the Game";
                    gameOver = true;
                }
            }
        }
        console.log("Game Ended");
    }
    else {
        console.log("AI VS AI Sttopped")
    }
}