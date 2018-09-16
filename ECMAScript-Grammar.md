# ECMAScript 6 에 추가된 기능
## Arrows

Arrows(화살표) 함수는 => 문법을 사용하는 축약형 함수입니다. C#, Java 8, CoffeeScript의 해당 기능과 문법적으로 유사합니다. Arrows는 표현식의 결과 값을 반환하는 표현식 본문(expression bodies)뿐만 아니라 상태 블럭 본문(statement block bodies)도 지원합니다. 하지만 일반 함수의 자신을 호출하는 객체를 가리키는 dynamic this와 달리 arrows 함수는 코드의 상위 스코프(lexical scope)를 가리키는 lexical this를 가집니다.

```javascript
var evens = [2, 4, 6, 8,];

// Expression bodies (표현식의 결과가 반환됨)
var odds = evens.map(v => v + 1);   // [3, 5, 7, 9]
var nums = evens.map((v, i) => v + i);  // [2, 5, 8, 11]
var pairs = evens.map(v => ({even: v, odd: v + 1})); // [{even: 2, odd: 3}, ...]

// Statement bodies (블럭 내부를 실행만 함, 반환을 위해선 return을 명시)
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
// 출력결과 : Bob knows John, Brian
var bob = {
  _name: "Bob",
  _friends: ["John, Brian"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}
```

printFriends() 함수의 서브루틴은 다음과 문법상 동일하게 동작합니다.
```javascript
this._friends.forEach(function (f) {
    console.log(this._name + " knows " + f));
}.bind(this));
```
화살표 함수의 더 자세한 설명은 MDN Arrow Functions을 참고하세요. printFriends() 함수의 선언 표기법이 궁금하시면 MDN Object Initializer를 참고하세요.

## Classes

ES6 클래스는 포로토타입 기반 객체지향 패턴을 더 쉽게 사용할 수 있는 대체재입니다. 클래스 패턴 생성을 더 쉽고 단순하게 생성할 수 있어서 사용하기도 편하고 상호운용성도 증가됩니다.
```javascript
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  get boneCount() {
    return this.bones.length;
  }
  set matrixType(matrixType) {
    this.idMatrix = SkinnedMesh[matrixType]();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```
더 자세한 설명은 MDN Classes 을 참고하세요.

## Enhanced Object Literals

ES6에서 객체 리터럴은 선언문에서 프로토타입 설정, foo: foo 선언을 위한 단축 표기법, 메서드 정의, super 클래스 호출 및 동적 속성명을 지원하도록 향상 되었습니다. 그에 따라 객체 리터럴 및 클래스 선언이 더 밀접되어져, 객체기반 설계가 더 편리해졌습니다.
```javascript
var obj = {
    // __proto__
    __proto__: theProtoObj,

    // ‘handler: handler’의 단축 표기
    handler,

    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },

    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
```

더 자세한 설명은 MDN Grammar and types: Object literals 를 참고하세요.

## Template Strings

Template Strings(ES6 부터는 Template literals라 부름)는 문법적으로 더 편하게 string을 생성할 수 있게 합니다. 이는 Perl, Python 등의 문자열 보간(string interpolation)과 유사합니다. Tagged template literals는 인젝션 공격 방어 혹은 문자열로 부터 상위 데이터 구조체 재조립 등을 위해 string 생성을 커스터마이징이 가능하게끔 해줍니다.
```javascript
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript this is
 not legal.`

// String interpolation
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Construct an HTTP request prefix is used to interpret the replacements and construction
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
```
더 자세한 설명은 MDN Template literals를 참고하세요.

## Destructuring

Destructuring는 배열과 객체에 패턴 매칭을 통한 데이터 바인딩을 제공합니다. Destructuring는 할당 실패에 유연하며, 실패 시 undefined 값이 자동할당 됩니다. 또한 foo["bar"]와 같이 객체의 속성 값도 자동으로 검색하여 바인딩해줍니다.
```javascript
// list matching
var [a, , b] = [1,2,3];

// object matching
var { op: a, lhs: { op: b }, rhs: c }
       = getASTNode()

// object matching 단축 표기
// binds `op`, `lhs` and `rhs` in scope
var {op, lhs, rhs} = getASTNode()

// parameter에서도 사용 가능
function g({name: x}) {
  console.log(x);
}
g({name: 5})

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;
```
더 자세한 설명은 MDN Destructuring assignment를 참고하세요.

## Default + Rest + Spread

파라미터에 기본 값을 설정할 수 있습니다.
```javascript
function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f(3) // 15
```
가변인자를 사용가능하며, 배열로 치환시켜 줍니다. Rest parameters는 arguments 보다 직관성을 제공합니다.
```javascript
function f(x, ...y) {
  // y is an Array ["hello", true]
  return x * y.length;
}
f(3, "hello", true) // 6
```
함수 호출 시 배열을 일련의 인자에 나누어 주입시켜 줍니다.
```javascript
function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) // 6

