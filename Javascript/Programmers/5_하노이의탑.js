function get(n, a, b, c) {
    return n === 1
        ? [[a, b]]
        : get(n - 1, a, c, b)
            .concat([[a, b]])
            .concat(get(n - 1, c, b, a));
}

function hanoi(n, a, b, c) {
    return get(n, 1, 3, 2)

}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(hanoi(2));