let seq = [];
seq[0] = +gets();
seq[1] = +gets();
seq[2] = +gets();
let n = +gets();
for (let i = 3; i <= n; i += 1) {
    seq[i] = seq[i - 3] + seq[i - 2] + seq[i - 1];
}
print(seq[n - 1]);
quit(0);
