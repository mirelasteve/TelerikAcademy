const bin = gets();
const binConvert = [];
let start = bin.length - 4;
let end = bin.length;
for (let i = 0; i < bin.length; i += 4) {
    let a = bin.slice(start - i, end - i);
    if (a) {
        binConvert.push(a);
    }
}
const convertBinLen = 4 * binConvert.length;
let last = bin.length - convertBinLen;
if (last > 0) {
    binConvert.push('0'.repeat(last) + bin.slice(0, last));
}
let result = '';
let workBin = binConvert.reverse();
for (let i = 0; i < workBin.length; i += 1) {
    let binE = workBin[i];
    let p = '';
    switch (binE) {
        case '0000':
            p += 0;
            break;
        case '0001':
            p += 1;
            break;
        case '0010':
            p += 2;
            break;
        case '0011':
            p += 3;
            break;
        case '0100':
            p += 4;
            break;
        case '0101':
            p += 5;
            break;
        case '0110':
            p += 6;
            break;
        case '0111':
            p += 7;
            break;
        case '1000':
            p += 8;
            break;
        case '1001':
            p += 9;
            break;
        case '1010':
            p += 'A';
            break;
        case '1011':
            p += 'B';
            break;
        case '1100':
            p += 'C';
            break;
        case '1101':
            p += 'D';
            break;
        case '1110':
            p += 'E';
            break;
        case '1111':
            p += 'F';
            break;
        default:
            break;
    }
    result += p.toString();
}
// if (result[0] === 'u') {
//     result = result.slice(8, );
// }
print(result);
