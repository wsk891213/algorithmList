function solution(n) {
    var half = Math.floor(n/2);
    return half * (half + 1);
}

console.log(solution(10))