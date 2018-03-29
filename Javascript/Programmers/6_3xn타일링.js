function tiling(n) {
    if(!n%2) return 0;

    let cache = [1, 0, 3];

    for (let i = 4; i <= n; i += 2) {
        let value = (cache[i - 2] * 3)
            + (cache.filter((_, j) => j % 2 === 0 && j <= i - 4)
                .reduce((v, r) => v + r) * 2)
        cache[i] = value  % 100000
    }

    return cache[n] || 0;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(tiling(2));




















