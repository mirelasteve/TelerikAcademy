/*
Description
A long time age, in a galaxy far, far away...
All jedi must mediate. Yet, when the Jedi are at their temple, they cannot mediate at the same time, 
because the Force will become too much at one place and implosion will occur.
There is a strict order for meditations: Jedi Masters mediate first, then Jedi Knights, and last are the padawans.
Given the sequence of Jedi:
P, K, M, M, K, P
they will mediate in the following order:
M, M, K, K, P, P
given that M means a Jedi Master, K is a Jedi Knight, and P is a padawan.
Joro and Gosho are padawans. They want to have as much time with the Force as they can. 
Given that, they do not want to wait meaninglessly for mediation. That is why, you you help them 
solve in which order all Jedi will mediate.

*/


let m = +gets();
let M = [];

let jedis = gets().split(' ');
for (let i = 0; i < m; i += 1) {
    if (jedis[i][0] == 'M') {
        M.push(jedis[i]);
    }
}
for (let i = 0; i < m; i += 1) {
    if (jedis[i][0] == 'K') {
        M.push(jedis[i]);
    }
}
for (let i = 0; i < m; i += 1) {
    if (jedis[i][0] == 'P') {
        M.push(jedis[i]);
    }
}
print(M.join(' '));
