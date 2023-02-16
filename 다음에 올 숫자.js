function solution(common) {
    var answer = 0;
    var n1 = common[common.length - 1]; 
    var n2 = common[common.length - 2];
    var n3 = common[common.length - 3];

    answer = (n1 - n2) == (n2 - n3) ? n1 + (n1 - n2) : n1 * (n1 / n2);
    return answer;
}

