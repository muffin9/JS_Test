const a = (callback) => {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
};

const b = () => console.log(2);

a(() => {
    b();
});

const c = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 1000);
    });
};

const d = () => console.log(4);

// Promise에서 만들어진 인스턴스에서는 then이라는 메서드를 이어서 (메서드)체이닝 형식으로 활용할 수 있다.
c().then(() => {
    d();
});

const e = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(5);
            resolve();
        }, 1000);
    });
};

const f = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(6);
            resolve();
        }, 1000);
    });
};

const g = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(7);
            resolve();
        }, 1000);
    });
};

const h = () => console.log(8);

e().then(() => {
    f().then(() => {
        g().then(() => {
            h();
        });
    });
});

// Promise에서 만들어진 인스턴스에선 then이라는 메서드를 이어서 메서드 체이닝 형식으로 활용할 수 있다.
// 화살표 함수는 return 키워드가 바로 나오면 중괄호가 return 키워드를 생략할 수 있으므로

e()
    .then(() => {
        return f();
    })
    .then(() => {
        return g();
    })
    .then(() => h());

e()
    .then(() => f())
    .then(() => g())
    .then(() => h());

// Promise에서 resolve는 하나의 함수 데이터만 받으면 된다.

e()
    .then(f)
    .then(g)
    .then(() => {
        h();
    });
