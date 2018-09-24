# Q : 자바스크립트에는 어떠한 반복문이 있나요?

> A : 자바스크립트에는 다양한 반복문이 있습니다! `while`문부터 `for...in`문등 여러 문법이 있습니다.

자바스크립트에는 반복문이 여러게 있습니다.

`while`문, `do while`문, `for`문, `for...in`문, `for...of`문 등이 있습니다.

## while문
while문은 다음과 같은 형태로 사용합니다.
```javascript
while (조건) {
  실행될 문.
};
```
위의 형태에서 조건에는 몇번 반복할 것 인가를 써넣습니다.

다음은 while문의 예시입니다.
```javascript
let a = 5;

while (a > 0) {
  console.log(`a 의 값은 ${a}입니다.`);
  --a;
};
```

## do while문
while문에서는 조건을 거친 후 실행을 하지만, do while에서는 실행을 한 후 조건을 거칩니다. 다음은 do while문의 형태입니다.

```javascript
do {
  실행될 문.
} while(조건);
```

다음은 do while문의 예시입니다.
```javascript
let a = 5;

do {
  console.log(`a 의 값은 ${a}입니다.`);
  --a;
} while (a > 0);
```

## for문
for문은 다음과 같은 형태로 사용합니다.
```javascript
for (변수; 조건; 변동) {
  실행될 문.
};
```
while문에서는 변수를 따로 선언해주고, 변수의 변동값을 while문 안에서 실행해 주었지만, for문은 이러한 과정을 괄호안에서 해결해 버립니다. 

다음은 for문의 예시입니다.
```javascript
for (let i = 5; i > 0; i--) {
  console.log(`a 의 값은 ${a}입니다.`);
};
```

## for...in문
for...in문은 for문의 향상된 버전(?) 입니다. 다음은 형태입니다.

```javascript
for (변수 in 객체 & 배열) {
  실행될 문.
};
```
for...in문은 조금 특이합니다. 객체나 배열은 index값이 존재합니다. 그 index값들을 변수에 저장하고 반복합니다. 이것이 for...in문 입니다.

다음은 for...in문의 예시입니다.
```javascript
number = [5, 4, 3, 2, 1];

for (let a in number) {
  console.log(`a 의 값은 ${a}입니다.`);
};
```
위의 예제에서는 number의 0번째 index인 `5`부터 변수 a에 들어갑니다. 이후 실행을 하고, number의 1번째 index인 `4`가 변수 a에 다시 들어가서 실행을 합니다. 이와 같은 과정을 반복해서 값을 얻습니다.

## for...of문
for...of문은 for...in문과 상당히 비슷합니다. 하지만 for...in문은 모든 객체를 변수에 담을 수 있고, for...of문은 Simbol.iterator속성의 프로퍼티만 반복합니다. 다음은 형태입니다.

```javascript
for (변수 of 객체 & 배열) {
  실행될 문.
};
```

다음은 for...of문의 예제입니다.
```javascript
number = [5, 4, 3, 2, 1];

for (let a of number) {
  console.log(`a 의 값은 ${a}입니다.`);
};
```

`for...of`문은 ES6문법이 추가되면서 같이 추가된 문법입니다. for...in과 for...of의 차이점은 Google에 검색하시면 금방 아실 수 있습니다. 자바스크립트를 어느정도 알았다 싶으면 꼭 한번 알아보시면 좋겠습니다. :D