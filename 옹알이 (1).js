function solution(babbling) {
    var answer = 0;
    var regExp = /^(aya|ye|woo|ma)+$/;

    babbling.forEach(element => {
        if(regExp.test(element)) answer++
    });

    return answer;
}

var babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];

console.log(solution(babbling));