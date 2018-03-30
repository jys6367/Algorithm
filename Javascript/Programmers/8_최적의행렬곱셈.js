function matrix(list) {
    let cache = Array.from(new Array(list.length), () => [...new Array(list.length)]);
    [...Array(list.length)].forEach((_, i) => cache[i][i] = 0);
    [...Array(list.length - 1)].forEach((_, i) => cache[i][i + 1] = list[i][0] * list[i][1] * list[i + 1][1])

    return get(0, list.length - 1);

    function get(start, end) {
        if (typeof cache[start][end] === 'number') return cache[start][end];

        let min;
        for (let i = start; i < end; i++) {
            let value = get(start, i) + get(i + 1, end) + (list[start][0] * list[i][1] * list[end][1]);
            min = min ? Math.min(min, value) : value;
        }

        cache[start][end] = min;
        return min;
    }
}

const assert = require('assert').strictEqual;

let list = [[5, 3], [3, 2], [2, 6]];
assert(90, matrix(list));
