function nQueen(n) {

    let not_j = {},
        not_p = {},
        not_m = {},
        range = [...Array(n)].map((_, i) => i + 1);
    const isPossible = (y, x) => !(not_j[x] || not_p[x - y] || not_m[x + y]);
    const set = (y, x, isStart = true) => not_j[x] = not_p[x - y] = not_m[x + y] = isStart;


    go(1);
    return result;

    function go(y) {
        let possible = range.filter(x => isPossible(y, x));

        if (y === n) return result = result + possible.length;

        possible.forEach(x => {
            set(y, x);
            go(y + 1);
            set(y, x, false);
        })
    }
}

const assert = require('assert').strictEqual;

assert(0, nQueen(3));
assert(4, nQueen(6));