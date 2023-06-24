function binary_search(array, search) {
    var low = 0;
    var high = (array.length) - 1;
    while (low != high) {
        var middle = Math.ceil((low + high) / 2);
        if (array[middle] > search) {
            high = middle - 1;
        }
        else {
            low = middle;
        }
    }
    if (array[low] = search) {
        return low;
    }
    return undefined;
}
var array_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binary_search(array_numbers, 9));
