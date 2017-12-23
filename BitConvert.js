const gets = this.gets || getGets(['2,1,0,2']);
let print = this.print || console.log;
let arr = gets().split(',').map(Number);
// print(arr);
const convertToBinary = (x) => {
    let rem;
    let ost = [];
    if (x == 0) {
        return ('0');
    } else if (x != 0) {
        while (x >= 1) {
            rem = x % 2;
            x = parseInt(x / 2);
            ost.push(rem);
        }
        let result = ost.reverse().join('');
        return (result);
    }
}
let convertArr = [];
for (let i = 0; i < arr.length; i += 1) {
    let toBinary = arr[i];
    toBinary = convertToBinary(toBinary);
    let len = toBinary.length;
    if (len < 8) {
        len = 8 - len;
        let adZeros = '0'.repeat(len);
        toBinary = adZeros + toBinary;
    }
    let minusDig = '';
    if (i % 2 == 0) {
        for (let j = 1; j < toBinary.length; j += 2) {
            minusDig += toBinary[j];

        }
    } else {
        for (let j = 0; j < toBinary.length; j += 2) {
            minusDig += toBinary[j];
        }
    }

    convertArr.push(minusDig);

}
print(convertArr.join(''));
