function miniMax(depth, currentMove){
    if(currentMove == 3) {
        currentMove = 1;
        depth += 1;
    }
    // let a = prompt("dkakjdsbn");
    if(!isGameNotOver()) {
        let retArr = [];
        retArr.push(returnScore(depth));
        // return [returnScore(depth)];
        return retArr;
    }
    // let aa = prompt("dkakjdsbn");
    let scores = [];
    let moves = getCellsAvailable();

    moves.forEach(move => {
        // console.log(move);
        // let xx = prompt("AKHDjk");
        if(currentMove == 1 && checkForAIWin(move)) {
            scores.push(10 - depth);
        }
        else if (currentMove == 2 && checkForUserWin(move)) {
            scores.push(depth - 10);
        } 
        else {
            if(currentMove == 1) {
                xoMatrix[move[0]][move[1]] = 2;
            }
            else {
                xoMatrix[move[0]][move[1]] = 1;
            }
            // xoMatrix[move[0]][move[1]] = currentMove - 1;//CHECK THIS
            // console.log("PUSH START");
            let retVal = miniMax(depth, currentMove + 1);
            // console.log(retVal, retVal[0]);
            // if(retVal[0] == undefined) {
                // console.log("UNDEFINED RETURNED");
                // let xad = prompt("WAITING!!!!");
            // }
            scores.push(retVal[0]);
            // console.log(scores);
            xoMatrix[move[0]][move[1]] = 0;
        }
    });
    if(currentMove == 1){
        let maxScoreInd = 0;
        let maxScore = scores[0];
        for (let index = 0; index < scores.length; index++) {
            const element = scores[index];
            if(element > scores[maxScoreInd]) {
                maxScoreInd = index;
                maxScore = element;
            }
        }
        // let maxScoreInd = scores.indexOf(Math.max(scores));
        let choices = getChoices(moves, scores, maxScore);
        let choiceIndex = randomIntGenerator(choices.length);
        // let choice = choices[choiceIndex];
        let choice = choices[randomIntGenerator(choices.length)]
        // let choice = moves[maxScoreInd];
        // console.log("RETURNING FROM IF", maxScoreInd, choice, scores);
        // console.log("SCORES IS: ",scores)
        // console.log("KEPPPPPS: ", allMaxInd);
        // let choice = moves[randomIntGenerator(allMaxInd.length)];
        return [scores[maxScoreInd], choice, scores, moves, choices, choiceIndex];
    }
    else{
        let minScoreInd = 0;
        for (let index = 0; index < scores.length; index++) {
            const element = scores[index];
            if (element < scores[minScoreInd]){
                minScoreInd = index;
            }
        }
        // let minScoreInd = scores.indexOf(Math.min(scores));
        let choice = moves[minScoreInd];
        // console.log("RETURNING FROM ELSE", minScoreInd, scores);
        return [scores[minScoreInd], choice, scores, moves]
    }
}



const playerMove = (x, y, cellId) => {
    if (!aiVsaiToggle && !gameOver && xoMatrix[x][y] == 0){
        userVsai = true;
        xoMatrix[x][y] = 1;
        console.log(cellId, typeof(cellId));
        // <img src="../resources/xIcon." alt="">
        {/* <img src="../resources/oIcon." alt=""> */}
        document.getElementById(cellId).innerHTML = '<img src="https://krishna-chilukuri.github.io/TicTacToe-with-Minimax/resources/xIcon.png" alt="X"></img>';
        // document.getElementById(cellId).innerHTML='<img src="https://krishna-chilukuri.github.io/TicTacToe-with-Minimax/resources/xIcon.png" alt="X"/>';
        // document.getElementById("cell1")
        document.getElementById(cellId).classList.remove('hoverCell');
        console.log("User played his move properly!!");
        if(!isGameNotOver()) {
            console.log("It's a Win - Win situation");
            resultPara.textContent = "It's a Draw!";
            blockAllInputs();
            //Block all other inputs except for reset
            // Result para ni set cheyyali with the above msg
        }
        else if(checkForWin(1)) {
            console.log("U Won the game");
            resultPara.textContent = "U Won the game!!!!!";
            blockAllInputs();
            //Block all other inputs except for reset
            // Result para ni set cheyyali with the above msg
        }
        else {
            let retCell = miniMax(0, 1)[1];
            console.log("Return Cell from minimax: ",retCell);
            xoMatrix[retCell[0]][retCell[1]] = 2;
            console.log("COORDINATES: ",retCell[0], retCell[1]);
            let retCellID = coordinateToCell[retCell[0]][retCell[1]];
            console.log("ETST",retCellID)
            document.getElementById(retCellID).innerHTML='<img src="https://krishna-chilukuri.github.io/TicTacToe-with-Minimax/resources/oIcon.png" alt="O"/>';
            document.getElementById(retCellID).classList.remove('hoverCell');

            console.log("AI move completed!!!!");
            if(!isGameNotOver()) {
                console.log("It's a Win - Win situation");
                resultPara.textContent = "It's a Draw!";
                blockAllInputs();
                //Block all other inputs except for reset
                // Result para ni set cheyyali with the above msg
            }
            else if(checkForWin(2)) {
                console.log("COM Won the game!!!");
                resultPara.textContent = "U Lost...COM Won the game!";
                blockAllInputs();
                //Block all other inputs except for reset
                // Result para ni set cheyyali with the above msg
            }
        }
    }
    else if(gameOver) {
        console.log("GAME IS OVER!!! Click Reset or Reload page");
    }
    else {
        console.log("User clicked on a previously assigned cell!!");
    }
    // console.log("FAIL!!");
    console.log(xoMatrix[0], xoMatrix[1], xoMatrix[2]);
}

// playerMove(1,1);