// 자바스크립트 : 함수 값:=> 변수 값, 매개변수 , 
// 콜백함수 : 콜백 callback : 내가 나중에 다시 부를께  

// 콜백함수 : 함수의 매개변수 콜백함수 사용하면, 
//그 해당함수 콜백 함수 호출부분 위임 

function say_welcome(name){
    console.log(`반갑습니다 ${name}님`);
}

//say_welcome("박연미");

function say_bye(name){
    console.log(`안녕히가세요 ${name}님`);
}
//say_bye("아이유");

function intro(lastName,fristName,callback){
    let fullName = lastName + fristName;
    callback(fullName);
}
// say_welcome 콜백 함수로 사용됨 
// 콜백함수는 자기자신을 호출 x => 남에게 호출권을 넘겨준다 
intro("박","연미",say_welcome);
intro("아","이유",say_bye);
intro("유","재석", name=>console.log(name));