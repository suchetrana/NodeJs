export const linearSearch = function serach(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return false;
}
export  const binarySearch = function serach(arr, x) {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        let mid = (l + r) / 2;
        if (arr[mid] === x)
            return mid;

        if (arr[mid] < x) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return undefined;
}

