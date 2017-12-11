const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets(['10,18,22,34,51,17,20,10,7,45,43,42,10,12,0,6']);
let print = this.print || console.log;
let listE = gets().split(',').map(Number);
const quickSort = (list) => {
    let left = [];
    let right = [];
    let pivot = list[0];
    if (list.length < 2) {
        return list;
    }
    for (let i = 1; i < list.length; i += 1) {
        if (list[i] < pivot) {
            left.push(list[i]);
        }
        if (list[i] >= pivot) {
            right.push(list[i]);
        }
    }
    return [].concat(quickSort(left), pivot, quickSort(right));

};
print(quickSort(listE));
