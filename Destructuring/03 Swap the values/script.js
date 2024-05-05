function swapWithoutTemp(x, y) {
    [x, y] = [y, x];
    return [x, y];
}

let a = 5;
let b = 10;
console.log("Before swapping: a =", a, ", b =", b);

[a, b] = swapWithoutTemp(a, b);
console.log("After swapping: a =", a, ", b =", b);
