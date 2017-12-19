const width = +gets();
const height = width * 2 - 1;
let forest = '.'.repeat(width - 1);
way = '*' + forest;
print(way);

let mirror = [];
mirror[0] = way;
for (let i = 1; i < width; i += 1) {
    let check = '.'.repeat(i);

    let res = check + forest.replace(check, '*');
    print(res);
    mirror.push(res);
    let resLen = res.length - 1;
    if (res[resLen] === '*') {
        for (let el = mirror.length - 2; el >= 0; el -= 1) {
            print(mirror[el]);
        }
    }
}
quit(0);
