# Q : 자바스크립트의 비구조화 할당은 어떨때 쓰이나요?

> A : 자바스크립트에서 구조화된 데이터를 변수로 받기 위해 사용합니다.

자바스크립트의 문법은 크게 ES5와 ES6로 나눌 수 있습니다. ES6는 ECMAscript의 6번째 에디션입니다. 지금까지 ES5문법에서 비구조화를 표현하기 위해서는 복잡한 과정을 치러야 했습니다. 다음은 ES5에서의 비구조화 하는 방식입니다.
```javascript
// browser
var data = $('body').data(), // data has properties house and mouse
  house = data.house,
  mouse = data.mouse

// Node.js
var jsonMiddleware = require('body-parser').json

var body = req.body, // body has username and password
  username = body.username,
  password = body.password
```
한눈에 알아보기도 힘들고, 무엇보다 복잡한 코드가 생성됩니다. 이러한 불편함을 막기위해 생겨난 ES6의 문법인 비구조화 할당! 다음은 그 예시입니다.
```javascript
var {house, mouse} = $('body').data() // we'll get house and mouse variables

var {jsonMiddleware} = require('body-parser')

var {username, password} = req.body
```
첫번째 라인에서 house와 mouse를 괄호로 감싼 후 값을 지정해줍니다. 이 의미는 
```javascript
var house = $('body').data();
var mouse = $('body').data();
```
와 같은 의미입니다. 이와 같이 간단한 방식으로 비 구조화 시킬 수 있습니다.

지금까지 위의 경우는 구조화 시킬 것이 구조화된 데이터일 경우입니다. 다음은 구조화 시킬 것이 배열일 경우입니다. 배열일 경우에는 중괄호로 표현하지 않고 배열을 선언할 때 사용하는 대괄호를 이용합니다.
```javascript
var [house, mouse] = $('body').data() // we'll get house and mouse variables

var [jsonMiddleware] = require('body-parser')

var [username, password] = req.body
```

비구조화 할당의 개념은 고급개념에 해당된다고 생각합니다. 무엇보다 ES5를 아직 잘 모르시는 여러분에게는 말이죠. 나중에 기회가 되면 ES6문법을 공부해보시는 것을 추천합니다. :D