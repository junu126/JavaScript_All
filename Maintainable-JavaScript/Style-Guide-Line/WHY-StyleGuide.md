# 스타일 가이드라인을 따르는 이유.

    도서 : '읽기 좋은 자바스크립트 코딩 기법' - 니콜라스 자카스

> "프로그램은 우선 사람이 이해할 수 있어야 한다. 컴퓨터에서 실행되는가는 부차적인 문제다." -도널드 커누스

각자 다른 일을 하던 사람들이 모여 처음 한 팀을 이루면 코드작성 방법도 일치하지 않고, 제각각이기 마련입니다. 모두가 다른 환경에서 일해왔기 때문에 코드작성 방법에 대한 생각도 서로 다릅니다. 이에 따라서 코드 작성 방법을 통일할 필요가 있습니다. 따라서 팀이 구성되면 스타일 가이드라인부터 가능한 빨리 세워야 합니다.

`보통 '스타일 가이드라인'과 '코딩 규칙'을 자주 혼동하여 사용합니다. 스타일 가이드라인은 소스코드의 레이아웃에 초점을 맞춘 코딩 규칙입니다. 반면 코딩 규칙은 프로그래밍 관례와 디렉터리 구조, 주석에 대한 것도 포함합니다.`

## 스타일 가이드 라인이 왜 필요할까?

스타일 가이드라인을 정하는 절차는 생각보다 많은 시간을 필요로합니다. 각자 의견이 다른데다가 평소에 하던 코딩 스타일이 아닌 다른 스타일로 작성해야 하기 때문입니다.  
또한 개발자 들은 보통 하루 8시간씩 코드를 작성해야 하기 때문에 자신이 편한 방법으로 정하고 싶어합니다. 따라서 팀원이 모두 조금씩 타협해야 하고, 팀 리더가 강하게 주도할 줄 알아야 합니다. 이러한 과정을 거쳐서 스타일 가이드라인이 정해지면, 코드에 일관성이 있게됩니다. 또한 더 이상 코딩 스타일 같은 사소한 일로 시간을 허비하지 않게 됩니다. 따라서 깊이 있는 논의와 토론이 가능해집니다.  

더불어, 코드와 일관성이 생기면 팀에서는 다음과 같은 장점을 얻을 수 있습니다.

 - **작성자와 상관없이 어떠한 파일이든 다른 개발자가 작업할 수 있습니다. 또 모든 파일에 일관성이 있으니 포맷을 다시 맞추거나 꼬여있는 로직을 이해하는 데 시간을 낭비할 필요가 없어집니다.**

 - **에러가 훨씬 잘 보입니다. 코드를 일관되게 작성하면 잘못된 부분은 일관적인 흐름에서 벗어나기 때문에 아주 쉽게 찾을 수 있습니다.**

 이러한 이유로 전 세계의 많은 기업이 내/외부적으로 스타일 가이드라인을 공유합니다. 

 ## 유용한 툴

 코딩 가이드라인은 세우기도 어렵지만, 지키는 것도 굉장히 까다로운 일 입니다. 이러하기 때문에 스타일 가이드라인을 세우는 툴이 만들어졌습니다. 대표적인 예로 `JSLink`와 `JSHint`가 있습니다.

 JSLink는 자바스크립트에 대한 일반적인 품질 검증 툴입니다. `'더글라스 크락포드'`가 만들었습니다.  
 
 크락포드는 자바스크립트 스타일을 다음 세 가지로 나누어 정리했습니다.
 - **자바스크립트 스타일 요소 1**  
 기본적인 패턴과 문법에 대해 다룬다.
 - **자바스크립트 스타일 요소 2**  
 일반적으로 사용하는 관용구를 다룬다.
 - **자바스크립트 스타일 요소 3**  
 스타일 요소 1,2를 강조하고 스타일 가이드라인 코드를 추가했다.

 JSLink는 크락포드가 선호하는 스타일을 포함하고 있고, 대부분 옵션을 끄지 않고 사용합니다.  

 JSHint는 JSLink에서 파생되었습니다. `'안톤 코발료프'`가 관리하고 있으며, JSHint의 목적은 사용자 취향에 맞게 변경할 수 있는 자바스크립트 코드 품질과 스타일 가이드라인에 대한 툴을 제공하는 것입니다. 문법 에러를 제외하고는 JSHint에서는 거의 모든 경고를 끌 수 있으며 코드 작성 시 볼 모드 메시지를 원하는 대로 변경할 수도 있습니다. 코발료프는 많은 사람들이 GITHUB의 소스 코드 저장소를 통해 JSHint에 참여하고 기여하길 권장하고 있습니다.

 코드스타일 가이드라인의 툴을 선택하는 것은 자신의 마음입니다. 여러 툴들을 비교해보고 원하시는 툴은 사용하세요.

---

 ## 스타일 가이드 라인
>`니콜라스 자카스`님의 책을 읽고 나열해본 문서입니다.

- [기본 포맷](https://github.com/junu126/JavaScript_All/blob/master/Maintainable-JavaScript/Style-Guide-Line/01_Basic-Format.md)
- [주석](https://github.com/junu126/JavaScript_All/blob/master/Maintainable-JavaScript/Style-Guide-Line/02_Remark.md)
<!-- 더 추가할 사항 -->