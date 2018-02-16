const [n, k] = gets().split(' ').map(Number);
const seq = gets().split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i += 1) {
    arr.push(i);
}
for (let i = 0; i < seq.length; i += 1) {
    let numb = seq[i];
    let ind = arr.indexOf(numb);
    let newIndex;
    if (numb % 2 != 0) {
        newNumber = numb * 2;
        if (newNumber > arr.length - 1) {
            newNumber = arr.length;
        }
        newIndex = arr.indexOf(newNumber);
        if (newIndex >= arr.length) {
            newIndex = arr.length - 1;
        }

    } else {

        newNumber = numb / 2;
        newIndex = arr.indexOf(newNumber);
    }

    if (newIndex == ind) {
        continue;
    }
    arr.splice(newIndex + 1, 0, numb);
    if (ind > newIndex) {
        arr.splice(ind + 1, 1);
    } else {
        arr.splice(ind, 1);
    }
    // print(arr);

}
print(arr.join(' '));
