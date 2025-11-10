export function findCommonElements(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
}
// Example usage:
const array1 = [10, 20, 30, 40, 50];
const array2 = [30, 40, 50, 60, 70];
const common = findCommonElements(array1, array2);
console.log(common);
//# sourceMappingURL=array.js.map