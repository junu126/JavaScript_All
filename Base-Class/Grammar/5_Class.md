# Q : 자바스크립트에서도 클래스를 사용할까요?

> A : 자바스크립트에서는 클래스가 굳이 필요하지 않지만 사용할 수 있습니다!

자바스크립트에 ECMAscript6문법이 들어오면서 자바스크립에서도 Class를 사용할 수 있게 되었습니다.

다음은 Class를 선언하는 방법입니다.
```javascript
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

let person = new PersonClass("KJW");
persom.sayname();
// 'KJW'
```

클래스를 하나하나 설명해드리겠습니다.

## 생성자
먼저 `class Personclass{ ... }`는 클래스를 선언하는 방법입니다. 그 안에 존재하는 `constructor(...) { ... }`는 '생성자'라고 불리는 함수입니다. 생성자의 매개변수는 클래스에 포함될 객체의 Property가 들어갑니다. 클레스에 생성자가 포함이 되어있지 않으면 클래스가 작동하지 않습니다.

## 메소드
메소드에 대해 설명하기 전에 `this`키워드를 먼저 설명하겠습니다. 이 클래스에서 this는 PersonClass를 의미합니다. 다시말해 sayName()함수는 이렇게 볼 수 있는 것입니다.
```javascript
sayName() {
  console.log(PersonClass.name);
}
```
> 하지만 이렇게 사용하실 수는 없습니다.

this는 최상위 부모, 즉 `루트 객체(root object)`를 의미합니다.

다시 메소드로 돌아와서 클래스 내부에 존재하는 `sayName()`메소드는 `this.name`을 콘솔창에 띄우고 있습니다.

## 호출
클레스를 선언했으면 사용해야겠죠? 클래스를 호출하는 방법은 new키워드를 사용해서 클래스에 상속되는 ProtoType을 만들어줍니다. 여기서 만든 prototype이 `person`변수 입니다. 이렇게 prototype을 만들어주면 그 prototype에서도 class의 생성자를 사용할 수 있습니다.

자바스크립트에서 Class개념은 조금 중급문법에 속하기 때문에 깊이 집고 넘어가지는 않겠습니다. 하지만 나중에 자바스크립트를 어느정도 익히셨다면 꼭한번 깊게 파고들어 보는것을 추천드립니다 :D