# Q : 자바스크립트의 비교연산자에는 무엇이 있나요?

> A : 자바스크립트는 `==`대신 `===`을 사용합니다 :D

## 사용
자바스크립트의 비교연산자는 여러 자료형에서 사용됩니다.
- Objects : `True`
- Undefined : `False`
- Null : `False`
- Booleans : `boolean형의 값`
- Nubmer : `True` 하지만 `0, NaN`의 경우에는 `False`로 평가
- String : `True` 하지만 `빈 문자열`의 경우에는 `False`로 평가

## 종류
자바스크립트의 비교연산자에는 `==`도 있고, `===`도 있고, `!=`도 있고, `!==`도 있습니다. 하지만 자바스크립트측에서는 `===`과 `!==`을 사용할 것을 적극 추천합니다. 

또 `삼항연산자`라고 하는 비교방법이 있습니다. 다음은 삼항연산자의 예시입니다.
```javascript
let a = false;

const Check = (a) => if(
  a ? console.log('a is True'); : console.log('a is False');
);

Check();
// a is False
```
위의 예시에서 삼항연산자를 사용할 때 `a ? ~ : ~`의 형식으로 사용했습니다. 이것이 삼항연산자를 사용하는 방법입니다. 삼항연산자는 정말 많은 경우에서 사용되기 때문에 JavaScript개발자가 되기 위해선 꼭 알아두어야 합니다.