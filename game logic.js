var winList = [[[0, 0], [0,1], [0, 2]], [[1,0], [1,1], [1,2]], [[2,0], [2,1], [2,2]],
                [[0, 0], [1,0], [2,0]], [[0,1], [1,1], [2,1]], [[0,2], [1,2], [2,2]],
                [[0,0], [1,1], [2,2]], [[0,2], [1,1], [2,0]]];
                //0 , 1, 2
                //3, 4, 5
                //6, 7
                //Again in each of these indices there are 3 points.
                //So, each point is referenced by [0][0] = [0, 0] from winList[0]
                //Now, for each of the inner 0's, it's [0][0][0]
var xoMatrix = [[1, 0, 1], [0, 0, 0], [1, 0, 0]];
// var xoMatrix = [[1, 2, 1], [1, 2, 2], [1, 1, 1]];
var currentMove = 1;
modeOfGame = 0;

for (let index = 0; index < winList.length; index++) {
    const element = winList[index];
    for (let index1 = 0; index1 < element.length; index1++) {
        const element1 = element[index1];
        console.log(element1);
        
    }
}

console.log("AFTER FOR")
console.log(winList[0][0])

function checkForWin(val){

    return winList.some(listof3 => {
        console.log(xoMatrix[listof3[0][0]][listof3[0][1]], xoMatrix[listof3[1][0]][listof3[1][1]], xoMatrix[listof3[2][0]][listof3[2][1]])
        if (xoMatrix[listof3[0][0]][listof3[0][1]] == xoMatrix[listof3[1][0]][listof3[1][1]] && xoMatrix[listof3[1][0]][listof3[1][1]] == xoMatrix[listof3[2][0]][listof3[2][1]] && xoMatrix[listof3[2][0]][listof3[2][1]] == val) {
            console.log("INSIDE THE IF")
            return true;            
        }
    });
}

function checkForDraw(){
    return xoMatrix.some(row => {
        return row.some(cell => {
            console.log(cell)
            if(cell == 0){
                return true;
            }
        });
    });
}

console.log(checkForWin(1));
console.log(checkForDraw());