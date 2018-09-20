# Q : 세미콜론을 붙일까요?

> A : 세미콜론 붙입니다!

자바스크립트는 코딩을 하면서 세미콜론을 꼭 찍지 않아도 됩니다. 그 이유는 자바스크립트는 세미콜론이 없는 라인을 만나면 컴파일상황에서 자동세미콜론 삽입 규칙에 따라 세미콜론을 뒤에 붙여줍니다. 하지만 복잡한 코드 상에서 자바스크립트가 줄바꿈을 잘못 해석한다면, 불상사가 발생합니다...  

그렇기 때문에 자바스크립트에서는 세미콜론을 붙이는 것을 지향합니다.

다음은 변수선언 및 반복문의 세미콜론 예 입니다.
```javascript
// 좋지 않은 세미콜론
const luke = {}
const leia = {}
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader';
})

// 좋은 세미콜론
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader';
});
```

다음은 스코프에서의 세미콜론 예 입니다.
```javascript
// 좋지 않은 세미콜론
const reaction = "No! That's impossible!"
(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}())

// 좋은 세미콜론
const reaction = "No! That's impossible!";
(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}());
```

다음은 함수에서의 세미콜론 예 입니다.
```javascript
// 좋지 않은 세미콜론
function foo() {
  return
    'search your feelings, you know it to be foo'
}

// 좋은 세미콜론
function foo() {
  return
    'search your feelings, you know it to be foo';
}
```