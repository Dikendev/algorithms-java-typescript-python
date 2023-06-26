class BinarySearch():
    
  def search_iterative(self, array, targetNumber):
    low = 0
    high = len(list) - 1
    count = 0

    while low <= high:
      middle = (low + high) // 2
      guess = list[middle]

      if guess == targetNumber:
        print('steps to find: ', count)
        return middle
      if targetNumber < guess:
        count += 1
        high = middle - 1
      else:
        count += 1
        low = middle + 1
    return -1
  
if __name__ == "__main__":
  bs = BinarySearch()
  my_list = [1,3,5,7,9]

  index = bs.search_iterative(my_list, 3) # => 1

  if index != -1:
    print('Number found at index', index)
  else:  
    print('Number not found at index')
    