const get = num => {
    if(num <= 10000000) return num;
    for (let i = Math.ceil(Math.sqrt(num)); i > 0; i--) {
        if (num % i === 0) return i;
    }
};

function numberBlock(begin, end) {
    return [...Array(end - begin + 1)]
        .map((_, i) => i + begin)
        .map(get);
}


console.log(numberBlock(99999999999990, 100000000000000));
























