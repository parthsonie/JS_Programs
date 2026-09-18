// 9. Write a loop to count the number of times 3 appears in [1, 3, 5, 3, 3, 7].

let arr = [1, 3, 5, 3, 3, 7];

function count(arr){
    let occurance = 0;
    let c = arr.map((val)=>{
        if(val==3)
            occurance++;
    })
    console.log(occurance);
}
count(arr);