// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log(3);
// }, 1000);

// console.log(4);

// callback 패턴
const a = (callback) => {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
};

const b = (callback) => {
    setTimeout(() => {
        console.log(2);
        callback();
    }, 1000);
};

const c = (callback) => {
    setTimeout(() => {
        console.log(3);
        callback();
    }, 1000);
};

const d = () => console.log(4);

a(() => {
    b(() => {
        c(() => {
            d();
        });
    });
});
