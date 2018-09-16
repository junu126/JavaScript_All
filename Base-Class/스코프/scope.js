/*function 블록스코프() {
    console.log(`before block`);
    {
        console.log(`inside block`);
        const x = 3;
        console.log(x);     // x = 3
    }

    console.log(`outside block; x=${x}`);   // x는 정의되지 않았습니다.
}

function 변수숨기기() {
    // 스코프가 중첩 안됨.
    {
        //block 1
        const x = 'blue';
        console.log(x);     // "blue"
    }
    console.log(typeof x);    // "undefinde"; x는 스코프 밖에 있습니다. 
    {
        //block 2
        const x = 3;
        console.log(x);     // 3
    }
    console.log(typeof x);    // "undefinde"; x는 스코프 밖에 있습니다.
}

function 변수숨기기2() {
    // 스코프가 중첩 됨.
    {
        //외부 블록
        let x = 'blue';
        console.log(x);    // "blue"
        {
            //내부 블록
            let x = 3;
            console.log(x);    // 3;
        }
        console.log(x);    // "blue"
    }
    console.log(typeof x); // "undefinde"; x는 스코프에 있지 않습니다.
}

function 변수숨기기3() {
    // 스코프가 중첩 됨.
    {
        // 외부 블록
        let x = { color : "blue"};
        let y = x;    // y = color :"blue"
        let z = 3;
        {
            // 내부 블록
            let x = 5;  // x를 숨김
            console.log(x);    // 5;
            console.log(y.color);     // y.color = "blue"
            y.color = "red";
            console.log(z);    // 3;
        }
        console.log(x, color);  // "red"
        console.log(y, color);  // "red"
        console.log(z); // 3
    }
}

함수,클로저,정적스코프
    let globalFunc;
    {
        let blockVar = 'a';
        globalFunc = function() {
            console.log(blockVar);
        }
    }
    globalFunc();   // a

    let f;
    {
        let o = {note : 'Safe'};
        f = function() {
            return o;
        }
    }
    let oRef = f;
    oRef.note = "Not so safe after all!";
*/
/*
// 즉시 호출하는 함수 표현식
(function() {
    //IIFE 바디;    IIFE란? 함수를 선언함과 동시에 바로 실행할 수 있게하는 함수 표현식
})();

//

const message = (function(){
    const secret = "I am a secret!";
    return `The secret is ${secret.length} characters long.`;
})();
console.log(message);

//

const f = (function() {
    let count = 0;
    return function() {
        return `I have been called ${++count} time(s).`;
    }
})
f();    // I have been called 1 time(s).
f();    // I have been called 2 time(s).
// ...

// 함수 스코프와 호이스팅

let var1;
let vaar2 = undefined;

var1;   // undefinde
var2;   // undefinde
undefinedVar;   // undefindeVar 는 정의되지 않았습니다.

*/


/*
x;      // x는 선언되지 않았습니다.
let x = 3;

// let과 var의 차이점; - "var"는 y를 var y보다 위에 사용해도 var y를 위로 끓어와서 사용하기 떄문에 상관이 없다.
//                    - "let"은 x를 var x보다 위에 사용하면 정의가 안된다.
y;  // undefinde
var y = 3;
y;  // 3
*/


/*
// 원래 코드            // JS가 해석한 코드

if(x !== 3) {           var x;
    console.log(y);     var y;
    var y = 5;          if( x !== 3) {
    if ( y === 5) {         console.log(y);
        var x = 3;          y = 5;
    }                       if ( y === 5) {
    console.log(y);             x = 3;
}                           }
if( x === 3) {              console.log(y);
    console.log(y);     }
}                       if( x === 3) {   
                            console.log(y);
                        }

// 언젠가는 var대신 let을 쓰는 세상이 온다.
// var는 위의 형태처럼 코드를 복잡하고, 혼잡하게 만들기 때문.
*/

// 함수 호이스팅
/*
f();    // f
function f() {
    console.log('f');
}

f();    // 선언되지 않았따!
let f = function() {
    console.log('f');
}
*/

//사각지대

/*
//let으로 변수 선언을 하지 않은 코드 (안전)
    if(typeof x === "undefinde") {
        console.log("x doesn't exist or is undefined");
    } else {
        // x를 사용해도 안전한 코드
    }

//let으로 변수 선언을 한 코드 (오류)
    if(typeof x === "undefinde") {
        console.log("x doesn't exist or is undefinde");
    } else {
        // x를 사용해도 안전한 코드
    }
    let x = 5;

*/

//스트릭트 모드 (엄격 모드)
/*
    strict모드는 전체 스크립트 또는 각각의 함수에 적용된다.
    스코프에는 적용되지 않는다.
    적용방법은 함수를 시작할 때 'use strict'; 또는 "use strict";를 붙인다.
    EX)

    (function() {
        'use strict';

        // 코드를 전부 이 안에 작성
        // 이 코드는 스트릭트 모드로 동작하지만,
        // 이 코드와 함께 동작하는 다른 스크립트는
        // 스트릭트 모드에 영향을 받지 않는다.
    })();

*/
