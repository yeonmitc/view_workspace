    /*  
        배열에 랜덤으로 1 또는 7을 7개 저장한다, 단 7은딱 3개만 저장한다.
        당첨인지 출력하시오.
        당첨은 7이 3개면 당첨이다.
    */

    function setLotto(){
        let arr = new Array(7);
        let cnt=0;
        for(let i =0; i < arr.length; i++){
            let num = parseInt(Math.random()*2); // 0 1 
            if(num ==0 && cnt == 3){
                i--;
                continue;
            }
            if(num == 0){
                arr[i] = 7;
                cnt++;
            }else{
                arr[i] = 1;
            }
            // if(i==arr.length-1&& cnt != 3){
            //     i =0;
            // }
        }
        return arr;
    }
    function checkLotto(arr){
        let cnt =0;
        let check = false;
        for(let i =0; i < arr.length;i++){
            if(arr[i] === 7){
                cnt++;
            }else{
                cnt = 0;
            }
            if(cnt == 3){
                check = true;
                break;
            }
        }
        if(check){
            console.log("당첨");
        }else{
            console.log("꽝");
        }
    }

    let arr= setLotto();
    console.log(arr);
    checkLotto([1,7,7,7,1,1,1]); 

    // 내가 만든 정렬 : 최소값-> 최대값 으로 
    // 거꾸로 저장 : 현재 배열 거꾸로 저장 

    function mySort(arr){
        for(let i =0; i < arr.length;i++){
            console.log(i);
            for(let k =i; k < arr.length;k++){
                if(arr[i] > arr[k]){
                    let temp = arr[i];
                    arr[i] = arr[k];
                    arr[k] = temp;
                }
            }
        }
    }

    function myReverse(arr){
        let idx = arr.length -1;
        for(let i =0; i < arr.length/2; i++){
            let temp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = temp;
            idx-=1;
        }
    }

    let numArr = [1001,3423,23,32123,123];
    mySort(numArr); 
    console.log(numArr); // [23,123,1001,3423,32123]
    myReverse(numArr);
    console.log(numArr);