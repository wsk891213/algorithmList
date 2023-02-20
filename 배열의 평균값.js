function solution(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]))