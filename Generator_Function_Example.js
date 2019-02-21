// example of a genator function

function* generator() {
    yield 'This is the first string';
    yield 'This is the next string';
    yield 'This is the last string';
}
const strings = generator();
console.log(strings.next().value);
// 'This is the first string'
console.log(strings.next().value);
// 'This is the next string'
console.log(strings.next().value);
// 'This is the last string'
console.log(strings.next().value);
// undefined