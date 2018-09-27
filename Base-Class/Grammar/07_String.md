# Q : 자바스크립트의 String타입에는 어떠한 형태가 있을까요?

> A : 자바스크립트에서는 `''`방법과, `""`방밥과 ` `` `이 있습니다.

자바스크립트에서는 문자열을 3가지 방법으로 사용할 수 있습니다. 
1. 작은 따옴표 : ` ' ' `
2. 큰 따옴표 : ` " " `
3. 템플릿 문자열 : ` `` `

이러한 방법이 있지만 자바스크립트의 스타일로는 작은따옴표를 사용하기를 권장합니다.

```javascript
// 좋지 않은 사용
let msg = "자바스크립트는 위대하다!";

// 좋지 않은 사용
let msg = `자바스크립트는 위대하다!`;

// 좋은 사용
let msg = '자바스크립트는 위대하다!';
```

## 템플릿 문자열
프로그래밍을 많이 접하지 않은 여러분은 템플릿 문자열이 생소하실 것 입니다. 템플릿 문자열은 키보드 자판의 ~모양을 클릭하면 나오는 따옴표인데요, 템플릿 문자열은 주로 프로그램을 짜다가 나오는 상황에서 사용됩니다. 왜냐하면 ``사이에 `${}`의 형태를 사용해서 변수나, 함수들을 포함시킬 수 있기 때문입니다.
```javascript
let a = '위대';

let msg = `자바스크립트는 ${a}하다!`;
console.log(msg);
// 자바스크립트는 위대하다!
```

또한 자바스크립트에서는 문자열이 100자가 넘을때에도 문자열 연결을 이용하지 말라고 합니다. 무슨 의미인지 궁금하시죠? 자바스크립트에서는 문자열을 쪼개고 `+` 또는 `\(역슬래시)`를 통해 문자열을 연결 할 수 있습니다. 예제를 통해 확인해보죠.

```javascript
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';
```

다음과 같이 사용할 수 있습니다. 하지만 위의 예제는 잘못된 예제입니다. 100자가 넘는다고해서 연결을 사용하시면 안됍니다. 다음은 옳바른 예제입니다.

```javascript
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```