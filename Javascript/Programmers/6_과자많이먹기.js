function Man(cookie, count) {
    this.lastCookie = cookie;
    this.sum = 1 + (count || 0)
}

Man.prototype.canEat = function (cookie) {
    return this.lastCookie < cookie;
};

function eatCookie(cookies) {

    let manList = [];

    cookies.forEach(cookie => {
        let canEatList = manList.filter(man => man.canEat(cookie));
        let sum = canEatList.length
            ? Math.max.apply(undefined, canEatList.map(t => t.sum))
            : 0;

        let newMan = new Man(cookie, sum);
        manList.push(newMan);
    });


    return Math.max.apply(undefined, manList.map(t=> t.sum));
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(eatCookie([1, 4, 2, 6, 3, 4, 1, 5]));