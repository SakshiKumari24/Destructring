function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
}
const numbers = [1, 2, 3, 4, 5, 3, 4, 6, 7, 1];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);
