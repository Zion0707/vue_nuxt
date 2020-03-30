/* 通用的js */
var micrometerLevel = function(num, keep){
    var res = num.toFixed(keep).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return res;
}

export {micrometerLevel}
