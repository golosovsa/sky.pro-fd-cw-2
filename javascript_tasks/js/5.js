function rand10() {
    return Math.ceil(10 * Math.random());
}

for (let counter = 0; counter < 100; counter++) {
    console.log(rand10());
}