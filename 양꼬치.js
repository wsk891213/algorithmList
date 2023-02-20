function solution(n, k) {
    return (n * 12000) + ((k - (n / 10)<<0) * 2000);
}

console.log(solution(64, 6))