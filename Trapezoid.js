const n = +gets();
const width = 2 * n;
const height = n + 1;

let field = '.'.repeat(n) + '*'.repeat(n);
print(field);
for (let i = 0; i < height - 1; i += 1) {
    if (i == height - 2) {
        print('*'.repeat(width));
    }
    if (n - i - 1 != 0) {
        print('.'.repeat(n - i - 1) + '*' + '.'.repeat(n - 1 + i) + '*');
    }
}
quit(0);
