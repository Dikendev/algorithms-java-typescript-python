def findSmallest(arr):
  smallest = arr[0]   # < store the smallest value
  smallest_index = 0  # < store the index of the smallest value

  for index in range(1, len(arr)):
    if arr[index] < smallest:
      smallest = arr[index]
      smallest_index = index
    
    return smallest_index

def selectionSort(arr):
  newArr = []

  for index in range(len(arr)):  
    smallest = findSmallest(arr)
    newArr.append(arr.pop(smallest))
  
  return newArr

print(selectionSort([5,3,6,2,10]))