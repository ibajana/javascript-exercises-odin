const sumAll = function(start,end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if (start < 0 || end < 0) return "ERROR";
    if (start<=end & start>0 & end>0){
        let total=0
    for (var i=start;i<=end;i++){
        total+=i
    }
    return total
    }
    if(start>=end & start>0 & end>0){
        let total=0
    for (var i=start;i>=end;i--){
        total+=i
    }
    return total
    }
    else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
