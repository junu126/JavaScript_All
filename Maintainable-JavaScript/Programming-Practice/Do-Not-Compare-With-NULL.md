# NULL 비교 금지

변수에 필요한 값이 할당되었는지 확인할 때 null과 비교하는 방법은 흔히 잘못 사용하는 패턴입니다.
```javascript
const Controller = {
  process : (items) => {
    if (items !== null) { // bad
      items.sort();
      items.forEach((item) => {
        // do something
      });
    }
  }
};
```
위 코드는 process() 메서드의 items 변수에 sort()와 forEach()를 사용하는 것을 보아 items 변수가 배열이라는 전제하에 작성한 코드인 것을 알 수 있습니다. 코드의 의도는 명확하지만, items변수가 배열이 아니라면 로직을 수행할 수 없습니다. 이 코드는 변수값이 null인지 확인은 하고 있지만, 에러를 막기에는 부족한 문제가 있습니다. items변수에는 1이라는 값도, 문자열도, 그 외 어떤 객체든지 올 수 있습니다. 이러한 값은 문법적으로는 null이 아니어서 process()메서드 에서 sort() 메서드를 호출하면 에러가 발생합니다.

변수를 단순히 null과 비교하면 변수 값에 댛나 정보가 부족해 로직을 계속 진행해도 안전한지 알 수 없습니다. 하지만 자바스크립트에 있는 변수에 어떤 값이 할당되어있는지 확인하는 방법을 통해 해결할 수 있습니다.

## 4.1 기본 데이터 타입 알아내기

자바스크립트에는 문자열, 숫자, 불린, null, undefined 총 5개의 기본 데이터 타입이 있습니다. 기대하는 값이 null을 제외한 데이터 타입이라면 typeof 연산자를 사용합니다.
- typeof를 문자열에 사용하면 `string`을 반환합니다.
- typeof를 숫자에 사용하면 `number`를 반환합니다.
- typeof를 불린에 사용하면 `boolean`을 반환합니다.
- typeof를 undefined에 사용하면, `undefined`를 반환합니다.

typeof 문법은 다음과 같습니다.
```javascript
typeof variable;

// 또는

typeof(variable);
```
이 방법은 자바스크립트에서 문법상 유효하지만, typeof 연산자가 자칫 함수로 보일 수 있기 때문에 괄호 없이 사용하는 것이 옳습니다.