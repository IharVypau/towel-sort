// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix != undefined && matrix.length > 0) {
        matrix.forEach((v, i) => {
            !(i & 1) ? result = result.concat(v): result = result.concat(v.reverse());
        });
    }
    return result;
}