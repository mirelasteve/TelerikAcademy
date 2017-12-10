/*
We are given a matrix of strings of size N x M. Sequences in the matrix we define
as sets of several neighbour elements located on the same line, column or diagonal.
Write a program that finds the longest sequence of equal strings in the matrix and prints its length.
*/

const datas = (gets()).split(' ');
const n = datas[0] * 1;
const m = datas[1] * 1;
let size = n;
let row,
    col;
let matrix = Array.from({ length: n });
while (size) {
    matrix[--size] = [];
}
for (row = 0; row < n; row += 1) {
    matrix[row] = (gets()).split(' ').map(Number);
}
let check = [];
let counters = [];
// print(matrix);
//check columns
for (col = 0; col < m; col += 1) {
    for (row = 0; row < n; row += 1) {
        check.push(matrix[row][col]);
    }
    let res = check.filter((x, i) => x == check[i + 1]);
    let count = res.length + 1;
    counters.push(count);
    check = [];
}
//check rows
for (row = 0; row < n; row += 1) {
    for (col = 0; col < m; col += 1) {
        check.push(matrix[row][col]);
    }
    let res = check.filter((x, i) => x == check[i + 1]);
    let count = res.length + 1;
    counters.push(count);
    check = [];
}
//check left to right diagonal
for (row = 0, col = 0; row < n - 1, col < m - 1; row += 1, col += 1) {
    check.push(matrix[row][col]);
}
let res = check.filter((x, i) => x == check[i + 1]);
let count = res.length + 1;
counters.push(count);
check = [];
//down left diagonal 
let k = 1;
let l = 0;
row = 0;
col = 0;

while (k < n) {
    if (row == n || col == m) {
        k = k + 1;
        l = 0;
    }
    for (row = k, col = l; row < n; row += 1, col += 1) {
        check.push(matrix[row][col]);
    }
    let res = check.filter((x, i) => x == check[i + 1]);
    let count = res.length + 1;
    counters.push(count);
    check = [];
    k += 1;
    l = 0;
    row = 0;
    col = 0;

}
//UP left diagonal 
k = 0;
l = 1;
row = 0;
col = 0;
while (l < m) {
    if (row == n || col == m) {
        k = 0;
        l += 1;
    }
    for (row = k, col = l; col < m; row += 1, col += 1) {
        check.push(matrix[row][col]);
    }
    let res = check.filter((x, i) => x == check[i + 1]);
    let count = res.length + 1;
    counters.push(count);
    check = [];
    k = 0;
    l = l + 1;
    row = 0;
    col = 0;

}
//UP Right diagonal 
k = 0;
l = m - 1;
row = 0;
col = 0;
while (l >= 0) {
    if (row == n || col == m) {
        k = 0;
        l -= 1;
    }
    for (row = k, col = l; col > 0; row += 1, col -= 1) {
        check.push(matrix[row][col]);
    }
    let res = check.filter((x, i) => x == check[i + 1]);
    let count = res.length + 1;
    counters.push(count);
    check = [];
    k = 0;
    l = l - 1;
    row = 0;
    col = 0;

}
//DOWN Right diagonal 
k = 1;
l = m - 1;
row = 0;
col = 0;
while (k < n) {
    if (row == n || col == m) {
        k += 1;
        l = m - 1;
    }
    for (row = k, col = l; row < n; row += 1, col -= 1) {
        check.push(matrix[row][col]);
    }
    let res = check.filter((x, i) => x == check[i + 1]);
    let count = res.length + 1;
    counters.push(count);
    check = [];
    k += 1;
    l = m - 1;
    row = 0;
    col = 0;

}
// for (row = n - 1, col = m - 1; row >= 0, col >= 0; row += 1, col -= 1) {
//     check.push(matrix[row][col]);
// }
// res = check.filter((x, i) => x == check[i + 1]);
// count = res.length + 1;
// counters.push(count);
// check = [];
// for (row = 0, col = 1; row < n, col < m; row += 1, col += 1) {
//     check.push(matrix[row][col]);

// }
// res = check.filter((x, i) => x == check[i + 1]);
// count = res.length + 1;
// counters.push(count);
// check = [];
print(Math.max(...counters));

