def quicksort(arr):
    # that's my base case, array with 1 or 0 are already "sorted"
    if len(arr) < 2:
        return arr
    else:
        # recursive case
        pivot = arr[0]

        # sub-array of all the elements less than the pivot
        less = [i for i in arr[1:] if i <= pivot]

        # sub-array pf all the elements greater than the pivot
        greater = [i for i in arr[1:] if i > pivot]
        return quicksort(less) + [pivot] + quicksort(greater)


arr = [2, 3, 5, 10]
print(quicksort(arr))
