let arr = [];
arr[0] = +gets();
arr[1] = +gets();
arr[2] = +gets();
arr[3] = +gets();
let height = +gets();
let width = +gets();
let end = height * width;
for (let i = 4; i < end; i += 1) {
    arr[i] = arr[i - 4] + arr[i - 3] + arr[i - 2] + arr[i - 1];
}
for (let i = 0; i <= end; i += width) {
    if (arr[i]) {
        print((arr.slice(i, width + i)).join(' '));
    }
}
quit(0)
