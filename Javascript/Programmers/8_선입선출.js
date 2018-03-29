function getCoreNumber(n, core) {
    let list = [...core].map(() => 0);
    let result = 0;
    while (n > 0) {
        for (let i = 0; i < core.length; i++) {
            if (list[i] > 0) {
                list[i]--;
                continue;
            }
            list[i] = core[i] - 1;
            result = i;
            n--;
        }
    }

    return result + 1;
}

//

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(2, "==", getCoreNumber(15, [1, 2, 6]));
console.log(2, "==", getCoreNumber(6, [1, 2, 3]));
console.log(3, "==", getCoreNumber(231251029, [13, 7, 13, 2, 3, 27]));
console.log(7, "==", getCoreNumber(227278056, [19, 17, 21, 21, 4, 2, 26, 7, 30, 24]));