# 사용자 에러 던지기

자바스크립트에서 에러를 발생시키는 것도 능력이 필요합니다. 에러를 어디에 발생시켜야 좋을지 감을 잡으려면 경험이 있어야 하지만 일단 감을 잡으면 디버깅하는 시간이 줄어들고 자신이 짠 코드를 보며 느끼는 만족도 높아집니다.

## 5.1 에러의 본질
프로그래밍 에러는 예상치 못하게 발생합니다. 함수에 잘못된 값을 전달하거나 산술 연산에 잘못된 연산자를 입력해 발생하기도 합니다. 프로그래밍 언어는 코드가 정해진 기본 규칙에서 벗어나면 개발자에게 코드를 수정하라는 의미로 에러를 발생시킵니다. 만약 에러가 발생하지 않는다면 디버깅은 거의 불가능해 집니다. 에러 수정은 고사하고 문제 발생을 알아차리기까지 한참이 걸릴 수 있습니다. 이러한 의미에서 본다면 에러는 개발자의 적이 아니라 오히려 도움이 되는 친구입니다.

그러나 에러가 예상치 못한 때에 예상치 못한 곳에서 발생하면 문제가 됩니다. 게다가 무엇이 잘못되었는지 파악하기에는 기본 에러 메시지 내용이 너무 간단합니다. 특히 오래된 버전의 IE에서는 더 심각한데 자바스크립트 에러 메시지는 기본적으로 너무 함축적이고 아리송해서 문제 해결에 도움이 되지 않습니다. 만약 에러 메시지가 '이러이러한 문제가 발생해 함수 실행에 실패했습니다.' 라고 상세하게 알려준다면 디버깅하기가 훨씬 수월해 질 겁니다. 여기서 '수월해진다'는 점이 바로 사용자 정의 에러의 장점입니다.

사용자 에러를 발생시킬 때는 자바스크립트에서 언제 에러가 발생하는지를 생각해보면 도움이 됩니다. 코드 모든 곳에 에러가 발생할 수 있다라고 생각하기 보다는 에러가 발생할만한 곳을 찾는 것이 더 쉽습니다. 이는 코드를 짤 때만이 아니라 제품을 디자인할 때도 많이 사용하는 방식입니다.

## 5.2 에러 던지기
자바스크립트는 특성상 디버깅이 힘들어 에러를 던지는 것은 다른 언어에서보다 더 가치 있는 기능입니다. throw 연산자에 에러로 던질 객체를 넣으면 에러를 발생시킬 수 있습니다. 어느 타입의 객체든 에러로 던질 수 있지만, 보통 Error 객체를 가장 많이 사용합니다.
```javascript
throw new Error('뭔가 나쁜 일이 일어났어요.');
```
기본 내장된 Error 타입은 모든 자바스크립트 구현체에서 사용할 수 있고 Error의 생성자는 에러 메시지를 인자로 받습니다. 하지만 이 방법으로 에러를 발생시키면 try...catch 문으로 에러를 잡을 수 없을 뿐만 아니라 브라우저는 다른 일반적인 에러를 처리하듯이 메시지 값을 보여주기만 합니다.

많은 브라우저에 콘솔 창이 있어 에러가 발생하면 콘솔 창에 에러 정보를 표시합니다. 즉 우리가 던지는 에러는 브라우저에서 던지는 에러와 똑같이 처리됩니다.

경험이 부족한 개발자는 다음 예제처럼 문자열을 이용해 에러를 던지기도 합니다.
```javascript
// 나쁜 예
throw 'message';
```
이렇게 에러를 던질 수도 있지만, 모든 브라우저가 우리가 예상한 대로 에러를 처리하지는 않습니다. 파이어폭스, 오페라, 크롬은 'uncaught exception'이라는 메시지와 함께 예외를 던질 때 입력한 문자열을 보여줍니다. 그러나 사파리와 IE에서는 'uncaught exception'이라는 메시지만 보여줄 뿐 예외를 던질 때 입력한 문자열을 보여주지 않아 디버깅할 때 전혀 도움이 되지 않습니다.

물론 원한다면 어떤 타입의 데이터든 에러로 던질 수 있으며 특정 데이터 타입을 던지면 안 된다는 규칙은 없습니다.
```javascript
throw { name : 'junu' }
throw true;
throw 12345;
throw new Date();
```
여기서 반드시 기억할 것은 try...catch 문으로 에러를 처리 하지 않는 한, 어떤 값을 에러로 던져도 에러가 발생한다는 점입니다. 파이어폭스, 오페라, 크롬은 에러 메시지를 논리적으로 표시하기 위해 에러를 던질 때 입력한 값을 인자로 String()을 호출해 반환된 값을 콘솔에 출력하지만, 사라피, IE에서는 String()을 따로 호출하지 않습니다. 브라우저마다 에러 표시 방법이 다르지만 모든 브라우저에서 확실하게 사용자 에러 메시지를 보여주는 방법은 Error 객체를 사용하는 것 입니다.

