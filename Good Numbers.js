/*

*/
let data=gets().split(' ')
let a = data[0]*1;
let b = data[1]*1;
let counter = 0;
for (let i = a; i <= b; i += 1) {
        let ch = i.toString();
    for (let j = 0; j < ch.length; j += 1) {
        let rem = ch % ch[j];
        if (rem != 0 && ch[j] != 0) {
            break;
        } else if (j == ch.length - 1) {
            counter += 1;
        }
    }
}
print(counter);
quit(0);
