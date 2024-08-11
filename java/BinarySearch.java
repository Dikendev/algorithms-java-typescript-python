public class BinarySearch {

    public int binarySearchIteratively (int[] sortedArray, int key, int low, int high) {
      int index = Integer.MAX_VALUE;

      while (low <= high) {
        int mid = low + ((high - low) / 2);

        if(sortedArray[mid] < key) {
          low = mid + 1;
          continue;
        }

        if (sortedArray[mid] > key) {
          high = mid - 1;
          continue;
        }

        if (sortedArray[mid] == key) {
          index = mid;
          break;
        }
      }
      return index;
    }

    public static  void main(String[] args) {
      int[] numbers = {1,2,3,4,5,6,7,8,9,11,15};
      int numberToFind = 16;

      BinarySearch binarySearch = new BinarySearch();

      int result = binarySearch.binarySearchIteratively(numbers, numberToFind, 0,numbers.length - 1);
      String message = result != Integer.MAX_VALUE
          ? String.format("The value is at the index %d", result)
          : "Value not exist in array";
      System.out.println(message);
    }
}