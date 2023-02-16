function solution(common) {
    var answer = 0;
    var lastNum = common[common.length - 1]; 
    var lastNumPrev = common[common.length - 2];
    var lastNumPrevPrev = common[common.length - 3];

    if((lastNum - lastNumPrev) == (lastNumPrev - lastNumPrevPrev)){
        answer = lastNum + (lastNum - lastNumPrev)
    }else {
        answer = lastNum * (lastNum / lastNumPrev);
    }

    return answer;
}

