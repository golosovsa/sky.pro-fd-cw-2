const heronArea = (sideA, sideB, sideC) => {
    halfPerimeter = (sideA + sideB + sideC) / 2;
    return Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));
}

console.log(heronArea(1, 1, 1));