let numbers = [];
for (let i = 0; i < 5; i += 1) {
    numbers.push(+gets());
}
numbers = numbers.sort((x, y) => x - y);
let answer;
let count = 0;
let start = numbers[0];
while (count < 3) {
    if (start % numbers[0] == 0) {
        count += 1;
    }
    if (start % numbers[1] == 0) {
        count += 1;
    }
    if (start % numbers[2] == 0) {
        count += 1;
    }
    if (start % numbers[3] == 0) {
        count += 1;
    }
    if (start % numbers[4] == 0) {
        count += 1;
    }
    if (count >= 3) {
        answer = start;
        break;
    } else {
        count = 0;
        start = start + 1;
    }
}
print(answer);
