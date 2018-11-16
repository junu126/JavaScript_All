# 테스트 자동화
자바스크립트에서 테스트는 개발자를 오랫동안 괴롭힌 문제입니다. 누구나 자바스크립트 테스트를 쉽고 빠르게 하고 싶어하지만, 테스트할 브라우저가 너무나 많습니다. 테스트할 때 가장 첫 번째로 할 수 있는 방법은 작성한 HTML 파일을 다양한 브라우저에서 열어보고 잘 동작하는지 손수 테스트해보는 것 입니다. 그러나 이 방법을 사용하기에는 너무 오랜시간이 걸리게 됩니다.

그래서 자바스크립트 테스트에 일어난 새로운 물결은 바로 브라우저 환경에 구애받지 않고 명령줄에서 테스트하는 방법이었습니다. 명령줄에서 테스트하는 방법은 Rhino를 이용하거나 가상의 브라우저 환경을 만드는 방법이었습니다. 심지어 어떤 회사에서는 브라우저 프로필을 개발해서 크로스 부라우저 테스팅을 할 수 있다는 환상을 개발자에게 심어주기도 했지만 안타깝게도 가상의 브라우저 환경을 실제로 적용하기에는 무리가 있습니다. 이렇게 브라우저만의 독특한 환경을 직접 만든다 해도 실제 브라우저와 차이가 있을 수 밖에 없습니다. 예를 들어 가짜 파이어폭스에서 테스트가 통과했을지라도 실제 브라우저에는 실패할 수 도 있습니다.

## 10.1 PhantomJS
PhantomJS는 웹킷의 헤드리스 버전으로 여기서 웹킷은 사파리와 크롬에서 사용하는 렌더링 엔진입니다. 이들 브라우저와 완벽하게 같지는 않지만 상당히 유사하게 동작하여 브라우저를 열지 않고도 실제 브라우저에서 실행한 것 처럼 테스트할 수 있습니다. 그리고 PhantomJS는 자스민과 QUnit이라는 자바스크립트 테스트 프레임워크를 실행할 수 있는 스크립트를 제공합니다.

PhantomJS는 브라우저와 똑같은 스크립트 환경을 제공하지만 단수히 브라우저는 아닙니다. 그리고 PhantomJS에서 제공하는 스크립트로 자스민과 QUnit을 실행할 수 있는데 이는 PhantomJS가 제공하는 여러 스크립트 중에 일부입니다. 이를 실행하는 스크립트는 사용하는 프레임워크에 맞는 적절한 HTML 페이지 템플릿을 사용해야 합니다.

### 10.1.1 설치

사용하는 컴퓨터가 우분투라면 apt-get을 통해 설치할 수 있습니다.
```
$ sudo add-apt-repository ppa: jerome-etienne/neoip
$ sudo apt-get update
$ sudo apt-get install phantomjs
```

맥 OS X에서 Homebrew를 사용한다면 다음 명령어로 phantomJS를 설치할 수 있습니다.
```
brew install phantomjs
```
윈도우에서는 phantomjs 홈페이지에서 Windows용 PhantomJS를 설치해줍니다. 이후 환경 변수 설정을 해줍니다.
```
phantomjs-2.1.1-windows\bin
```
위의 path로 설정해 주면 됩니다.

### 10.1.2 사용법

phantomJS는 다음과 같이 명령줄에 입력하면 자스민과 QUnit 테스트를 실행할 수 있습니다.
```
phantomjs [driver] [HTML file]
```
Qunit을 실행하려면 다음처럼 입력합니다.
```
phantomjs examples/run-qunit.js tests.html
```
자스민을 실행하려면 다음처럼 입력합니다.
```
phantomjs examples/run-jasmine.js tests.html
```
테스트 결과는 명령줄에 출력됩니다.

## 10.2 JsTestDriver
JsTestDriver는 구글 엔지니어가 작성한 명렬줄 유틸리티 입니다. Seleninum이나 Yeti처럼 JsTestDriver도 설치된 브라우저에서 직접 테스트를 수행합니다. JsTestDriver는 JsTestDriver만의 자바스크립트 테스트 프레임워크가 있어서 반드시 기본적으로 제공하는 라이브러리에 맞게 테스트를 작성해야 합니다. 하지만 QUnit 어댑터를 제공하여 QUnit 기반으로 작성된 테스트도 JsTestDriver에서 실행할 수 있으며 원한다면 자신만의 어댑터를 만드는 것도 가능합니다.

### 10.2.1 설치
JsTestDriver는 자바로 작성되어서 실행하려면 먼저 최신 JAR 파일을 내려받아 라이브러리 디렉터리에 두어야 합니다. 보통 개발자 컴퓨터에서 실행하고 직접 JsTestDriver 서버와 브라우저를 연결하는 것이 일반적인 방법입니다. 테스트를 수행할 때 사용할 파일에 대한 정보와 구성 정보는 다음과 같이 YAML 파일에 작성합니다.
```yaml
server : http://localhos:4224

load :
      -tests/*.js
```
첫 번째 줄은 서버 설정 정보를 표시하고 그 다음 load 섹션은 테스트에 사용할 자바스크립트 파일을 지정합니다.

JsTestDriver는 빌드 시스템에서 사용할 수 있도록 테스트 결과를 수집하는 동안 모든 브라우저를 자동으로 시작하고 정지할 수 있는 명령을 제공합니다. 명령 형식은 다음과 같습니다.
```
java -jar JsTestDriver.jar --port[port] --browser[browsers] --config[file] 
     --tests all --testOutput[directory]
```
실제 사용 예는 다음과 같습니다.
```
java -jar JsTestDriver.jar --port 4224 --browser firefox, iexplore 
     -- config conf/conf.yml --tests all --testOutput ./results
```
이 명령은 conf/conf.yml에 지정한 모든 테스트를 파이어폭스와 IE에서 수행하고 그 결과를 results 디렉터리에 출력합니다. --brower 옵션에는 실행할 브라우저 경로를 입력해야 하는데 이 예제에서는 브라우저가 전체 경로 없이 firefox와 iexplore라는 명령어로 브라우저를 실행할 수 있는 환경이라 가정했습니다.

## 마무리
이를 제외하고도 다른 테스트 자동화 툴이 여러게 있습니다. 하지만 제가 잘 알고 있는 툴을 설명하려다 보니 두개로 줄였습니다. 테스트 자동화는 필수 요소라고 볼 수 있으니 꼭 공부하시기 바랍니다.