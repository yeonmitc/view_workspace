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
console.log( 10 ** 3); //es7 : 10�� 3�� �ŵ����� 

// �ڹٽ�ũ��Ʈ������ ������ �ν� ���� ���� 
console.log( 2 - "test"); // NaN : not number
console.log( 10 / 0); // Infinity : ���Ѵ�
console.log( 0/ 10); // 0 
console.log("hello");

// �ڹٽ�ũ��Ʈ��  "" '' �����ϴ� 

console.log(myName);
myName='�ڿ���';
// ��ƽ `` : ������ Ȭ����ǥ : 1! ���� �ִ� 
let callName = ` �ݰ��� \n ���̸��� ${myName} �̾�.`;
console.log(callName);

// ���ڰ� �������� �� ���ڷ� �ν��Ѵ� ! ���� + => ���Ῥ���� 
console.log( "3" + 10 + 7); // 3107
console.log( "3" + (10 + 7)); // 317

// boolean �� true/ false 
console.log(0); // number

// �������ڼ� !ǥ�� false -> true / true -> false 
// �ڹٽ�ũ��Ʈ�� ���������� �ν��ϴ� �����͵� 

console.log(!!0); // ���� 0 
console.log(!!""); // ���� ���ڿ� 
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

console.log(!!10); // 0 ������ ��� ���� 
console.log(!!-10.123); // ������ ����
console.log(!!"test"); // ������� �ʴ� ��� ���� 
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

console.log(10 =='10'); // ==(������Ÿ�� ����) �ڵ�����ȯ�� �Ǵ� ������ ���̸� �ڵ����� �����ؼ� ���� // true
console.log(10 ==='10'); // �ڷ� + ������ Ÿ�Ա��� ���Ѵ� 
console.log(true=='true');



let animal; // ������ ���� �ϰ� �� ���� : �̰� ���������� ������ �� 
console.log("animal= " + animal);

animal = null; // ������ null�̶�� ���� �Ҵ�� ���� : ���ǵ� �Ϻη� ������� 


console.log(typeof null); // object : null == �� ��ü 
console.log(typeof undefined); //undefined

// �ڹٽ�ũ��Ʈ�� ���� �ڷ����� �����Ѵ�, ������ �ڷ����� ���������ʴ´� 
// �ڹٽ�ũ��Ʈ�� �迭�� ���� ������Ÿ���� ���� �� �ִ�. 
// �ڹٽ�ũ��Ʈ �迭 ���������� ���������� Ÿ�� �����ϳ� ���� ���� ����!!! ???
// �迭�� ���� �ڷ��� Ÿ�Գ��� �������!!! ?????

let arr =[1,"2",true,NaN,[10,20,30,40]];   // int[] arr = {1,2,3,4,5};

let arr2 = new Array(3);  // int[] arr2 = new int[3];
console.log(arr2); // [ <3 empty items> ]  [empty empty empty]
console.log(typeof arr2[0]); //[undefined undefined undefined]

arr2[0] = 1;              // arr2[0] = 1;
arr2[1] = 2;
arr2[2] = 3;
arr2[3] = 4; // �ڹٴ� indexOutOfBound ���� �߻� �κ�! 
// �ڹٽ�ũ��Ʈ�� �ڵ����� ���� �߰��ؼ� �־��� 

arr2[5] = 10; // arr[4] = undefined 
console.log(arr2.length);
console.log(arr2);

delete arr2[1]; // �����ϰ� ���� ���� : �ش� ������ ���� ������ empty === undefined�� ���ܵ� 


// Ŭ���� �ڷ��� Ÿ�� ����ϴ� ���� : ���� ������ Ÿ�� �����ֱ� ���ؼ� 

// �ڹٽ�ũ��Ʈ�� ������Ʈ Ÿ�� : { �Ӽ� : �� }
let kind ='cat';
let name ="����";
let age = 9;
let isPet = true;
let owerName="����";

let cat = [kind, name, age, isPet, owerName];

console.log(cat[1]);
// ���ͷ� ��ü 
let daju = {
    kind : 'cat',
    name : '����',
    age : 9,
    isPet: true,
    ownerName: "����",
    //likes: ['���ڱ�','���ĸԱ�','������ ���']
}
// ��ü �ڷ��� �����ϴ� �ΰ��� ��� 
// 1. ��ħǥ ǥ��� 
console.log(daju.kind);
console.log(daju.age);

// 2.���ȣ ǥ���
console.log(daju['ownerName']); // undefined

// ��ü�� �Ӽ��� �߰��ϴ� ��� 
daju['likes'] =['���ڱ�','���ĸԱ�','������ ���']

console.log(daju);

let myName="�ڿ���";
let yourName = myName;
yourName = "������";
console.log("myName = " + myName); // �ڿ���
console.log("yourName = " , yourName); // ������ 

let dog={
    name:'�ٷ���'
}
// ��ü�� �������� 
let otherDog = dog;
otherDog.name="������";

console.log("dog= " , dog); // ������ 
console.log("otherDog = " , otherDog); // ������ 

