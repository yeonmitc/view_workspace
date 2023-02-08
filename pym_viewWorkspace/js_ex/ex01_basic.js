//System.out.println("test"); 

console.log("test");
console.log("test");

let num = 10;
console.log(typeof num);
num = "test";
console.log(typeof num);
num = true;
console.log(typeof num);


console.log( 10 + 3);
console.log( 10 - 3);
console.log( 10 * 3);
console.log( 10 / 3);
console.log( 10 % 3);
console.log(Math.pow(10,3));
console.log( 10 ** 3); //es7 : 10의 3승 거듭제곱 

// 자바스크립트에서는 에러로 인식 하지 않음 
console.log( 2 - "test"); // NaN : not number
console.log( 10 / 0); // Infinity : 무한대
console.log( 0/ 10); // 0 
console.log("hello");

// 자바스크립트는  "" '' 동일하다 

console.log(myName);
myName='박연미';
// 백틱 `` : 기울어진 홑따옴표 : 1! 옆에 있다 
let callName = ` 반가워 \n 내이름은 ${myName} 이야.`;
console.log(callName);

// 문자가 먼저오면 다 문자로 인식한다 ! 문자 + => 연결연산자 
console.log( "3" + 10 + 7); // 3107
console.log( "3" + (10 + 7)); // 317

// boolean 값 true/ false 
console.log(0); // number

// 논리연산자서 !표는 false -> true / true -> false 
// 자바스크립트가 거짓값으로 인식하는 데이터들 

console.log(!!0); // 숫자 0 
console.log(!!""); // 문자 빈문자열 
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

console.log(!!10); // 0 제외한 모든 숫자 
console.log(!!-10.123); // 음수도 동일
console.log(!!"test"); // 비어있지 않는 모든 문자 
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

console.log(10 =='10'); // ==(데이터타입 무시) 자동형변환이 되는 데이터 값이면 자동으로 변경해서 값비교 // true
console.log(10 ==='10'); // 자료 + 데이터 타입까지 비교한다 
console.log(true=='true');



let animal; // 변수를 선언만 하고 난 상태 : 이게 무슨값인지 도저히 모름 
console.log("animal= " + animal);

animal = null; // 변수에 null이라는 값이 할당된 상태 : 쓸건데 일부러 비워놨어 


console.log(typeof null); // object : null == 빈 객체 
console.log(typeof undefined); //undefined

// 자바스크립트는 값은 자료형이 존재한다, 변수는 자료형이 존재하지않는다 
// 자바스크립트의 배열은 여러 데이터타입이 들어올 수 있다. 
// 자바스크립트 배열 물리적으로 여러데이터 타입 가능하나 권장 하지 않음!!! ???
// 배열은 같은 자료형 타입끼리 사용하자!!! ?????

let arr =[1,"2",true,NaN,[10,20,30,40]];   // int[] arr = {1,2,3,4,5};

let arr2 = new Array(3);  // int[] arr2 = new int[3];
console.log(arr2); // [ <3 empty items> ]  [empty empty empty]
console.log(typeof arr2[0]); //[undefined undefined undefined]

arr2[0] = 1;              // arr2[0] = 1;
arr2[1] = 2;
arr2[2] = 3;
arr2[3] = 4; // 자바는 indexOutOfBound 에러 발생 부분! 
// 자바스크립트는 자동으로 길이 추가해서 넣어줌 

arr2[5] = 10; // arr[4] = undefined 
console.log(arr2.length);
console.log(arr2);

delete arr2[1]; // 순수하게 값만 삭제 : 해당 번지에 값의 공간은 empty === undefined로 남겨둠 


// 클래스 자료형 타입 사용하는 이유 : 여러 데이터 타입 묶어주기 위해서 

// 자바스크립트의 오브젝트 타입 : { 속성 : 값 }
let kind ='cat';
let name ="다주";
let age = 9;
let isPet = true;
let owerName="연미";

let cat = [kind, name, age, isPet, owerName];

console.log(cat[1]);
// 리터럴 객체 
let daju = {
    kind : 'cat',
    name : '다주',
    age : 9,
    isPet: true,
    ownerName: "연미",
    //likes: ['잠자기','간식먹기','엄마랑 놀기']
}
// 객체 자료형 접근하는 두가지 방법 
// 1. 마침표 표기법 
console.log(daju.kind);
console.log(daju.age);

// 2.대괄호 표기법
console.log(daju['ownerName']); // undefined

// 객체의 속성값 추가하는 방법 
daju['likes'] =['잠자기','간식먹기','엄마랑 놀기']

console.log(daju);

let myName="박연미";
let yourName = myName;
yourName = "아이유";
console.log("myName = " + myName); // 박연미
console.log("yourName = " , yourName); // 아이유 

let dog={
    name:'다롱이'
}
// 객체를 얕은복사 
let otherDog = dog;
otherDog.name="못난이";

console.log("dog= " , dog); // 못난이 
console.log("otherDog = " , otherDog); // 못난이 

