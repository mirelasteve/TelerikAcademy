const datas=gets().split(' ');
const n = +datas[0];
const k = +datas[1];
let comb = [];
const printCombinationWithRep = (n, k, index, combination) => {
    if (index === k) {
        print(combination.join(' '));
        return;
    }

    const start = index ? combination[index - 1]+1 : 1;
    for (let i = start; i <= n; i++) {
        combination[index] = i;
        printCombinationWithRep(n, k, index + 1, combination);
    }
}
printCombinationWithRep(n, k, 0, comb);
quit(0);
