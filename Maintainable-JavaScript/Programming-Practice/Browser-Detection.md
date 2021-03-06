# 브라우저 탐지

브라우저 탐지 방법은 웹 개발에서 항상 뜨거움 쟁점입니다. 이 논쟁은 특히 과거에 가장 인기 있었떤 넷스케이프 내비게이터의 등장으로 더 일찌감치 시작되었습니다. 당시 넷스케이프2.0은 다른 웹 브라우저보다 훨씬 발달하여 웹사이트가 사용자에게 정보를 보내기 전에 사용자 에이전트 문자열을 확인하는 것도 가능했습니다. 이 때문에 많은 브라우저 공급사, 특히 마이크로소프트에서는 어쩔 수 없이 당시 쓰였던 브라우저 탐지 방법에 맞춰 사용자 에이전트 문자열을 넣게 되었습니다.

## 6.1 사용자 에이전트 탐지
요즘에는 클라이언트에서 브라우저를 주로 탐지하지만, 초기에는 서버에서 사용자 에이전트 문자열을 기준으로 서버에서 특정 브라우저의 접속을 막아 사이트의 내용을 아예 보여주지 않았습니다. 이때 가장 큰 혜택을 본 건 넷스케이프였습니다. 넷스케이프는 당시 가장 성능이 뛰어는 브라우저였고 그래서 많은 웹 사이트가 넷스케이프를 기준으로 제작되었습니다. 당시의 넷스케이프의 사용자 에이전트 문자열은 다음과 같습니다.
```javascript
Mozilla/2.0 (Win95; I)
```
최초의 IE는 서버의 내용을 정상적으로 볼 수 있또록 넷스케이프의 사용자 에이전트 문자열을 많은 부분 따라 했습니다. 당시 사용자 에이전트 탐지는 'Mozilla'라는 단어와 슬래시로 버전을 표기했는지를 확인했기에 IE는 다음처럼 사용자 에이전트 문자열을 추가했습니다.
```javascript
Mozilla/2.0 (compatible; MSIE 3.0; Windows 95)
```
IE의 등장으로 모든 사람이 쓰던 사용자 에이전트 문자열 탐지는 이 새로운 브라우저를 넷스케이프로 인지하게 되었습니다. 이때부터 새로운 브라우저는 기존 브라우저의 사용자 에이전트 문자열을 따라하는 게 유행이 되었고 이 유행은 크롬까지 이어져 크롬의 사용자 에이전트 문자열은 사파리의 문자열을 포함하고 있습니다. 여기서 계속 따라가 보면 사파리의 문자열은 파이어폭스의 문자열을, 파이어폭스의 문자열은 넷스케이프 문자열을 포함합니다.

## 6.2 기능 탐지
개발자들은 더 괜찮은 브라우저 탐지 방법이 있는지 알아보다가 기능 탐지라 불리는 테크닉에 주목했습니다. 기능 탐지는 특정 브라우저의 기능이 있는지 확인하는 방법을 이용합니다.
```javascript
// 나쁜 예
if (navigatot.userAgent.indexOf('MSIE 7') > -1) {
  // 실행할 코드
}
```
따라서 기능 탐지는 위 예제 코드 대신 다음 코드를 사용합니다.
```javascript
if (document.getElementById) {
  // 실행할 코드
}
```
위 두 가지 접근법에는 차이가 있습니다. 첫 번째 예제는 이름과 버전으로 특정 브라우저인지 확인하고, 두 번째 예제는 document.getElementById라는 특정 기능으로 확인합니다. 따라서 사용자 에이전트 탐지는 브라우저와 버전을 정확하게 알 수 있지만 기능 탐지는 검사에 사용한 객체나 메서드가 사용 가능한지만 확인할 수 있습니다. 이로 인해 결과는 완전히 다르게 나타납니다.

기능 탐지는 어떤 브라우저를 사용하는지에 상관없이 특정 기능을 사용할 수 있는지만 확인하는 방법이라 새로운 브라우저가 나와도 별 문제가 없습니다. 예를 들어 DOM이 갓 나왔을 때 document.getElementById()를 지원하는 브라우저가 많지 않아 다음과 같은 코드를 작성할 수 있었습니다.

