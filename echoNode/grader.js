function average (scores){
    var sum = 0;
    scores.forEach(function (score) {
        sum+=score;
    });
    
    var avg = sum/scores.length;

    return Math.round(avg);
}

console.log(average([98, 90, 89, 100, 100, 86, 94]));
console.log(average([40, 65, 77, 82, 80, 54, 73, 63, 95, 49]));