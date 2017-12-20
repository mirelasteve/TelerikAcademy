const len = +gets();
let arr1 = gets().split(' ').map(Number);
let count = 0;
for (let i = 1; i < len - 1; i += 1) {
    if (arr1[i] > arr1[i - 1] && arr1[i] > arr1[i + 1]) {
        count += 1
    }
}
print(count);
