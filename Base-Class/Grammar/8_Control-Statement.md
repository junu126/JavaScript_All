# Q : 자바스크립트의 제어문은 무엇이 있나요?

> A : 자바스크립트에서는 `if( ) { ... }`문과, `switch( ) { ... }`문이 있습니다.

자바스크립트도 여러 언어들과 마찬가지로 제어문을 사용할 수 있습니다. 제어문의 종류에는 참과 거짓을 나누는 로직을 갖고있는 `if문`과 어느 한 값에 따라 case문이 실행되는 `switch문`으로 구성됩니다.

## if문
if문은 다음과 같은 형태로 생겼습니다.
```javascript
if (조건) {
  실행될 문.
} else if (조건) {
  실행될 문.
} else {
  실행될 문.
}
```
위의 코드중 `조건`에는 말 그대로 `>`, `<`,`<=`, `>=`, `=`, `==`, `===`등을 이용한 조건이 들어갑니다. 다음은 if문의 예시입니다.
```javascript
let a = 5;

if ( a > 5 ) {
  console.log('a 는 5보다 큽니다.');
} else if ( a === 5 ) {
  console.log('a 는 5입니다.');
} else {
  console.log('a 는 5보다 작습니다.');
}
// 'a 는 5입니다.'
```
위의 코드는 a를 기준으로 조건을 갖습니다. a가 5보다 크다면 'a 는 5보다 큽니다.'를 출력할 것 이고, a가 5일 경우에는 'a 는 5입니다.'를 출력할 것 입니다. 또 아무런 경우에도 해당이 없다면 'a 는 5보다 작습니다.'를 출력할 것 입니다.

## switch문
switch문은 다음과 같은 형태로 생겼습니다.
```javascript
switch (조건변수) {
  case 값1: 실행될 문.
    break;
  case 값2: 실행될 문.
    break;
  case 값3: 실행될 문.
    break;
  case 값4: 실행될 문.
    break;
  default: 실행될 문.
}
```
Switch문은 조건변수의 값이 case의 값과 일치할 때 그 동작을 실행합니다. 또한 case마지막에 `break;`문을 넣어줬는데, break가 없다면 case문이 끝나지 않은채로 다음 case문으로 넘어가기 때문입니다. 이를 잘 이용해서 2개의 case문이 실행되게 하는 경우도 있습니다. 또 마지막에 `defalut`문을 사용했는데, default는 if문의 else와 같은 의미입니다.

다음은 예제입니다.
```javascript
let a = 5;

switch (a) {
  case 1 : console.log('a 는 1입니다.');
    break;
  case 2 : console.log('a 는 2입니다.');
    break;
  case 3 : console.log('a 는 3입니다.');
    break;
  case 4 : console.log('a 는 4입니다.');
    break;
  case 5 : console.log('a 는 5입니다.');
    break;
  default: console.log('a 는 5이상입니다.')
}
// 'a 는 5입니다.'
```
이와 같이 a가 5인 case문이 실행되는 것을 확인할 수 있습니다.