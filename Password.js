const datas = gets().split(' ');
let n = datas[0].split('');
n = n.reverse().join('');
let k = datas[1] * 1;
let password = (n / k) + (n % k);
print(Math.trunc(password));
