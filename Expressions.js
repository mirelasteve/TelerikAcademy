let numbers = gets().split('').map(Number);
let final = +gets();
let variat = [];
let result = [];
let counter = 0;
let signs = ['*', '+', '-'];
const variations = (n, k, index, arr, variat, result) => {
    if (index === k) {
        result.push(variat.join(' ').split(' '));
        return;
    }
    for (let i = 0; i < arr.length; i += 1) {
        variat[index] = 'signs' + arr[i] + 'signs';
        variations(n, k, index + 1, arr, variat, result);
    }
    return result;
}
let allArrays = [];
allArrays.push(numbers);
// print(newSigns.length);
let newArr = [];
for (let i = 0; i < numbers.length - 1; i += 1) {
    if (numbers[i] == 0) {
        continue;
    }
    let f = numbers[i];
    let s = numbers[i + 1];
    newArr = numbers.slice(0, i).concat((f + '' + s).split(' ').concat(numbers.slice(i + 2)));
    allArrays.push(newArr);
}
let res = [];
let last = numbers.join('');
for (let u = 0; u < allArrays.length; u += 1) {
    let newSigns = variations(allArrays[u].length, allArrays[u].length - 1, 0, signs, variat, result);
    if (typeof(newSigns) == 'undefined') {
        break;
    }
    for (let t = 0; t < newSigns.length; t += 1) {
        for (let i = 0, j = 0; i <= allArrays[u].length, j <= newSigns[t].length; i += 1, j += 1) {
            if (typeof(newSigns[t][j]) !== 'undefined') {
                res.push(allArrays[u][i] + newSigns[t][j]);
            } else if (typeof(allArrays[u][i]) != 'undefined') {
                res.push(allArrays[u][i]);
            }
        }
                res = res.join('').split('signs');
        if (res[res.length - 1] == '*' || res[res.length - 1] == '+' || res[res.length - 1] == '-' || res[res.length - 1] == '') {
            res.pop();
        }
        if (res[res.length - 1] == '*' || res[res.length - 1] == '+' || res[res.length - 1] == '-' || res[res.length - 1] == '') {
            res.pop();
        }
        let myRes = '';
        myRes += res[0];
        let sum = 0;
        for (let r = 1; r < res.length; r += 2) {
            myRes = myRes + res[r] + res[r + 1];

            myRes = eval(myRes);
           
        }
        res = myRes;
        if (res == final) {
            counter += 1;
        }
        res = [];
    }
}
let finalStr = final.toString();
if (last == finalStr) {
    counter += 1;
}
print(counter);
