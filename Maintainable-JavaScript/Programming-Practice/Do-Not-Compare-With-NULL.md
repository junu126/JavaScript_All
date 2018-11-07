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

```javascript
// string 찾는 법
if (typeof name === 'string') {
  anotherName = name.substring(3);
}

// number 찾는 법
if (typeof count === 'number') {
  updateCount(count);
}

// boolean 찾는 법
if (typeof found === 'boolean' && found) {
  message('Found!');
}

// undefined 찾는 법
if (typeof MyApp === 'undefined') {
  MyApp = {
    // code
  };
}
```

typeof 연산자는 선언되지 않은 변수에 사용해도 에러가 발생하지 않습니다. 선언한 변수이든, 선언하지 않은 변수이든 값이 undefined이면 둘 다 'undefined'로 반환합니다.

### 4.1.1 null
기본 데이터 타입에서 마지막으로 다룰 타입은 null 입니다. null은 변수에 값이 할당되었는지 확인할 때 사용하면 안됩니다. 8장을 시작할 때 말했듯이, 단순히 변수를 null 값으로만 비교하면 무슨 값을 원하는지 알 수 없습니다. 단, null 비교가 허용되는 예외 사항이 있는데 기대하는 값이 정말 null이라면 null을 직접 사용해도 됩니다. `기대하는 값이 null이다` 라는 말의 의미는 이벤트가 실행됬을 때 변수의 값을 null로 바꾸거나, 이용하는 경우를 말합니다. 이때 null 값과 비교할 때는 반드시 비교 연산자로 === 또는 !==을 사용해야 합니다.

null 인지 테스트 해야할 때는 아래의 방법으로 비교해야 합니다.
```javascript
const element = document.getElementById('my-div');

if (element !== null) {
  element.className = 'found';
}
```
조건에 맞는 DOM 요소가 없으면 `document.getElementById()`메서드는 실제로 null을 반환합니다. 이 메서드는 확실히 null을 반환하거나 요소를 반환합니다. null은 기대하던 값중 하나이므로 !== 연산자를 사용해 null과 비교해도 됩니다.

## 4.2 객체 참조 타입 알아내기
참조 값을 객체라고도 합니다. 자바스크립트에서 기본 데이터 타입이 아닌 모든 값은 참조 타입입니다. 참조 타입 중에는 Object, Array, Date, Error가 있습니다. typeof 연산자는 참조 값에는 거의 사용하지 않는데 그 이유는 어떤 타입의 객체든지 typeof 연산자를 사용하면 'object'라는 문자열만을 반환하기 때문입니다.
```javascript
console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'
console.log(typeof new Date()); // 'object'
console.log(typeof new RegExp()); // 'object'
```
또 다른 이유는 typeof를 null에 사용해도 'object'를 반환하기 때문입니다.
```javascript
console.log(typeof null); // 'object'
```
이 문제는 자바스크립트 명세서 상의 심각한 버그로 여겨지기도 했지만 이런 탓에 typeof 연산자로는 null을 정확히 구분하기 어렵습니다.

참조 타입이 무엇인지 판단하려면 instanceof 연산자를 사용합니다. instanceof의 기본 문법은 다음과 같습니다.
```javascript
값 instancof 생성자명
```
코드는 다음과 같이 작성합니다.
```javascript
// Date 객체인지 확인
if (value instanceof Date) {
  console.log(value.getFullYear());
}

// RegExp 객체인지 확인
if (value instanceof RegExp) {
  if (value.test(anotherValue)) {
    console.log('Matches');
  }
}

// Error 객체인지 확인
if (value instanceof Error) {
  throw value;
}
```
instancof에서는 흥미롭게도 객체를 생성할 때 사용한 생성자뿐만 아니라 프로토타입 체인도 같이 검사합니다. 프로토타입 체인에는 객체를 정의할 때 사용한 상속 패턴에 대한 정보가 담겨있습니다. 예를 들어 모든 객체는 Object를 기본적으로 상속받으므로 어떠한 객체든지 instanceof Object를 사용하면 true 값을 반환합니다.

```javascript
const now = new Date();

console.log(now instanceof Object); // true
console.log(now instanceof Date); // true
```
이 때문에 특정 타입을 구별할 때 instanceof Object를 사용하면 무슨 타입인지 알 수 없습니다. instanceof 연산자는 다음 예제처럼 우리가 직접 정의한 사용자 정의 타입에서도 사용할 수 있습니다.
```javascript
function Person(name) {
  this.name = name;
}

const me = new Person('JunWoo');

console.log(me instanceof Object);  // true
console.log(me instanceof Person);  // true
```
예제는 사용자 정의 타입 Person을 생성합니다. 변수 me는 Person의 인스턴스이므로 me instaceof Person은 true입니다. 이전에 언급했듯이 모든 객체는 Object의 인스턴스이므로 me instaceof Object도 true가 됩니다.

