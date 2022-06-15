const arrayGenerator = (length) => {
    let result = Array(length);
    for (let index = 0; index < result.length; index++) {
        result[index] = index + 1;
    }
    return result;
}

console.log(arrayGenerator(5).reduce((akk, item) => akk + item, 0));