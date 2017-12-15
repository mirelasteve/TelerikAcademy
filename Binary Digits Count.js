let b = +gets();
let size = +gets();
while (size) {
    let j = +gets();
    let k = (j.toString(2)).split('');
    let counter = 0;
    k.forEach((x) => {
        if (x == b) {
            counter += 1;
        }
    });
    print(counter);
    size = size - 1;
}
quit(0);
