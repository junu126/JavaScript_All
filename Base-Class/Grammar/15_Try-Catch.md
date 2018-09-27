# Q : 자바스크립트의 예외처리는 어떻게 진행되나요?

> A : 자바스크립트에선 대표적으로 try catch문을 통해서 예외처리가 진행됩니다.

자바스크립트의 예외처리는 다른 언어들과 다르지 않습니다. 먼저 예외처리가 무엇인가에 대해 설명드리겠습니다.

## 예외처리
예외처리는 `프로그램이 실행되는 동안 문제가 발생할 때 대처할 수 있게 처리하는 것`입니다. 이때 예외는 프로그램 실행 중 발생하는 오류이고, 에러는 프로그래밍 언어의 문법적인 오류입니다.

예외처리에는 기본예외처리와 고급예외처리로 나눌 수 있습니다.

## 기본예외처리
기본적인 예의처리에는 if문의 `else if문`이 있습니다.

```javascript
if (node.addEventListener) { node.addEventListener(event, listener, false); // 파이어폭스, 크롬, 사파리, 오페라
} else if (node.attachEvent) { node.attachEvent('on' + event, listener); 
  // 익스 플로러
} // if
```

## 고급 예외 처리
고급 예외처리에는 try캐워드와, catch키워드, finally 키워드를 사용하여 예외를 처리합니다. try구문안에서 예외가 발생할 경우 catch문을 실행하는 형태입니다. finally문은 예외가 발생해도 작동하고, 발생하지 않아도 작동합니다. 꼭 존재하지 않아도 됩니다.

그리고 catch문에는 특별한 식별자가 존재합니다. 문법상 catch문의 괄호에는 `e`또는 `exception`식별자를 넣어줘야 합니다. 이 예외객체의 속성은 `message(예외 메세지)`, `description(예외 설명)`, `name(예외 이름)`으로 이루어집니다.

다음은 try catch문의 예시입니다.
```javascript
let a = 10;
try {
  console.log('try문 입니다.');  // 정상 작동
  a();  // 존재하지 않는 함수
  console.log('try문 종료');  // 위에서 예외가 발생해서 작동하지 않음
} catch (e) {
  console.log('예외처리 발생시 작동');
} finally {
  console.log('무조껀 작동');
}
```

예외를 억지로 발생시킬때는 `throw`문을 사용합니다. throw문을 사용하면 예외객체로 포함되게 됩니다. 다음은 그 예시입니다.
```javascript
if(true) {
  throw "Throw In The hole!";
} 
try {
  console.log('try문 입니다.');
  a();
  console.log('try문 종료');
} catch (e) {
  console.log('예외처리 발생시 작동');
  console.log(e); // "Throw In The hole!"
}