const animals = ["뱀","고양이","강아지","토끼"]; 

for(let i =0; i < animals.length;i++){
    console.log(animals[i]);
}
// 콜백함수는 화살표 함수만 사용할 수 있다.
// 고차함수 : 콜백함수가 들어가 있는것 : 매개변수로 함수(화살표함수)를 줘야함

// forEach
console.log("===================");
// for(int num : list){ System.out.println(num)} // 배열의 요소 처음부터 끝까지 가져온다
// val : 배열의 요소를 한개씩 가져와서 순차적으로 이 함수를 호출한것 

animals.forEach((val)=>console.log(val));

function myCallback(num){
    console.log(num)
}
function printAll(arr, callback ){
    for(let i =0; i < arr.length;i++){
        callback(arr[i]);
    }
}
printAll([1,2,3,4,5],myCallback);

let cat ={kind:'고양이',  age:5};
let dog ={kind:'개',  age:4};
let rabbit ={kind:'토끼',  age:0.5};
let hamster ={kind:'햄스터',  age:1};
let pets=[cat,dog,rabbit,hamster, cat];

pets.sort((a,b)=>(b.age - a.age));
console.log(pets);

// find 찾아라 : 속성(key)값이 없거나 value 없다고 에러를 띄우지 않는다 
let res = pets.find((obj)=>obj.owner==='뱀');
console.log(res); //없으면 undefined
res = pets.find((obj)=>obj.kind==='고양이');
console.log(res);
res = pets.findIndex((obj)=>obj.kind==='고양이');
console.log(res); // 첫번째 고양이 인덱스만 나온다 

// 모든 배열의 요소의 조건이 맞으면 true
res = pets.every(obj => obj.kind==='고양이');
console.log(res);
// 모든 배열의 요소의 조건이 한개라도 맞으면 true
res = pets.some(obj => obj.kind==='고양이');
console.log(res);

// 배열의 요소가 조건이 맞으면 따로 새로운 배열빼서 만들어준다 
res = pets.filter(obj=>obj.kind==='고양이');
console.log(res);

res = pets.sort((a,b)=> b.age - a.age);
console.log(res);



let arr=[1,2,3,4,5];
res = arr.map(num=> num*10);
console.log(arr);
console.log(res);
let text = ['hi','abc','ba','toy'];
text.sort();
console.log(text);
let number =[0,5,4,1,100];

number.sort(); // [ 0, 1, 100, 4, 5 ]
console.log(number);
// 오름차순 
number.sort((a,b)=> a - b);
console.log(number);
// 내림차순 
number.sort((a,b)=> b - a);
console.log(number);
// reduce : 감소 : 배열의 요소를 한개로 합침 

res = number.reduce((sum,value)=>{
    console.log(`sum ${sum} , value ${value}`);
    return sum+=value;
},0);

console.log(res);


function generateArr(){
    let arr = new Array(10);
    for(let i =0; i < arr.length;){
        let num = parseInt(Math.random()*10)+1;
        if(!arr.includes(num)){
            arr[i] = num;
            i++;
        }
    }
    return arr;
}

// 1.랜덤하게 배열 1~100 10개 생성 후 2~6번까지 문제 풀기 : 중복값 없어야함
let array = generateArr();
//console.log(array);

// 2. 배열 값 출력 : forEach 사용
array.forEach(num=>console.log(num));

// 3. 배열 값중에 홀수만 따로 배열 만들기 : filter 사용 
let oddArr = array.filter(num=>num%2==1);
console.log(oddArr);
// 4. 배열의 총합 출력 : reduce 사용 
let sum = array.reduce((val,sum)=>sum+=val);
console.log(sum);

// 5. 짝수의 합 출력                reduce((val,sum)=>{return sum+=value;})
sum = array.filter(num=>num%2==0).reduce((val,sum)=>sum+=val);
console.log(sum);
// 6. 오름차순 정렬 
array.sort((a,b)=> a-b);
console.log(array);

// 7. 짝수의 갯수 

res = array.reduce((cnt, val) => {
    if(val%2 == 1){
        return cnt;
    }else{
     return cnt+=1;
    }
}, 0);

console.log(res);

// 문자열 : 유사배열 
function testArr(num1,num2){
    // arguments : 함수 안에서만 존재하는 배열 : 사용자가 입력한 모든 인자값을 이 배열로 가져온다 

    for(let i =0; i < arguments.length;i++){
        console.log(arguments[i]);
    }

    return num1+num2;
}
console.log(arguemnts[0]);
//console.log(testArr());
console.log(testArr(10,20,30,40,50,60));