더 자세한 설명은 Default parameters, Rest parameters, Spread Operator를 참고하세요.
```
## Let + Const

블록 유효 범위를 갖는 새로운 변수 선언 방법을 지원합니다. let은 var와 유사하게 동작합니다. const는 재할당 및 재선언이 불가능합니다.
```javascript
function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      x = "foo";
    }
    // error, already declared in block
    let x = "inner";
  }
}
```
var의 유효 범위는 전체 외부 함수까지이지만 let은 변수를 선언한 블록과 그 내부 블록들에서 유효합니다.
```javascript
function varTest() {
    var x = 31;
    if (true) {
        var x = 71;  // same variable!
        console.log(x);  // 71
    }
    console.log(x);  // 71
}

function letTest() {
    let x = 31;
    if (true) {
        let x = 71;  // different variable
        console.log(x);  // 71
    }
    console.log(x);  // 31
}
```
```javascript
function varTest() {
    if (true) {
        var x = 71;
        console.log(x);  // 71
    }
    console.log(x);  // 71
}

function varTest() {
    let x = 71;
    if (true) {
        console.log(x);  // 71
    }
    console.log(x);  // 71
}

function varTest() {
    if (true) {
        let x = 71;
        console.log(x);  // 71
    }
    console.log(x);  // Uncaught ReferenceError: x is not defined
}
```
더 자세한 설명은 let statement, const statement를 참고하세요.

## Iterators + For…Of

Iterator 객체는 CLR의 IEnumerable 혹은 Java의 Iterable처럼 사용자 정의의 반복을 가능하게 해줍니다. for..of 반복문이 ES6에서 추가 되었으며 for..in 반복문과 달리 iterator 기반의 컬렉션 전용 반복문입니다. for in 반복문과의 차이점은 for in vs for of 24를 참고하세요.
```javascript
let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;

        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return { done: false, value: cur }
            }
        }
    }
}

for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
        break;
    console.log(n); // 1, 2, 3, 5, 8, ...987
}
```
Iteration은 아래의 duck-type 인터페이스를 기반으로 합니다. (설명을 위해 TypeScript 4의 타입 문법을 사용하였습니다)
```javascript
interface IteratorResult {
    done: boolean;
    value: any;
}
interface Iterator {
    next(): IteratorResult;
}
interface Iterable {
    [Symbol.iterator](): Iterator
}
```
더 자세한 설명은 MDN for…of 를 참고하세요.

## Generators

Generators는 function*와 yield 키워드를 이용하여 iterator 선언을 단순하게 작성할 수 있게 도와줍니다. function*로 선언한 함수는 Generator 객체를 반환합니다. Generators는 iterator의 하위 타입이며 next와 throw 메서드를 가지고 있습니다. 이 메서드들로 인해 yield 키워드로 반환된 값은 다시 generator에 주입거나 예외처리를 할 수 있게 되었습니다.

참고: 해당 키워드는 비동기 프로그래밍의 ‘await’ 같은 기능이 가능하게끔 기반이 되었습니다. ES7의 await 제안서 4를 참고하세요.
```javascript
var fibonacci = {
    [Symbol.iterator]: function*() {
        var pre = 0, cur = 1;
        for (;;) {
            [pre, cur] = [cur, pre + cur];
            yield cur;
        }
    }
}

for (var n of fibonacci) {
    // truncate the sequence at 20
    if (n > 20)
        break;
    console.log(n); // 1, 2, 3, 5, 8, 13
}
```
```javascript
function* gen(){
  yield* ["a", "b", "c"];
}

var a = gen();

a.next(); // { value: "a", done: false }
a.next(); // { value: "b", done: false }
a.next(); // { value: "c", done: false }
a.next(); // { value: undefined, done: true }
```
generator 인터페이스는 다음과 같습니다. (설명을 위해 TypeScript 4의 타입 문법을 사용하였습니다)
```javascript
interface Generator extends Iterator {
    next(value?: any): IteratorResult;
    throw(exception: any);
}
```
더 자세한 설명은 MDN Iteration protocols 를 참고하세요.

## Unicode

완전한 유니코드를 지원하기 위해 문자열에 새로운 유니코드 리터럴과 정규표현식에 u 모드가 추가되었습니다. 또한 21비트 형식까지 처리하기 위한 신규 API가 추가되었습니다. 이 추가된 기능은 JavaScript로 글로벌 앱을 만들 수 있도록 지원합니다.
```javascript
// same as ES5.1
"𠮷".length == 2

