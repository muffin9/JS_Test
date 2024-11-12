// 함수 선언문 - Declaration
// 함수 표현식 - Expression

// 함수 선언문
function fn() {}

// 함수 표현식
const fn2 = () => {};

// 함수 호이스팅: javascript에서 함수 선언문은 함수 호이스팅이 일어나지만, 함수 표현식은 일어나지 않는다.
// 자바스크립트 선언은 함수 선언을 코드의 실행 전에 "끌어 올려져" 처리하기 떄문에, 함수가 선언되기 전에 호출해도 에러가 발생하지 않는다.
//

hello();
// hello2();
function hello() {
    console.log("called hello func");
}

const hello2 = function () {
    console.log("이 함수는 함수 표현식으로 작성되었습니다.");
};
