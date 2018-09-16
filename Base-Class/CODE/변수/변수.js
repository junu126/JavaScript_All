    // // let currentTempC = 22; //섭씨온도
    // // currentTempC = 22.5;
    // // //let TargetTempC; // let TargetTempC = currentTempC; 와 같다.
    // // let targetTempC, room1 = "conference_room_a", room2 = "lobby";
    // // console.log(room1);
    // // console.log(room2);
    // // console.log(targetTempC);

    // const small = Number.EPSILON;
    // console.log(small);
    // const bigInt = Number.MAX_SAFE_INTEGER;
    // console.log(bigInt);
    // const max = Number.MAX_VALUE;
    // console.log(max);
    // const minInt = Number.MIN_SAFE_INTEGER;
    // console.log(minInt);
    // const min = Number.MIN_VALUE;
    // console.log(min);
    // const nInf = Number.NEGATIVE_INFINITY;
    // console.log(nInf);
    // const non = Number.NaN;
    // console.log(non);
    // const inf = Number.POSITIVE_INFINITY;
    // console.log(inf);

    // console.log(`New in ES6: \` strings.`);

    // let currentTemp = 19.5;
    // // 00b0는 온도를 나타내는 유니코드 코드 포인트입니다.
    // const message = `The current temperature is ${currentTemp}\u00b0C`;
    // console.log(message);

    // const multline = "line1\n"+"line2\n"+"line3"
    // console.log(multline)

    // const multline2 = `line1
    // line2
    // line3`
    // console.log(multline2)

    // const multline3 = `${message}` + `line2`
    // console.log(multline3)

    // const result1 = 3 + '30';
    // const result2 = 3 * '30';
    // console.log(result1);
    // console.log(result2);

    // const obj = {};
    // obj.color = "yellow";
    // obj.backgorund-color="green"

    // obj["not an identifier"] = 3;
    // obj["not an identifier"];
    // obj["color"];
    // obj["background-color"];

const sam1 = {
    name : 'Sam',
    age : 4,
};

const sam2 = { name : 'Sam', age : 4 };

const sam3 = {
    name : 'Sam',
    classification: {
        kingdom : 'Anamalia',
        phylun : 'Chordata',
        class : 'Mamalia',
        order : 'Carnivoria',
        family : 'Felidae',
        subfamily : 'Felinae',
        genus : 'Felis',
        species : 'catus',
    },
};

console.log(sam3.name);
console.log(sam3.classification.phylun);

sam3.speak = function() { return "Meow!" };
console.log(sam3.speak());

delete sam3.speak;
delete sam3.classification;
console.log(sam3.speak);
console.log(sam3.classification);