// new RegExp behaviour, opt-in ‘u’
"𠮷".match(/./u)[0].length == 2

// new form
"\u{20BB7}" == "𠮷"  == "\uD842\uDFB7"

// new String ops
"𠮷".codePointAt(0) == 0x20BB7

// for-of iterates code points
for(var c of "𠮷") {
    console.log(c); // 𠮷
}
```
더 자세한 설명은 MDN RegExp.prototype.unicode를 참고하세요.
## Modules

언어 차원에서 컴포넌트 정의를 위한 모듈을 지원합니다. 유명한 JavaScript 모듈 로더들(AMD, CommonJS)의 패턴을 적용시켰습니다. 런타임 동작은 호스트에 정의된 기본 로더에 의해 정의됩니다. 묵시적 비동기 형태로 요구되는 모듈들이 정상적으로 로드되기 전까지 코드가 실행되지 않습니다.
```javascript
// lib/math.js
export function sum(x, y) {
    return x + y;
}
export var pi = 3.141593;
```
```javascript
// app.js
import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi)); // 2π = 6.283186
```
```javascript
// otherApp.js
import {sum, pi} from "lib/math";
console.log("2π = " + sum(pi, pi)); // 2π = 6.283186

export default와 export * 문법도 제공합니다.
```
```javascript
// lib/mathplusplus.js
export * from "lib/math";
export var e = 2.71828182846;
export default function(x) {
    return Math.log(x);
}
```
```javascript
// app.js
import ln, {pi, e} from "lib/mathplusplus";
console.log("2π = " + ln(e)*pi*2);
```
더 자세한 내용은 import statement , export statement 를 참고하세요.
## Module Loaders

Module Loaders는 다음을 지원합니다.

    - 동적 로딍(Dynamic loading)
    - 상태 격리(State isolation)
    - 전역 네임스페이스 격리(Global namespace isolation)
    - 컴파일 훅(Compilation hooks)
    - 중첩 가상화(Nested virtualization)

기본으로 사용할 모듈 로더를 설정할 수 있으며, 로더를 새로 생성하여 격리되거나 제한된 맥락에서 코드를 로드할 수 있습니다.
```javascript
// 동적 로딩 – ‘System’ is default loader
System.import('lib/math').then(function(m) {
    console.log("2π = " + m.sum(m.pi, m.pi));
});

// 실행 샌드박스 생성 – new Loaders
var loader = new Loader({
    global: fixup(window) // replace ‘console.log’
});
loader.eval("console.log('hello world!');");

// 모듈 캐시 직접 조작
System.get('jquery');
System.set('jquery', Module({$: $})); // WARNING: not yet finalized
```

## Map + Set + WeakMap + WeakSet

일반 알고리즘을 위한 효율적인 데이터 구조를 제공합니다. WeakMap과 WeakSet는 메모리 누수로 부터 자유롭게 해줍니다. 이들 내 저장된 객체에 다른 참조가 없는 경우, garbage collection 될 수 있습니다.
```javascript
// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size // undefined (사용된 곳이 없기 때문)

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });
wm.size // undefined (사용된 곳이 없기 때문)
```
더 자세한 내용은 MDN Map , Set, WeakMap , WeakSet를 참고하세요.
## Proxies

프록시(Proxy)를 사용하면 호스트 객체에 다양한 기능을 추가하여 객체를 생성할 수 있습니다. interception, 객체 추상화, 로깅/수집, 값 검증 등에 사용될 수 있습니다.
```javascript
// Proxying a normal object
var target = {};
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`;
  }
};

var p = new Proxy(target, handler);
p.world // 'Hello, world!';
```
```javascript
// Proxying a function object
var target = function () { return 'I am the target'; };
var handler = {
  apply: function (receiver, ...args) {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);
p() // 'I am the proxy';
```
```javascript
let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        // The default behavior to store the value 
        obj[prop] = value;
    }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = 'young'; // Throws an exception
person.age = 300; // Throws an exception
```

proxy의 handler가 가질 수 있는 트랩(trap)들입니다.
```javascript
var handler =
{
  get:...,
  set:...,
  has:...,
  deleteProperty:...,
  apply:...,
  construct:...,
  getOwnPropertyDescriptor:...,
  defineProperty:...,
  getPrototypeOf:...,
  setPrototypeOf:...,
  enumerate:...,
  ownKeys:...,
  preventExtensions:...,
  isExtensible:...
}
```
더 자세한 내용은 MDN Proxy 를 참고하세요.
## Symbols

