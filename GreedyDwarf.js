const gets = this.gets || getGets(['4 3', '3 2 4',
    '2 0 3',
    '1 1 5',
    '2 2 5'
]);
let print = this.print || console.log;
const datas = gets().split(' ').map(Number);
const rows = datas[0];
const cols = datas[1];
let matrix = [];
let joroCol;
let joroRow;
for (let i = 0; i < rows; i += 1) {
    matrix[i] = matrix[i] = gets().split(' ').map(Number);
    if (matrix[i].indexOf(0) != -1) {
        joroCol = matrix[i].indexOf(0);
        joroRow = i;
    }

}
let empty = true;
let wallet = 0;
while (empty) {
    let movements = [];
    if (matrix[joroRow][joroCol - 1] >= 0) {
        movements[0] = matrix[joroRow][joroCol - 1];
    } else {
        movements[0] = 0;
    }

    if (matrix[joroRow][joroCol + 1] >= 0) {
        movements[1] = matrix[joroRow][joroCol + 1];
    } else {

        movements[1] = 0;
    }
    if (typeof(matrix[joroRow - 1]) != 'undefined') {
        if (matrix[joroRow - 1][joroCol] >= 0) {
            movements[2] = matrix[joroRow - 1][joroCol];
        } else {
            movements[2] = 0;
        }
    } else {
        movements[2] = 0;
    }
    if (typeof(matrix[joroRow + 1]) != 'undefined') {
        if (matrix[joroRow + 1][joroCol] >= 0) {
            movements[3] = matrix[joroRow + 1][joroCol];
        } else {
            movements[3] = 0;
        }
    } else { movements[3] = 0; }

    let maxMove = Math.max(...movements);

    let whereToGo = movements.indexOf(maxMove);

    if (whereToGo == 0) {
        wallet += 1;
        matrix[joroRow][joroCol - 1] = matrix[joroRow][joroCol - 1] - 1;
        joroCol = joroCol - 1;
    }
    if (whereToGo == 1) {
        wallet += 1;
        matrix[joroRow][joroCol + 1] = matrix[joroRow][joroCol + 1] - 1;
        joroCol = joroCol + 1;
    }
    if (whereToGo == 2) {
        wallet += 1;
        matrix[joroRow - 1][joroCol] = matrix[joroRow - 1][joroCol] - 1;
        joroRow = joroRow - 1;
    }
    if (whereToGo == 3) {
        wallet += 1;
        matrix[joroRow + 1][joroCol] = matrix[joroRow + 1][joroCol] - 1;
        joroRow = joroRow + 1;
    }
    let check = movements.every((x) => x == 0 || x == 'undefined');
    if (check) {
        empty = false;
    }

}
print(wallet - 1);
