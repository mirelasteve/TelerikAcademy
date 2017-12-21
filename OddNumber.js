let n = +gets();
let arr = [];
let counter = 0;
for (let i = 0; i < n; i += 1) {
    arr[i] = gets();
}
for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
        if (arr[i] === arr[j]) {
            counter += 1;
        }
    }
    if ((counter % 2 !== 0)||counter===1) {
        print(arr[i]);
        break;
    } else {
        counter = 0;
    }
}
quit(0);
