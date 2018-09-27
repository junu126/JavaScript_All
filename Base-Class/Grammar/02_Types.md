# Q : 자바스크립트의 Type에는 무엇이 있나요?

> A : 값을 직접 조작하는 '원시형'과 참조를 통해 조작하는 '참조형'이 있습니다.

자바스크립트의 Type은 `원시형`과 `참조형`으로 나뉩니다.  

'원시형'에 접근하면 값을 직접 조작하게 됩니다.
- string
- number
- boolen
- null
- undefined
- symbol ( 완전한 pull과 response가 구현이 안되어있기 때문에 적절한 환경에서 시용해야합니다. )

다음은 사용 예시입니다.
```javascript
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar);  // => 1, 9
```
'참조형'에 접근하면 참조를 통해 값을 조작하게 됩니다.
- object(객체)
- array(배열)
- function(함수)

다음은 사용 예시입니다.
```javascript
const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```