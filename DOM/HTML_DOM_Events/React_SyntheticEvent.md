# React SyntheticEvent

```javascript
GetInputData = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
};

<input type="text" name="loginData" onClick={event => GetInputData(event)} />;
```

ReactJS를 공부하고 여러 프로젝트를 진행해보며 나의 코딩 능력이 향상되고 성장하면서 여러 코드를 보았다. 그 중 Input 태그의 Text들을 State에 저장하기 위해선 위의 자바스크립트 코드 처럼 사용해야 한다. state를 변경 해주기위해 this.setState()를 사용하고, 변경할 state에 input 값을 넣어준다. 이 함수에서 Parameter로 `event`를 받아왔다. 그리곤 이를 이용해 `[event.target.name]`과 `event.target.value`라는 코드를 완성한다.

나는 코딩을 하면서 위와 같은 패턴을 만날경우 10번의 9번은 위와 같은 코드를 사용한다. 그러던 중 나는 문득 `evnet`라고 적고 불리는 것에 대하여 궁금해졌다.

## SyntheticEvent

우리가 React에서 사용하는 `onClick()`이나 `onChange()`와 같은 헨들링 이벤트들은 브라우저의 기본 이벤트가 아니다. 브라우저의 이벤트들을 포함하고 있는 React의 고유한 이벤트 객체이다. 그리고 이를 React에서는 **SyntheticEvent**라고 부른다.

## Event Pooling

SyntheticEvent는 브라우저의 이벤트와 다른점이 있다. 브라우저의 이벤트 객체를 포함하고 있고, `EventPooling` 이라고 불리는 현상이 발생한다.

`EventPooling`은 StntheticEvent객체가 재사용 되기 때문에 발생한다.

> The SyntheticEvent is pooled. This means that the SyntheticEvent object will be reused and all properties will be nullified after the event callback has been invoked. This is for performance reasons. As such, you cannot access the event in an asynchronous way.<br>
> -React Docs

위의 문장은 React 공식 문서에 적혀 있는 문장이다.

> React의 SyntheticEvent는 풀링된다. 이는 SyntheticEvent객체는 재사용되고, 이벤트 콜백이 호출된 후 모든 속성이 무효화됨을 의미한다. 이것은 성능상의 문제 때문이다. 따라서 비동기적으로 이벤트에 엑세스 할 수 없다.<br>
> -React Docs해석

공식 문서를 확인해보면 SyntheticEvent객체는 재사용이 된다고 한다. 따라서 SyntheticEvent는 이벤트 객체를 재활용하여 동작한다. 따라서 재활용이 된 이후에는 SyntheticEvent객체의 모든 속성(프로퍼티)이 `null`로 변하게 된다.

아래는 React 공식 문서에서 제공하는 예제 코드이다.

```javascript
function onClick(event) {
  console.log(event); // => nullified object.
  console.log(event.type); // => "click"
  const eventType = event.type; // => "click"

  setTimeout(function() {
    console.log(event.type); // => null
    console.log(eventType); // => "click"
  }, 0);

  // Won't work. this.state.clickEvent will only contain null values.
  this.setState({ clickEvent: event });

  // You can still export event properties.
  this.setState({ eventType: event.type });
}
```

코드를 실제로 동작시켜보면 다음과 같은 화면이 등장한다.
!["EventPooling예제코드1-결과"](Image/EventPooling예제코드1-결과.png)

중간의 `Warning`이 발생하는 이유는 예제코드가 실행되면 SyntheticEvent가 null로 변경되기 때문에 발생하는 것 이기 때문에 테스트를 하는 우리는 신경쓰지 않아도 되는 문제이다.

다시 본론으로 돌아와서 `onClick`함수를 실행시키면 `console.log()`를 통해 SyntheticEvent객체가 console에 등장한다. 그리곤 다음 줄에 위치한 코드로 onClik()함수의 `type`이 등장하게 된다. 하지만 6번째 줄의 `setTimeout()`을 통해 콜백함수가 실행되면서 SyntheticEvent객체가 null로 변한 것을 확인할 수 있다. 이것이 바로 **EventPooling**현상이다.

EventPooling으로 인한 변화는 다음과 같다.

- 성능상의 이유로 발생하며 SyntheticEvent객체가 초기화가 된다.

- SyntheticEvent객체를 재활용하여 사용하기 때문에 메모리 사용량이 적다.

- 해당 이벤트(`onClick()`)가 실행될때 한번만 실행된다.

EventPolling에 대해 `React 공식문서`에서는 비동기적으로 엑세스 할 수 없다고 말했다. 그렇다면 SyntheticEvent객체를 비동기통신에서 사용해야 한다면 어떨까.

## Asynchronous

React에서는 비동기상태에서 SyntheticEvent를 EventPolling이 발생하지 않고 사용하는 방법이 여럿 존재한다.

첫 번째는, 해당 이벤트 객체를 복사하고, 복사된 객체를 비동기 동작이 끝난 다음 사용하는 방법이다. 이 방법을 사용하면 코드가 몇 줄 더 늘어나긴 해도 좋은 방법이다. 따라서 강력한 콜백함수가 여럿 존재 하지 않는 이상 이러한 방법을 선호하는 것이 옳바르다.

