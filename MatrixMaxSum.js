const rows = +gets();
let matrix = [];
for (let i = 0; i < rows; i += 1) {
    matrix[i] = gets().split(' ').map(Number);
}
const coordinates = gets().split(' ').map(Number);
let sums = [];

for (let i = 0; i < coordinates.length; i += 2) {
    let sum = 0;
    let row = coordinates[i];
    let col = coordinates[i + 1];

    if (row > 0) {
        if (col > 0) {
            col = col - 1;
            row = row - 1;

            for (let i = 0; i < col; i += 1) {
                sum += matrix[row][i];

            }
            for (let j = row; j >= 0; j -= 1) {
                sum += matrix[j][col];

            }
        }
        sums.push(sum);
    }
    if (row > 0) {
        if (col < 0) {
            row = row - 1;
            col = Math.abs(col) - 1;

            for (let i = 0; i < col; i += 1) {
                sum += matrix[row][i];


            }
            for (let j = row; j <= rows - 1; j += 1) {
                sum += matrix[j][col];

            }
        }
        sums.push(sum);
    }
    if (row < 0) {

        if (col > 0) {
            row = Math.abs(row) - 1;
            col = Math.abs(col) - 1;

            for (let i = matrix[row].length - 1; i >= col; i -= 1) {
                sum += matrix[row][i];


            }
            for (let j = row; j >= 0; j -= 1) {
                sum += matrix[j][col];
            }
        }
        sums.push(sum);
    }
    if (row < 0) {
        if (col < 0) {
            col = Math.abs(col) - 1;
            row = Math.abs(row) - 1;

            for (let i = matrix[row].length - 1; i >= col; i -= 1) {
                sum += matrix[row][i];
            }
            for (let j = row + 1; j < rows; j += 1) {
                sum += matrix[j][col] * 1;
            }
        }
        sums.push(sum);
    }

}
print(Math.max(...sums));
