function pow2(pow) {
    if (pow < 0 || typeof pow !== 'number' || pow > Math.floor(pow)) return undefined;
    if (pow === 0) return 1;
    return 2 * pow2(pow - 1);
}

console.log(pow2(0));
console.log(pow2(1));
console.log(pow2(2));
console.log(pow2(3));
console.log(pow2(4));
console.log(pow2(5));
console.log(pow2(6));
console.log(pow2(7));
console.log(pow2(8));
console.log(pow2(9));
console.log(pow2(10));

console.log(pow2(-1));
console.log(pow2(2.5));
console.log(pow2("2.5"));