```javascript
// 좋은 예
function getById(id) {

  var element = null;

  if (document.getElementById) {  // DOM
    element = document.getElementById(id);
  } else if (document.all) {      // IE
    element = document.all[id];
  } else if (document.layers) {   // Netscape <= 4
    element = document.layers[id];
  }

  return element;
}
```
이 코드는 기능이 있는지 확인한 후 있으면 사용하도록 기능 탐지를 적절히 설정하고 있습니다. 함수를 보면 document.getElementById는 표준 메서드이므로 제일 처음 확인하고 그 다음에 특정 브라우저의 메서드를 검사합니다. 만약 이러한 기능이 아무 것도 없으면 메서드는 null을 반환합니다. 초기 IE와 넷스케이프는 document.getElementById()를 지원하지 않았지만 IE5와 넷스케이프6가 출시되며 이 메서드를 지원하기 시작했습니다.

위 예제는 기능 탐지의 중요한 세 가지를 잘 보여주고 있습니다.
**1. 표준 솔루션을 확인한다.**
**2. 브라우저 기반 솔루션을 검사한다.**
**3. 기능 탐지에 실패하면 적절하게 처리한다.**

## 6.3 기능 추론 금지
기능 탐지를 부적절하게 사용하면 기능 탐지가 아닌 기능 추론이 됩니다. 기능 추론은 어느 기능이 있는지 확인하고 그 외 다른 기능까지 사용하는 것을 말합니다. 한 가지 기능이 있으므로 다른 기능이 있으리라고 생각하는 겁니다. 당연히 추론은 사실보다는 추측에 기반을 두므로 유지보수에 문제가 생길 수 있습니다. 다음 예제는 기능 추론을 사용한 다소 오래된 코드입니다.
```javascript
// 나쁜 예 - 기능 추론을 사용함
function getById(id) {

  var element = null;

  if (document.getElementByTagName) {  // DOM
    element = document.getElementById(id);
  } else if (window.ActiveXObject) {   // IE
    element = document.all[id];
  } else {                             // Netscape <= 4
    element = document.layers[id];
  }

  return element;
}
```
이 함수는 기능 추론을 사용하는 나쁜 예 입니다. 이런 추론은 다음과 같은 색각에 기반을 둡니다.
- **document.getElementsByTagName()가 있으면 document.getElementById()도 있다.**  
이 추측은 DOM 메서드 하나가 있다고 모든 DOM 메서드가 있으리라고 생각하는 것 입니다.

- **window.ActiveXObject가 있으면 document.all도 있다.**  
이 추론은 window.ActiveXObject와 document.all은 IE에만 존재하므로 둘 중 하나가 있는지만 알면 다른 것도 있을 것이라 생각하는 것 입니다. 실제로 오페라7에서는 document.all을 지원하기도 합니다.

- **이들 조건에 맞지 않으면 분명 넷스케이프4 이전 버전임이 확실하다**  
정확히 말하면 이건 사실이 아닙니다.

한 기능이 있다고 다른 기능도 있으리라 생각하면 안 됩니다. 실제로는 두 기능이 거의 관계가 없거나 중요하지 않은 관계인 경우가 많습니다. 이는 마치 오리처럼 보인다고 오리처럼 꽤꽥 울거라 단정 짓는 것과 같습니다.

## 6.4 무엇을 사용해야 할까?
기능 추론과 브라우저 탐지는 매우 안 좋은 습관이고 반드시 피해야 합니다. 어떤 상황이든 기능 탐지를 사용하는 것이 가장 좋습니다. 일반적으로 어떤 기능을 사용하기 전에는 그 기능이 이미 있는지 부터 알아야 합니다. 하지만 기능 간에 관계로 추측하면 잘못된 판단을 할 수도 있습니다.

저는 기능 탐지를 사용할 것을 권장합니다. 기능 탐지를 사용할 수 없을 때에는 대신 사용자 에이전트 탐지를 사용하십시오. 하지만 브라우저 추론은 유지보수에 좋지도 않고 브라우저가 새로 배포될 때마다 업데이트해야 하므로 코드에서 벗어날 수 없게 될지도 모릅니다.