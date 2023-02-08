// global 전역 scope 


// let 변수 선언 int num = 10; 
// const 상수 선언 : 초기값 선언을 하면 수정 불가능 final int num = 10;
// let , const : 블럭스코프 변수 : 블럭(바디, 영역) 안에 선언되면 해당 영역 안에서만 사용가능 

// var 는 함수 스코프 변수 : 선언된 함수 안에서만 사용가능 , 블럭 무시 



{
    // local scope : 지역 스코프 
    // var는 이름 중복 에러 잡아주지 않음 
    
    // 자바는 없는 변수라는 에러를 발생!! -> 자바스크립트는 자동으로 var 변수 생성해줌 
    mycat ="복다주"; // 변수 키워드가 없으면 자동으로 var 붙어준다 

    console.log(mycat);
    console.log(typeof mycat);

var myName='박연미';
var myName="아이유";
//myName ='아이유';
console.log("지역 스코프 =" , myName);
}
console.log("전역 스코프 =" , myName);

function sayHi(){
    let myName='박연미';
    console.log('안녕 난 ' , myName ,"이야");
}

console.log('안녕 난 ' , myName ,"이야");
sayHi();


const name ='박연미';
name="아이유"

const yeonmi = {name: "박연미"}; // new Object(); yeonmi['name']="박연미";
//yeonmi = {name: "아이유"}; // new Object(); yeonmi['name']="아이유"; -> 새로운 주소로는 변경 불가능
console.log(yeonmi);
yeonmi.name="아이유";
yeonmi['lunch']="샌드위치";
console.log(yeonmi);

// 

function addNum(x ,y){
    return x+y;
}
let x = 10;
let y = 3;
console.log(`${x} + ${y} = ${addNum(x,y)}`)
addNum(10,20);

// 함수에 이름이 없는 함수 : 무명함수 
let callMyName = function (name){
    console.log(name ,"이야");
}
callMyName = name => console.log(name ,"이야");
// 함수 표현식: 함수를 변수의 값으로 사용 : 이름 정의해준 함수는 의미 없다 
// 표현식에서 값으로 선언한 함수는 바로 호출 불가능, 변수(식별자) 를 통해서만 그 함수 호출가능 
// printName("하하");
callMyName("유재석");

// 함수의 표현식은 보통 화살표 함수로 많이 사용한다 
// 1. function 키워드를 생략한다 
// 2. 매개 변수값이 1개면 () 생략가능 , 1개 이상 생략 불가능 
// 3. 함수가 리턴값 1개만 있으면 {} 생략가능 근데 여러줄 있으면 중괄호 생략 불가능 
let multiply = function(a,b){
    return a*b;
}
console.log(multiply(10,3));

let minus = (a,b) => a-b;
console.log(minus(10,3));


// 자바스크립트 랜덤으로 값 가져오기 
//Math.random() --> 0.2180133601533898 : 무작위 0 이하 실수값이 나온다 
// parseInt(실수값) : --> 정수값 
let randomNum = parseInt(Math.random()*10)+1; // (0~9)+1 ==> 1~10
console.log(randomNum);

 
    /*
        1. 1~100 사이의 숫자를 랜덤으로 저장하고 그수가 짝수인지
          홀수인지 출력하는 checkNum 함수를 만든후 호출 
    */

function cehckNum(num){
    if(num % 2==0){
        console.log("짝수");
    }else{
        console.log("홀수");
    }
}
cehckNum(10);
cehckNum(-5);

let checkNum = num => num%2==0? console.log("짝수") : console.log("홀수");
checkNum(10);

   /*  
        배열에 랜덤으로(-100 ~ 100 사이의 홀수 4개를 저장후 전부 홀수인지 검사하는 함수를 만드시오
    */

function setRandom(arr , length){
    // rd.nextInt(끝값 - 시작값 +1)
    for(let i =0; i < length;i++){
        
        let rdNum = parseInt(Math.random()*(201)) - 100;
        if(rdNum%2== 1){
            arr[i] = rdNum;
        }else{
            i--;
        }
    }
}
function checkArr(arr){
    let check = true;
    for(let i =0; i < arr.length;i++){
        if(arr[i]%2 == 0){
            check = false;
            break;
        }
    }

    if(check){
        console.log("전부 홀수입니다");
    }else{
        console.log("전부 홀수가 아닙니다");
    }
}

let arr=[];
setRandom(arr, 4);
console.log(arr);
checkArr(arr);