두 번째는, React에서 제공하는 `event.persist()`를 사용하는 방법이다.

**event.persist()** 메서드는 해당 이벤트의 객체가 메모리에 계속 존재하게 해준다. 따라서 성능상의 이점을 받지 못하게 되지만, `event`를 계속 사용할 수 있게 해준다고 보면 된다.

아래는 **event.persist()** 메서드를 사용한 예시이다.

```javascript
function onClick(event) {
  event.persist(); // presist 적용.
  console.log(event); // => nullified object.
  console.log(event.type); // => "click"
  const eventType = event.type; // => "click"

  setTimeout(function() {
    console.log(event.type); // => null
    console.log(eventType); // => "click"
  }, 0);

  // Won't work. this.state.clickEvent will only contain null values.
  this.setState({ clickEvent: event });

  // You can still export event properties.
  this.setState({ eventType: event.type });
}
```

코드를 동작 시키면 다음과 같이 동작한다.
!["event.persist()메서드예제코드1-결과"](<Image/event.persist()메서드예제코드1-결과.png>)

콘솔 창을 보면 코드가 잘 동작했음을 확인할 수 있다. event.persist() 메서드를 적용하기 전에는 새로운 콜백을 받아오면 event가 `null`로 재정의 됬지만, 메서드를 적용한 지금은 기존의 event가 그대로 남아있는 것을 확인할 수 있다.

하지만 앞서 말한 것 처럼 **event.persist**방법을 사용하는 것은 메모리 성능상의 이점을 받지 못하기 때문에 다른 방법을 사용해야 한다.

이때 이러한 상황에서 Debounce가 활약한다.

## Debounce & Throttle

[Lodash](https://lodash.com)라고 불리는 자바스크립트 유틸리티 라이브러리가 있는데, 이 라이브러리에서 제공하는 기능인 `debounce` 및 `throttle`은 스크롤 이벤트와 같은 곳에서 주로 쓰인다.

스크롤 이벤트는 스크롤이 발생할 때 마다 이벤트를 동작시킨다. 우리가 스크롤을 내리면 발생하는 스크롤 이벤트는 어마어마하게 많다. 만약 스크롤 이벤트에 엄청난 리소스를 잡아먹는 콜백이 잡혀있다면.. 큰 일이 발생할 것 이다. 이때 **debounce**와 **throttle**를 사용하면 이런 말도안되는 상황을 바로잡을 수 있다.

debounce와 throttle은 콜백에 제약을 걸어 이벤트가 연속 실행되는 것을 막아준다.

### Throttle

Throttle은 연속되는 콜백 사이사이에 원하는 만큼의 시간 제약을 걸어준다. 예를 들어보면,

제약되는 시간을 100ms라고 할 때,

- 기본상황 : Event1 - Event2 - Event3 - Event4

- Throttle : Event1 - **(100ms)** - Event2 - **(100ms)** - ...

이와 같이 기본상황에서는 이벤트가 줄줄이 작동되는 반면에, throttle을 사용하면 이벤트가 끝나고 일정한 시간으로 제약되는 모습을 확인할 수 있다.

### Debounce

Debounce는 연속되는 콜백이 실행되고 있을때, 지정해준 시간만큼 시간이 지나면 해당하는 콜백을 실행한다. 예를 들어보면,

제약되는 시간을 300ms라고 할 때,

- 기본상황 : Event1 - Event2 - Event3 - Event4
  return _Evetn1 Evetn2 Event3 Event4_

- Debounce : Event1 - Event2 - **(300ms)**.
  return _Event2_

위의 예제를 살펴보면 Event1이 정상 작동하고, Event2가 작동한게 아니라, Event1은 콜백을 리턴하지 않았고, Debounce 조건을 만족한 Event2만 리턴하는 모습을 확인할 수 있다.

React에서 EventPooling 현상을 Debounce와 Throttle 중 Debounce로 해결할 수 있다. 하지만 당신들은 의문이 들 것이다. 왜냐하면 Debounce와 Throttle은 동기적인 실행을 막기 때문이다.

그렇기에 우리는 이벤트 헨들러를 둘로 나눠서 사용해야 한다.

## Solution

Event함수를 React의 SyntheticEvent를 동기적으로 헨들링할 이벤트 헨들러와, 데이터를 받아와 debounce 시킬 이벤트 헨들러로 나눈다.

```javascript
import React, { Component } from "react";
import debounce from "lodash.debounce";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Target: "Unknown"
    };
    this.debouncedHandleChange = debounce(this.debouncedHandleChange, 300);
  }

  handleChange = event => {
    this.debouncedHandleChange(event.target);
  };

  debouncedHandleChange = target => {
    this.setState({
      Target: target.value
    });
    console.log(target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type something"
          onChange={(event) => this.handleChange(event)}
        />
      </div>
    );
  }
}

export default App;
```

위의 코드는 타이핑을 할 때 마다 동작하는 함수가 있다. 하지만 debounce로 인해 타이핑을 하고 0.3초 이상 멈춰야 함수가 실행되서 일반적인 코드보다 성능면에서 뛰어나다.

따라서 EventPooling을 비동기적인 상황에서 사용하기 위해서는, debounce를 통해 해결하면 좋을 듯 싶다.