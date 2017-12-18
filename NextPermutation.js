const n = +gets();
let per = [];
let us = [];
let res = [];
let j = 0;
const element = gets();
const printPermutation = (n, index, permutation, used, res) => {
    if (index === n) {
        res[j] = permutation.join(' ');
        if (res[j - 1] == element) {
            print(res[j]);
        }
        j = j + 1;
        return;
    }
    for (let i = 0; i < n; i++) {
        if (used[i]) {
            continue;
        }
        permutation[index] = i + 1;
        used[i] = true;
        printPermutation(n, index + 1, permutation, used, res);
        used[i] = false;
    }
}
printPermutation(n, 0, per, us, res);
