let a = +gets();
let b = +gets();
let c = +gets();
const lines = +gets();
let arr = [a, b, c];
let counter = 0;
let prev = 1;
let next = 1;
let arrLines = lines * lines;

const generateTribonacciNumbers = (a, b, c, prev) => {
    if (counter >= arrLines) {
        return;
    }
    let d = a + b + c;
    arr.push(d);
    a = b;
    b = c;
    c = d;
    counter += 1;

    generateTribonacciNumbers(a, b, c, prev);
}
generateTribonacciNumbers(a, b, c, prev);


let ind = 1;
let res = arr.splice(0, ind);
while (res.length <= lines) {
    print(res.join(' ').trim());
    ind += 1;
    res = arr.splice(0, ind);
}

quit("0");
