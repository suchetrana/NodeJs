const bubbleSort = function sort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) break;
    }
    return arr;
}

const insertionSort = function Sort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    return arr;
}

// Example
console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));

module.exports.bubbleSort = bubbleSort;
module.exports.insertionSort = insertionSort;