자바스크립트에서 사용자 정의 타입을 구분할 때는 instanceof 연산자를 사용하는 것이 가장 좋으면서도 유일한 방법입니다. 이 방법은 자바스크립트의 내장 타입을 구분할 때도 사용하면 좋습니다. 하지만 한 가지 제약사항이 있습니다.

어느 브라우저의 프레임 A에서 가지고 있던 객체를 프레임 B에 넘기는 상황을 가정해봅시다.  
두 프레임 모두 생성자 함수 Person이 정의되어 있습니다. 프레임 A에 있는 객체가 프레임 A에서 정의된 Person의 인스턴스라면 다음 예제처럼 동작합니다.
```javascript
// true
frameAPersonInstace instanceof frameAPerson

// false
frameAPersonInstace instanceof frameBPerson
```
각 프레임에는 그 프레임만의 Person 객체가 있어 Person에 대한 정의가 완벽히 똑같아 하더라도 해당 프레임에서 생성된 Person의 인스턴스가 아니라면 false를 반환합니다.

이 문제는 사용자 정의 타입뿐만 아니라, 중요 내장 타입인 function과 array에서도 발생합니다. 따라서 이 두 타입에는 instacneof 연산자를 아예 사용하지 않는 것이 좋습니다.

## 4.3 프로퍼티 알아내기
객체에 프로퍼티가 있는지 확인할 때 보통 null이나 undefined를 자주 사용합니다. 하지만 이러한 방법은 옳은 방법이 아닙니다.
```javascript
// 나쁜 예 : false값인지 확인.
if (object[propertyName]) {
  // 실행할 코드
}

// 나쁜 예 : null과 비교.
if (object[propertyName]) {
  // 실행할 코드
}

// 나쁜 예 : undefined와 비교.
if (object[propertyName]) {
  // 실행할 코드
}
```
위 코드는 조건문에서 해당 이름을 가진 프로퍼티가 있는지 검사하지 않고 프로퍼티의 값을 검사해서 프로퍼티에 저장된 값이 0, "", false, null, undefined처럼 false로 형 변환되는 값이라면 프로퍼티가 존재해도 조건문을 통과하지 못합니다. 프로퍼티 값이 null이나 undefined이면 세 개의 예제 모두 버그가 발생할 수 있는 코드입니다.

프로퍼티가 존재하는지 확인할 때는 in 연산자를 사용하는 것이 가장 좋습니다. in 연산자는 프로퍼티 값은 확인하지 않고 프로퍼티가 존재하는지만 검사해서 앞의 예제와 같은 버그는 발생하지 않습니다. in 연산자는 인스턴스에 존재하는 프로퍼티인지, 아니면 객체 프로토타입에서 상속받은 프로퍼티인지 여부는 따지지 않고 프로퍼티가 존재하면 true를 반환합니다.
```javascript
const object = {
  count : 0,
  related : null,
};

// 좋은 예
if ('count' in object) {
  // 여기가 실행됨
}

// 좋은 예
if ('related' in object) {
  // 여기가 실행됨
}

// 나쁜 예 : null과 비교
if (object.related != null) {
  // 여기가 실행되지 않음
}
```
상속받은 프로퍼티는 제외하고 객체 인스턴스에 프로퍼티가 있는지 검사하려면 hasOwnProperty() 메서드를 사용해야 합니다. Object를 상속받은 모든 자바스크립트 객체는 hasOwnProperty()메서드를 가지고 있습니다. 이 메서드는 인스턴스에 존재하는 프로퍼티만 true를 반환하고 프로토타입에 존재하는 프로퍼티는 false를 반환합니다. 여기서 주의할 점은 IE8 이하 버전의 DOM객체는 Object를 상속받지 않아 hasOwnProperty() 메서드가 없습니다. 이는 DOM 객체에 hasOwnProperty() 메서드를 사용하기 전에 일단 메서드가 있는지부터 확인해야 한다는 뜻입니다. DOM 객체가 확실히 아니면 확인하지 않아도 됩니다.

```javascript
// DOM 객체가 아닐 때는 이렇게 사용하는 것이 좋습니다.
if (object.hasOwnProperty('related')) {
  // 여기가 실행됨
}

// DOM 객체인지 확실하지 않을 때는 이렇게 사용하는 것이 좋습니다.
if ('hasOwnProperty' in object && object.hasOwnProperty('related')) {
  // 여기가 실행됨
}
```
가급적 in 연산자를 사용해서 객체의 프로퍼티를 확인하는 것이 좋습니다. 또 인스턴스의 프로퍼티인지 확인이 필요할 때만 hasOwnProperty() 메서드를 사용합니다. 값이 null인지 undefined인지 확인하고 싶을 때에는 '[스타일 가이드라인 - 기본포멧](https://github.com/junu126/JavaScript_All/blob/master/Maintainable-JavaScript/Style-Guide-Line/01_Basic-Format.md)'을 참고해주시면 됩니다.