심볼(Symbol)은 객체 상태의 접근 제어를 가능하게 합니다. Symbol은 새로운 원시 타입으로 이름 충돌의 위험 없이 속성(property)의 키(key)로 사용할 수 있습니다. 옵션 파라미터인 description는 디버깅 용도로 사용되며 식별 용도는 아닙니다. Symbol은 고유(unique)하며, Object.getOwnPropertySymbols와 같은 reflection 기능들로 접근할 수 있기 때문에 private 하진 않습니다(for in나 Object.keys()로는 접근 불가).
```javascript
var map = {};
var a = Symbol('a');

map[a] = 123;
map["b"] = 456;

console.log(map[a]); // 123
console.log(map["b"]); // 456

for (let key in map) {
    console.log(key); // b
}

Object.keys(map); // ["b"]
```
더 자세한 내용은 ES6 In Depth: 심볼 (Symbol)를 참고하세요.
## Subclassable Built-ins

ES6에서 Array, Date, DOM Element 같이 내장 객체들은 상속이 가능합니다. 객체 생성 시 호출되는 Ctor 함수는 다음의 2단계를 가집니다.(둘다 가상적으로 실행)

    - 객체 할당을 위해 Ctor[@@create] 호출하여
    - 새로운 인스턴스의 생성자를 호출해 초기화 진행

아시다싶이 @@create 심볼은 Symbol.create를 통해 만들어졌습니다.
```javascript
// Pseudo-code of Array
class Array {
    constructor(...args) { /* ... */ }
    static [Symbol.create]() {
        // Install special [[DefineOwnProperty]]
        // to magically update 'length'
    }
}

// User code of Array subclass
class MyArray extends Array {
    constructor(...args) { super(...args); }
}

// Two-phase 'new':
// 1) Call @@create to allocate object
// 2) Invoke constructor on new instance
var arr = new MyArray();
arr[1] = 12;
arr.length == 2
```

## Math + Number + String + Array + Object APIs

core Math 라이브러리, Array 생성 helper, String helper, 복사를 위한 Object.assign 등 많은 라이브러리들이 추가되었습니다.
```javascript
Number.EPSILON
Number.isInteger(Infinity) // false
Number.isNaN("NaN") // false

Math.acosh(3) // 1.762747174039086
Math.hypot(3, 4) // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

"abcde".includes("cd") // true
"abc".repeat(3) // "abcabcabc"

Array.from(document.querySelectorAll('*')) // Returns a real Array
Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
[0, 0, 0].fill(7, 1) // [0,7,7]
[1, 2, 3].find(x => x == 3) // 3
[1, 2, 3].findIndex(x => x == 2) // 1
[1, 2, 3, 4, 5].copyWithin(3, 0) // [1, 2, 3, 1, 2]
["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
["a", "b", "c"].keys() // iterator 0, 1, 2
["a", "b", "c"].values() // iterator "a", "b", "c"

Object.assign(Point, { origin: new Point(0,0) })
```

더 자세한 내용은 Number, Math, Array.from, Array.of, Array.prototype.copyWithin, Object.assign를 참고하세요.
## Binary and Octal

2진법 (b), 8진법 (o) numeric 리터럴 형식이 추가되었습니다.
```javascript
0b111110111 === 503 // true
0o767 === 503 // true
```
## Promises

Promise는 비동기 프로그래밍을 위한 라이브러리입니다. Promise는 미래에 생성되는 값을 나타내는 일급 객체입니다. Promise는 현존하는 많은 JavaScript 라이브러리에 사용되고 있습니다.
```javascript
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})
```
더 자세한 내용은 MDN Promise 를 참고하세요.
## Reflect API

Reflection API는 런타임 시 객체에 대해 작업을 수행할 수 있습니다. 프록시 트랩(proxy traps)와 같은 메타 함수들을 가지고 있습니다. Reflection은 프록시를 구현하는데 유용합니다.
```javascript
class Greeting {
    constructor(name) {
        this.name = name;
    }

    greet() {
      return `Hello ${name}`;
    }
}

function greetingFactory(name) {
    return Reflect.construct(Greeting, [name], Greeting);
}

greetingFactory('a'); // Greeting {name: "a"}
```
더 자세한 내용은 MDN Reflect 를 참고하세요.
## Tail Calls

마지막에 호출되는 함수가 호출 스택이 초과되게 하지 않습니다. 재귀 알고리즘을 매우 큰 입력 값에서도 안전하게 만듭니다.
```javascript
function factorial(n, acc = 1) {
    'use strict';
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

// 현재 대부분의 자바스크립트 엔진에서 스택 오버플로우가 일어나지만,
// ES6에서는 입력 값이 커도 안전하다
factorial(100000);
```