let permArr = [];
let usedChars = [];
const n = +gets();
let arr = [];
let prev = gets(); //.split(' ').map(Number)
for (let j = 1; j <= n; j += 1) {
    arr.push(j);
}

function permute(input) {
    let i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr;
};
let t = permute(arr);
let findI = (t.findIndex((x) => x.join(' ') == prev));
print((t[findI + 1]).join(' '));