## 5.3 에러를 던지면 좋은 점
사용자 에러를 던지면 브라우저에서 정확한 메시지를 확인할 수 있습니다. 에러가 발생한 줄과 열만 표시되는 것이 아니라 빠르고 정확한 디버깅을 위한 어떠한 정보든지 포함할 수 있습니다. 에러 메시지에 에러가 발생한 함수명과 에러 발생 이유를 넣을 것을 권장합니다.
```javascript
function getDivs(element) {
  return element.getElementsByTagName('div');
}
```
이 함수는 요소 하위에 있는 모든 div 요소를 반환합니다. DOM처리에 관련된 함수를 호출 할 때 반드시 값을 인자로 넘겨야 하지만 null 값이 전달되는 일이 매우 많습니다. 이 함수에 null이 전달되면 어떤 일이 벌어질까요? null이 전달되면 에러가 발생하고 우리는 'object expected'라는 애매한 메시지를 보게 됩니다. 그리고 실행 스택을 보며 문제가 발생한 소스코드가 어디인지 찾아야 합니다. 하지만 에러를 던지면 디버깅이 더욱 쉬워집니다.
```javascript
function getDivs(element) {

  if (element && element.getElementsByTagName) {
    return element.getElementsByTagName('div');
  } else {
    throw new Error('getDivs() : Argument must be a DOM element.');
  }
}
```
이제 getDivs() 함수는 요소가 조건에 맞지 않으면 에러 발생 이유가 정확하게 담겨있는 에러를 던지게 됩니다. 그러면 우리는 브라우저 콘솔에 표시된 에러를 보고 어디서 디버깅을 시작해야 하는지를 쉽게 찾을 수 있고 DOM요소를 가져오는 함수에서 null을 반환한 것이 에러의 원인임을 파악할 수도 있습니다.

이런점에서 볼때, 에러를 던지는 것은 자신을 위해 실패 원인을 메모로 남기는 것과 같습니다.

## 5.4 에러는 언제 던져야 할까
에러를 던지는 방법도 각양각색입니다. 공격적으로 에러를 정말 많이 던지거나, 너무 던지지 않는 방법은 옳바른 방법이 아닙니다. 실행 중 실패하거나 에러가 발생할 여지가 있는 곳을 찾는 것이 핵심입니다. 즉 에러가 이미 발생한 곳에서만 에러를 던집니다.

모든 자바스크립트 라이브러리는 외부에서 접근 가능한 공개 인터페이스를 작성할 때, 예측할 수 있는 모든 에러 발생 상황에서 에러를 던지도록 코드를 작성해야 합니다. jQuery, Yui, Dojo와 같은 큰 규모의 라이브러리에서는 우리가 언제, 어디서 함수를 호출할지 모든 경우의 수를 예측하는 건 불가능합니다. 그래도 사용자가 무엇이 잘못되엇는지 원인을 찾으려 라이브러리 코드까지 디버깅하는 일은 없어야 하기에 우리가 '삽질'을 하고 있으면 라이브러리는 우리가 잘못하고 있다고 알려주어야합니다. 에러의 호출 스택은 라이브러리의 인터페이스에서 끝나야지 더 깊게 들어가서는 안 됩니다. 예를 들어 호출 스택은 라이브러리의 인터페이스에서 끝나야지 더 깊게 들어가서는 안 됩니다. 예를 들어 호출 스택이 라이브러리 함수에서만 12단계에 걸쳐있는 것만큼 나쁜 것도 없습니다. 라이브러리 개발자는 이러한 일이 일어나지 않도록 방지할 책임이 있습니다.

다음은 에러를 던질 때 추천하는 방법입니다.

- 디버깅 하기 어려운 에러를 수정하면 거기에 사용자 정의 에러를 추가하십시오. 문제가 다시 발생하면 해결하는 데 큰 도움이 됩니다.
- 코드를 작성할 때, 발생하면 안 된다고 생각하는 일이 발생하면 에러를 던집니다.
- 모르는 사람이 사용할 코드를 작성할 때는 함수를 잘못 사용할 수 있는 경우를 생각해보고 그 경우에 에러를 던지도록 코드를 작성합니다.

에러를 던지는 목표는 에러를 막는 것이 아니라 에러가 발생하면 더욱 편하게 디버깅하는데 있습니다.

## 5.5 에러 타입
ECMA-262에서는 총 7가지 타입의 에러 객체를 정했습니다. 에러 객체는 다양한 에러 조건이 나타나면 자바스크립트 엔진에서 사용하거나 우리가 직접 만들 수도 있습니다.

**Error**  
&nbsp;&nbsp;&nbsp;&nbsp;모든 에러의 기본 타입입니다. 엔진에서 이 타입의 에러는 발생하지 않습니다.

**EvalError**  
&nbsp;&nbsp;&nbsp;&nbsp;eval()에서 실행한 코드에 실행 중 에러가 있으면 이 타입으로 에러가 발생합니다.

**RangeError**  
&nbsp;&nbsp;&nbsp;&nbsp;숫자가 범위를 벗어나면 이 타입의 에러가 발생합니다. 예를 들어 -20개의 요소를 가진 배열을 생성하려고 `new Array(-20)`이라 하면 RangeError가 발생합니다. 정상적으로 실행된다면 거의 발생하지 않는 에러입니다.

**ReferenceError**  
&nbsp;&nbsp;&nbsp;&nbsp;사용하려는 객체를 사용할 수 없을 때 발생합니다. 예를 들어 null을 참조하는 변수에서 메서드를 호출하면 발생합니다.

**SyntaxError**  
&nbsp;&nbsp;&nbsp;&nbsp;eval()에 전달한 코드가 문법상 문제가 있으면 발생합니다.

**TypeError**  
&nbsp;&nbsp;&nbsp;&nbsp;변수가 알 수 없는 타입일 때 발생합니다. 예를 들어 `new 10` 또는 `'prop' in ture` 같은 코드를 실행할 때 발생합니다.

**URIError**  
&nbsp;&nbsp;&nbsp;&nbsp;잘못된 형식의 URI 문자열이 encodeURI, encodeURIComponent, decodeURI, decodeURIComponent에 전달되면 발생합니다.