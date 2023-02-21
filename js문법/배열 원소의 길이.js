function solution(strlist) {
    // var arr = [];
    // strlist.forEach(str => arr.push(str.length));
    // return arr;

    return strlist.map(str => str.length);
}

console.log(solution(["I", "Love", "Programmers."]))