// var xoMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
// var winList = [[[0, 0], [0,1], [0, 2]], [[1,0], [1,1], [1,2]], [[2,0], [2,1], [2,2]],
//               [[0, 0], [1,0], [2,0]], [[0,1], [1,1], [2,1]], [[0,2], [1,2], [2,2]],
//               [[0,0], [1,1], [2,2]], [[0,2], [1,1], [2,0]]];



// const coordinateToCell = [["cell1", "cell2", "cell3"], 
                        // ["cell4", "cell5", "cell6"],
                        // ["cell7", "cell8", "cell9"]];


function autoPlay() {
    if (!aiVsaiToggle) {
        console.log("AI VS AI V2");
        playGame(1);
    }
    else{
        console.log("AI vs AI ended")
    }
}

function mySleepFunc(milliSeconds, player) {
    var dateOfCall = new Date();
    var currentDate = null;
    do {
        currentDate = new Date();
    } while (currentDate - dateOfCall < milliSeconds);
    playGame(player);
}

function playGame() {
    aiVsaiToggle = true;
    if(!userVsai && !gameOver){
        // let retCell = miniMax(0, 1)[1];
        let retCell = miniMax(0,1);
        // let arr = [1,2,3,4]
        // console.log("RANDOM NUM: ", Math.random(arr.length), arr.length);
        // console.log("RANDOM NUM: ", randomIntGenerator(arr.length), arr.length);
        console.log("Return Cell from minimax: ", retCell);
        retCell = retCell[1]
        xoMatrix[retCell[0]][retCell[1]] = player;
            let retCellID = coordinateToCell[retCell[0]][retCell[1]];
            console.log("RetCell1 ID ",retCellID);
            if(player == 1) {
                // alert("X move done");
                document.getElementById(retCellID).innerHTML='<img src="https://krishna-chilukuri.github.io/TicTacToe-with-Minimax/resources/xIcon.png" alt="X"/>';
            }
            else {
                // alert("O move done");
                document.getElementById(retCellID).innerHTML='<img src="https://krishna-chilukuri.github.io/TicTacToe-with-Minimax/resources/oIcon.png" alt="O"/>';
            }
            if (!isGameNotOver()) {
                console.log("It's a Draw between AI's");
                resultPara.textContent = "It's a Draw between AI\'s";
                gameOver = true;
            }
            else if(checkForWin(player)) {
                console.log("AI 1 (X) Won the Game");
                resultPara.textContent = "AI 1 (X) Won the Game";
                gameOver = true;
            }
            if(player == 1) {
                console.log("AHJFGVHJGHB");
                // mySleepFunc(2000, 2);
                // playGame(2);
                player = 2;
            }
            else {
                // mySleepFunc(2000, 1);
                // playGame(1);
                player = 1;
            }
    }
    else {
        console.log("Game ENDED");
    }
}