function genMatr(rows, cols, initValue) {
    let result = [];
    for (let i = 0; i < rows; i++) {
        let row = Array(cols);
        row.fill(initValue);
        result.push(row);
    }
    return result;
}

console.log(genMatr(3, 3, 1));