from binary_search import BinarySearch
import unittest
import json
import time

binarySearch = BinarySearch()

# get all list from a file
with open("python/items.json", "r") as file:
  data = json.load(file)

# setting all values to variables
simple_list = data["simple_list"]
list_with_10_items = data["list_with_10_items"]
list_with_100_items = data["list_with_100_items"]
list_with_1000_items = data["list_with_1000_items"]

class TestBinarySearch(unittest.TestCase):
    
  def setUp(self):
    print("......... %s" % self._testMethodName)

  def test_binary_search_simple_list(self):
    # Arrange
    item, expected_index = 3, 1

    # Act
    index = binarySearch.search_iterative(simple_list, item) # => 1

    # ASSERT
    self.assertEqual(expected_index, index) #> 1 == 1
  
  def test_search_for_nonexistent_item(self):
    item, expected_result = 100, -1

    index = binarySearch.search_iterative(simple_list, item) # => -1

    self.assertEqual(expected_result, index)

  def test_binary_search_and_linear_search_execution_time(self):
    item, expected_index = 9887, 990

    # Time search
    start_time = time.time()
    binary_search_index = binarySearch.search_iterative(list_with_1000_items, item) # => None
    binarySearch_total_time = time.time() - start_time

    start_time = time.time()
    linear_search_index = list_with_1000_items.index(item)
    linear_search_total_time = time.time() - start_time

    self.assertEqual(expected_index, binary_search_index)
    self.assertEqual(expected_index, linear_search_index)
    self.assertTrue(binarySearch_total_time < linear_search_total_time)

    print("--- Time required to search item at the ending ---")
    print("--- Linear Search %f seconds ---" % (linear_search_total_time))
    print("--- Binary Search %f seconds ---" % (binarySearch_total_time))

if __name__ == '__main__':
  unittest.main()