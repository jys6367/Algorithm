function change(total, coinList) {
    let cache = [1, ...Array.from(new Array(total), ()=>0)]
    coinList.sort();

    coinList.forEach(coin => {
        for (let i = coin; i <= total; i++)
            cache[i] = cache[i] + cache[i - coin];
    });

    return cache[total];

}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(change(5, [1, 2, 5]));





















