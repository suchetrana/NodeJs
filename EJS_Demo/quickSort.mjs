const quickSort = function sort(arr) {
    if (arr.length <= 1) return arr; // Base case

    const pivot = arr[arr.length - 1]; // Pick last element as pivot
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...sort(left), pivot, ...sort(right)];
};
export default quickSort;
