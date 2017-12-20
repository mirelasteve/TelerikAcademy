const n = +gets();
let votes = [];
let count = 1;
let maxCount = 0;
let theNumber;
for (let i = 0; i < n; i += 1) {
    votes[i] = +gets();
}
votes.sort();
// print(votes);
let check = votes.filter((x, i = 0) => x == votes[i + 1]);
// print(check);
if (check[0] == 'undefined') {
    print(check[0]);
} else if (check.length == 1) {
    print(check[0]);
} else {
    for (let i = 0; i < check.length; i += 1) {
        if (check[i] == check[i + 1]) {
            count += 1;
        }
        if (check[i] != check[i + 1]) {
            if (maxCount < count) {
                maxCount = count;
                count = 1;
                theNumber = check[i];

            }
        }
    }
    print(theNumber);
}
