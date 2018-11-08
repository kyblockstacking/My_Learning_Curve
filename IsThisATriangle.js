// sum of any two sides must be greater than the third

IsThisATriangle = (a, b, c) => {
    return a+b>c && a+c>b && b+c>a;
};

// examples

// returns true
// 2+4>5 (true), 4+5>2 (true), 2+5>4 (true)
console.log(IsThisATriangle(2, 4, 5))

// returns false
// 1+2>3 (false), 2+3>1 (true), 1+3>2 (true)
console.log(IsThisATriangle(1, 2, 3))