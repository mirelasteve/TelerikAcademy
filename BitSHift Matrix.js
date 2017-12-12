let row = +gets();
let col = +gets();
let counts = +gets();
let commands = gets().split(' ').map(Number);
let coeff = Math.max(row, col);
let size = col;
let pow = 0;
let matrix = [];
// let matrix = Array.from({ length: row });
// print(matrix);
for (let i = 0; i < row; i += 1) {
    matrix.push([]);
}
// print(matrix);



for (let i = row - 1; i >= 0; i -= 1) {
    for (let j = 0; j < col; j += 1) {
        matrix[i][j] = Math.pow(2, j + pow);
    }
    pow += 1;
}
// print(matrix);
let currentRow = row - 1;
let currentCol = 0;
let checkStr = [];
let finalResult = 0;


for (let i = 0; i < commands.length; i += 1) {
    let newRow = parseInt(commands[i] / coeff);
    let newCol = commands[i] % coeff;
    // print('row= ' + currentRow + ' col =' + currentCol + 'new row = ' + newRow + 'newcol = ' + newCol + ' sum =' + finalResult);

    // First check
    if (currentRow <= newRow && currentCol >= newCol) {

        for (let k = currentCol; k >= newCol; k -= 1) {
            let check = currentRow.toString() + k.toString();
            let theCheck = checkStr.some((x) => x == check);
            if (theCheck) {
                continue;
            } else {
                finalResult += matrix[currentRow][k];
                checkStr.push(check);
            }
        }
        for (let j = currentRow; j <= newRow; j += 1) {
            let check = j.toString() + newCol.toString();
            let theCheck = checkStr.some((x) => x == check);
            if (theCheck) {
                continue;
            } else {
                finalResult += matrix[j][newCol];
                checkStr.push(check);
            }
        }
    }
    //Second check
    if (currentRow <= newRow && currentCol <= newCol) {
        // print('!2');
        for (let k = currentCol; k <= newCol; k += 1) {
            let check = currentRow.toString() + k.toString();
            let theCheck = checkStr.some((x) => x == check);
            if (theCheck) {
                continue;
            } else {
                finalResult += matrix[currentRow][k];
                checkStr.push(check);

            }
            // print(finalResult);
        }
        for (let j = currentRow; j <= newRow; j += 1) {
            // print(finalResult);
            let check = j.toString() + newCol.toString();
            let theCheck = checkStr.some((x) => x == check);
            // print(checkStr + '.....' + check + '.....' + matrix[j][newCol]);
            if (theCheck) {
                continue;
            } else {
                finalResult += matrix[j][newCol];
                checkStr.push(check);
            }
        }
        //Third check
    }
    if (currentRow >= newRow && currentCol <= newCol) {
        // print('!3');
        for (let k = currentCol; k <= newCol; k += 1) {
            let check = currentRow.toString() + k.toString();
            let theCheck = checkStr.some((x) => x == check);
            if (theCheck == true) {
                continue;
            } else {
                finalResult += matrix[currentRow][k];
                checkStr.push(check);
            }
        }
        for (let j = currentRow; j >= newRow; j -= 1) {

            let check = j.toString() + newCol.toString();
            let theCheck = checkStr.some((x) => x == check);
            if (theCheck) {
                continue;
            } else {
                finalResult += matrix[j][newCol];
                checkStr.push(check);
            }

        }

    }
    //Fourth check
    if (currentRow >= newRow && currentCol >= newCol) {
        // print('!4');
        for (let k = currentCol; k >= newCol; k -= 1) {
            let check = currentRow.toString() + k.toString();
            let theCheck = checkStr.some((x) => x == check);
            if (theCheck) {
                continue;
            } else {
                finalResult += matrix[currentRow][k];
                checkStr.push(check);

            }
        }
        for (let j = currentRow; j >= newRow; j -= 1) {
            let check = j.toString() + newCol.toString();
            let theCheck = checkStr.some((x) => x == check);
            if (theCheck) {
                continue;
            } else {
                finalResult += matrix[j][newCol];
                checkStr.push(check);
            }
        }

    }

    currentRow = newRow;
    currentCol = newCol;
}
print(finalResult);
quit(0);
