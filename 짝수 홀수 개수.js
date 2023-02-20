function solution(num_list) {
    var arr = [0,0];
    num_list.forEach(e => {
        arr[e % 2] +=1;  
    });
    return arr;
}

console.log(solution([1, 3, 5, 7]))