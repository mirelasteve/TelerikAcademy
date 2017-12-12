/*

You are given a valid mathematical expression.

Extract the valid expressions, between brackets.
*/

let expr = gets();
let openArr = [];
for (let i = 0; i < expr.length; i += 1) {
    if (expr[i] == '(') {
        openArr.push(i);
    }
    if (expr[i] == ')') {
        let lastClose = i;
        let findLast = openArr.pop();
        print(expr.slice(findLast, lastClose) + ')');
    }
}
quit(0);
