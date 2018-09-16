function sayhello() {
    console.log("Hello");
    console.log("안녕");
    console.log("hi");
}
sayhello();

// 오른쪽 위 모서리 없는 삼각

function aGroupOfGames() {
    for(let i = 1 ; i <= 10 ; i++){
        for(let j = 1 ; j <= i ; ++j ){
            document.write("* ");
        }
        document.write("<br>");
    }
}
aGroupOfGames();

// 오른쪽 아래 모서리 없는 삼각

document.write("<br><br><br>");

function aGroupOfGames2() {
    for(let i = 10 ; i >= 1 ; i--){
        for(let j = 1 ; j <= i ; j++){
            document.write("* ");
        }
        document.write("<br>");
    }
}

aGroupOfGames2();


// 왼쪽 위 모서리 없는 삼각

document.write("<br><br><br>");

function aGroupOfGames3() {
    for(let i = 1 ; i <= 10 ; i++){
        for(let j = 9 ; j >= i ; j--){
            document.write("&nbsp;&nbsp;");
        }
        for(j = 1 ; j <= i ; j++){
            document.write("* ");
        }
        document.write("<br>");
    }
}

aGroupOfGames3();

// 왼쪽 아래 모서리 없는 삼각

document.write("<br><br><br>");

function aGroupOfGames4() {
    for(let i = 10 ; i >= 1 ; i--){
        for(let j = 9 ; j >= i ; j--){
            document.write("&nbsp;&nbsp;");
        }
        for(j = 1 ; j <= i ; j++){
            document.write("* ");
        }
        document.write("<br>");
    }
}

aGroupOfGames4();

// 모래시계 ( 5 - 6 )

document.write("<br><br><br>");

function aGroupOfGames5() {
    for(let i = 1 ; i <= 7 ;i++){
            for(let j = 1 ; j <= i ; j++){
                document.write("&nbsp;");
            }
            for(j = 10 ; j >= i; j--){
                document.write("* ");
            }
        document.write("<br>");
    }
}

aGroupOfGames5();

function aGroupOfGames6() {
    for(let i = 3 ; i<=10 ; i++){
            for(let j = 10 ; j >= i ; j--){
                document.write("&nbsp;");
            }
            for(j = 1 ; j <= i ; j++ ){
                document.write("* ");
            }
        document.write("<br>");
    }
}

aGroupOfGames6();

// 다이아몬드 (7 - 8)

document.write("<br><br><br>");

function aGroupOfGames7() {
    for(let i = 1 ; i <= 9 ; i= i + 2){
        for(let j = 9 ; j >= i ; j--){
            document.write("&nbsp;");
        }
        for(j = 1 ; j <= i ; j++){
            document.write("* ");
        }
        document.write("<br>");
    }
}

aGroupOfGames7();

function aGroupOfGames8() {
    for(let i = 9 ; i >= 1 ; i = i - 2){
        for(let j = 9 ; j >= i ; j--){
            document.write("&nbsp;");
        }
        for(j = 1 ; j <= i ; j++){
            document.write("* ");
        }
        document.write("<br>");
    }
}

aGroupOfGames8();

// 

// 러닝 자바스크립트 책으로!

function getGreeting() {
    return "Hello World!";
}

console.log( getGreeting() ); // getgreeting() = "Hello World!"
console.log( getGreeting );   // getgreeting = function getGreeting()  [system error.]
/*
const f = getGreeting;
f();    //f() = getGreeting = "Hello World!"
console.log( f( ));
*/
/*
const o = {};
o.f = getGreeting;
o.f();      // o의 객체 안에 f라는 프로퍼티를 만듬.  ["Hello World!"]
console.log( o.f() );
*/
const arr = [1,2,3];
arr[1] = getGreeting;   //arr[ 0 , getGreeting() , 2] 와 같다.
arr[1]();   // "Hello World!"
console.log( arr[1]() );

function avg(a,b) {
    return (a+b)/2;
}
console.log( avg(5,10) ); // a = 5, b = 10, 5 + 10 /2 = 7
const a = 5 , b = 10;
console.log( avg(a,b) ); // a + b / 2 = 7 [꼭 매개변수가 함수를 선언할 떼 해야하는 건 아니다.]

function f(x) {
    console.log(`f 내부 : x = ${x}`);
    x = 5; // 함수내부에서만 적용 [ let과 같은 개념(?) ]
    console.log(`f 내부 : x = ${x} (할당 후)`)
}

let x = 3;
console.log(`f를 호출하기전 : x = ${x}`);
f(x);
console.log(`f를 호출한 다음 : x = ${x}`);

// f를 호출하기전 : x = 3
// f 내부 : x = 3
// f 내부 : x = 5           <<= 함수 내부에서 선언한 x와 바깥에 있는 x는 다른 '객체'라고 볼 수 있다.
// f를 호출한 다음 : x = 3

/*
function f(o) {
    o.message = `f 안에서 수정함 ( 이전 값 : '${o.message}')`;
}
let o = { message : "초기 값" };
console.log(`f를 호출하기 전 : o.message = "${o.message}"`);
f(o);
console.log(`f를 호출한 다음 : o.message = "${o.message}"`);
*/

// f를 호출하기 전 : o.message = "초기 값"
// f를 호출한 다음 : o.message = "f 안에서 수정함 ( 이전 값 : '초기 값')"

// 함수안에 있는 변수와 밖에 있는 변수는 다른 객체라고 할 수 있지만
// 함수안에 있는 객체( {} )와 밖에 있는 객체( {} )는 서로 다른 객체이다. 하지만 이 둘은 같은 객체를 가르킨다.
// o.message를 가르킴.

function f(o) {
    o.message = "f에서 수정함"; // 함수 밖에 영향.
    o = { message : "새로운 객체!" }; // 함수 안에서만 해당.
    console.log(`f 내부 : o.message = "${o.message}" (할당 후)`);
}

let o = { message : '초기 값' };
console.log(`f를 호출하기 전 : o.message="${o.message}"`);
f(o);
console.log(`f를 호출한 다음 : o.message="${o.message}"`);

// f를 호출하기 전 : o.message="초기 값"
// f 내부 : o.message = "새로운 객체" (할당 후)
// f를 호출한 다음 : o.message="f에서 수정함"

// 함수내부의 매개변수 o와 함수 밖의 매개변수 o는 서로 다르다.
// f를 호출하면 둘은 같은 객체를 가리키지만 f 내부에서 o에 할당한 객체는 새로운, 전혀 다른 객체이다.
// 함수 바깥의 o는 여전히 원래 객체를 가르킨다.

function getSentence({ subject, verb, object}) {
    return console.log(`${subject} ${verb} ${object}`);
}
const p = {
    subject : "I",
    verb : "love",
    object : "JavaScript",
};

getSentence(p);

function getSentence2([ subject, verb, object]) {
    return console.log(`${subject} ${verb} ${object}`);
}
const arr3 = [ "I", "love", "JavaScrip" ];
getSentence2(arr3);

let arr2 = [1, 2, 3, 4, 5];
console.log(...arr2);
    
function f(x, ...y) {
    // y 는 배열입니다. y 는 배열입니다.
    console.log(y[0], y[1]);
    return (x * y.length);
  };
  console.log(f(3, "hello", true)); //결과값은 6
