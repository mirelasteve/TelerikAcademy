let code = gets();
let datas = gets();
let letters = datas.match(/[A-Z]/g);
let numbers = datas.match(/\d+/g);
const cipher = new Map();
// for (let i = 0; i < letters.length; i += 1) {
//     cipher.set(letters[i], numbers[i]);
// }
let n = numbers.length;
let k = n;
let arr = [];
let index = 0;
let save = [];
let answer = [];
let oA = [];
const generateCombination = (n, k, arr, oA, index, cipher, save, code, answer) => {
    if (index === k) {
        // print(oA);
        let check = arr.join('');
        if (check == code) {
            let th = oA.join('');
            answer.push(th);
        }
        return;
    }
    for (let i = 0; i < n; i += 1) {
        let x = numbers[i];
        arr[index] = x;
        let y = letters[i];
        oA[index] = y;
        generateCombination(n, k, arr, oA, index + 1, cipher, save, code, answer);
    }
    return answer;
}
let ans = [];
for (let j = 1; j <= n; j += 1) {
    let helpArr = [];
    let p = generateCombination(n, j, arr, oA, index, cipher, save, code, answer);
    helpArr = p;
    ans = helpArr.concat(ans);
    save = [];
    answer = [];
    index = 0;
    arr = [];
}
let lenn = ans.length;
print(ans.length);
if (lenn > 0) {
    print(ans.join('\n'));
}
quit(0);
