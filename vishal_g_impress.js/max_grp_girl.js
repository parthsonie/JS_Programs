// Vishal loves running. He often visits his favourite Nehru Park and runs for very long distances. On one such visit he found that the number of girls in the park was unusually high. Now he wants to use this as an opportunity to impress a large number of girls with his awesome speed.

// The track on which he runs is an 
// N
// N kilometres long straight path. There are 
// 𝑎
// 𝑖
// a 
// i

//   girls standing within the 
// ith
// ith kilometre of this path. A girl will be impressed only if Vishal is running at his maximum speed when he passes by her. But he can run at his best speed only for a single continuous stretch of 
// K
// K kilometres. Now Vishal wants to know what is the maximum number of girls that he can impress.

// Input

// 1
// 7 2
// 2 4 8 1 2 1 8
// output = 12
// 12

let g_grp = [2 ,4 ,8 ,1 ,2 ,1 ,8];
let g_covered = [];

function count(g_grp){
    let s_index = 0;
    let l_index = 2;
    while(l_index < g_grp.length){
        let result = 0;
        for(let i = s_index ; i < l_index ; i++){
            result += g_grp[i];
        }
        g_covered.push(result);
        s_index += 1;
        l_index += 1;
    }
    g_covered = g_covered.sort((a,b)=>a-b);
    console.log(g_covered[g_covered.length - 1]);
    
}
count(g_grp);