# 문서화
모든 엔지니어는 문서 작성보다 코딩을 좋아합니다. 문서 자동화 툴이 인기 있는 건 분명 이런 개발자의 성향 때문이 아닐까 싶습니다. 문서 자동화 툴의 인기는 자바를 자동으로 문서화 해주는 Javadoc이라는 툴이 나오면서 시작되었는데 그 후 자바스크립트 같은 다른 언어에도 영향을 미쳤습니다.

자바스크립트 문서 생성기는 종류가 매우 많은 데다 지금도 계속해서 나오고 있습니다. 어떤 언어에서든 동작하는 범용 문서화 툴도 있지만 그 외는 자바스크립트 전용입니다. 문서 자동화 툴 역시 최소화 툴을 선택할 때 처럼 선호에 따라 결정하면 됩니다. 다양한 문서 자동화 툴이 있지만 인기 있는 몇가지만 소개해 보도록 하겠습니다.

## 9.1 JSDoc 툴킷
JSDoc 툴킷은 가장 많이 사용되고 있는 자바스크립트 문서 자동화 툴 입니다. JSDoc 최초 버전은 2011년에 처음 배포되었고, 현재는 구글과 SproutCore에서 사용하며, 자바스크립트 전용 문서 자동화 툴 제작을 활성화 시켰다는 평을 듣고 있습니다. 특별한 형식의 여러 줄 주석으로 문서 정보를 표현한다는 점에서 기본 문법은 Javadoc과 같습니다.

```javascript
/**
 *  @namespace 메인 애플리케이션 객체
 */
var MyApplication = {

  /**
   * 숫자 두 개를 더한다.
   * @param {int} num1 첫 번째 숫자
   * @param {int} num2 두 번째 숫자
   * @returns {int} 두 수의 합계
   * @static
   */
   add : function (num1, num2) {
     return num1 + num2;
   }
}
```
JSDoc에서는 호출할 생성자가 없는 객체는 네임스페이스라 간주합니다. 그래서 MyApplication에 @namespace 태그를 추가해 네임스페이스로 나타내고 뒤에는 설명을 추가했습니다. 

MyApplication.add() 메서드는 매개 변수가 두 개 있으므로 @param에 이 매개 변수의 데이터 타입, 매개 변수명 그리고 설명을 명시합니다. 또 결과를 반환하므로 @return 태그에는 반환하는 데이터 타입과 반환하는 값에 대한 설명을 명시합니다. @static 태그는 객체를 사용할 때 따로 객체의 인스턴스를 생성할 필요가 없음을 나타냅니다.

JSDoc 툴킷은 자바스크립트 파일의 코드와 여기에 추가된 문서화 주석을 가공해서 HTML 기반 문서를 생성합니다.

JSDOc 툴킷은 거의 모든 부분이 자바스크립트로 작성되었으며 실행할 때는 커스텀 Rhino launcher JAR 파일을 이용합니다.

```javascript
java -jar jsrun.jar app/run.js [파일]+ -t=[템플릿] -d=[디렉터리] [옵션]
```
app/run.js는 JSDoc 툴킷을 실행할 때 쓰는 메인 파일입니다. `[파일]`에는 문서화 하고 싶은 자바스크립트 파일을 개수 제한 없이 원하는 만큼 입력할 수 있습니다. 다음에 오는 -t 플래그는 따로 원하는 템플릿이 있으면 지정합니다. 지정하지 않으면 기본 템플릿을 사용합니다. -d 플래그는 출력 디렉터리로, 문서가 생성될 디렉터리를 지정합니다.

```javascript
java -jar jsrun.jar app/run.js core/core.js -t=templates/jsdoc/ -d= ./out
```
이 명령을 실행하면 templates/jsdoc에 있는 템플릿을 이용하여 core/core.js 파일을 문서화 하고 out 디렉터리에 HTML 문서를 생성합니다. 명령을 실행할 때 JSDoc 툴킷이 설치된 디렉터리를 여러 번 탐조(jsrun.jar에서 한 번, app/run.js에서 한 번, 기본 템플릿에서 한 번, 총 세 번 참조)하게 되는데 이런 정보는 다음처럼 프로퍼티 파일에 두는 게 좋습니다.
```javascript
src.dir = . / src
lib.dir = . / lib

jsdoc.dir = {lib.dir}/jsdoc-toolkit
jsdoc = ${jsdoc.dir}/jsrun.jar
jsdoc.run = ${jsdoc.dir}/app/run.js
jsdoc.templates = ${jsdoc.dir}/templates
jsdoc.output = ./docs
```

## 9.2 YUI Doc
초기 YUI Doc은 파이썬으로 작성되었고 YUI라이브러리에서 몇 년 동안 사용됐습니다. 최근에는 자바스크립트 문법을 그대로 이해할 수 있도록 자바스크립트 버전이 제작되었습니다.

JSDoc과 상당히 유사하나 프로퍼티와 메서드 이름을 문서화 주석에 반드시 입력해야 하지만 JSDoc은 자바스크립트 코드를 보고 유추한다는 점이 차이점 입니다.

YUIDoc은 자바스크립트로 작성되었기 때문에 npm을 통해 설치해야합니다.
```npm
sudo npm intall -g yuidoc
```
명령줄에서 YUI Doc을 실행하는 방법은 JSDoc보다 간단합니다.
```
yuidoc [옵션] [디렉터리]+ -o [디렉터리]
```