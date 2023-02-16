function solution(num, total) {
    var answer = [];

    answer.push(Math.floor(total / num));
    if(num % 2 == 0){ 
        answer.push(answer[0] + 1);
    }

    for (let i = 1; i < num; i++) {
        answer.unshift(answer[i -1] - i);
        num % 2 > 0 ? answer.push(answer[i] + i) : answer.push(answer[i + 1] + i);
        if (answer.reduce((a,b) => (a+b)) == total && answer.length == num) break;
    }

    return answer;
}
