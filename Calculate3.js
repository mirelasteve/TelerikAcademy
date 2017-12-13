
/*
Count the number of combinations
*/

let N = +gets();
let x = +gets();
const fact = (m) => {
    if (m == 0 || m == 1) {
        return 1;
    }
    return m * fact(m - 1);
}
let up = fact(N);
let down = fact(x);
let upDown = fact(N - x);
let product = up / (down * upDown);
print(Math.round(product));
quit(0);
