const n = +gets();
let result = '1 2';
for (let i = 3; i <= n; i += 1) {
    if (i % 3 !== 0 && i % 7 !== 0) {
        result += ' ' + i;
    }
}
print(result);
