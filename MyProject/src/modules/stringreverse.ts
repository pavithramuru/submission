// Generic reverse function
function reverse<T>(input: T[] | string): T[] | string {
    return typeof input === "string"
        ? [...input].reverse().join("")
        : Array.isArray(input)
        ? [...input].reverse()
        : (() => { throw new Error("Input must be an array or string"); })();
}

// Returns array of first n square numbers
const square = (n: number) => Array.from({ length: n }, (_, i) => (i + 1) ** 2);

console.log("int arr reverse..", reverse([11, 22, 33, 44]));
console.log("string reverse...", reverse("You can't see me"));
console.log("fn result reverse...", reverse(square(10)));

const num = 57;
console.log("reverse of a number...", Number(reverse(num + "")));
