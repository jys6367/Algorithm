function parenthesisCase(n) {
    let list = Array.from(new Array(n + 1)).map(() => [1, ...new Array(n).fill(0)]);

    for (let i = 1; i < list.length; i++) {
        for (let j = 1; j <= i; j++) {
            let value = list[i][j - 1] + list[i - 1][j];
            list[i][j] = value % 10007
        }
    }

    return list[n][n];
}


const assert = require('assert').strictEqual;
assert(5, parenthesisCase(3));