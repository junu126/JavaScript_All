//107 ~ 138 제어문 끝.

let funds = 50 // 시작 조건

// if(funds > 1){
//     console.log("There's money left!");
//     console.log("That means keep playing!");
// } else
//     console.log("I'm broke! Time to quit.");
// 이렇게 ㄴㄴ

// if(funds > 1)
//     console.log("There's money left! keep playing");
// else {
//     console.log("I'm broke!");
//     console.log("Time to quit.");
// }
// 이렇게도 ㄴㄴ    즉. if 와 else쓸때 하나만 블록으로 묶지 마셈 ㅇㅇ

// break = 탈출
// continue = 루프에서 다음 단계로 건너 뜀
// return = 제어문을 무시하고 함수를 빠져나감
// throw = 예외 핸들러에서 반드시 처리해야 할 예외를 일으킴. - 제어문 밖에 있어도 상관 없음.


if(new Date().getDay()===5) { // new Date().getDay()는 현재 요일에 해당하는
    totalBet = 1;             // 숫자를 변환합니다. 0은 일요일 입니다.
    console.log("1")
} else if(funds === 7) {
    totalBet = funds;
    console.log("OMG")
} else {
    console.log("No superstition here!");
}

for(let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp)
    console.log(j);

cons player = {name:'Thoams', rank :'Midshipman', age:25};
for(let prop in player) {
    if(!player.hasOwnProperty(pcop)) continue;
    console.log(prop + ':' + player[prop]);
}