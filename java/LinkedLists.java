import java.util.LinkedList;
import java.util.List;

public class LinkedLists {

  public static void main(String[] args) {
    LinkedList<String> list = new LinkedList<>();

    List<String> names = List.of("Diego", "Cristina", "Tutu");

    try {
      addValues(list, names);

      print("LinkedList before: ", list);

      removingValue(list, "Tutu");

      findValue(list, 1);

      changeValue(list, 0, "developer");
      changeValue(list, 1, "java");
      changeValue(list, 5, "no found item");

      capitalizeItens(list);
    } catch (Exception error) {
      System.out.println("Error: " + error.getMessage());
    } finally {
      System.out.println("Exiting");
    }
  }

  public static void addValues(LinkedList<String> list, List<String> itens) {
    if (list == null || itens == null) {
      throw new IllegalArgumentException("List or items cannot be null");
    }

    try {
      boolean addingValues = list.addAll(itens);

      if (!addingValues) {
        System.out.println("Not values where added to the list");
        return;
      }

      System.out.println("Values: "+ itens + " added successfully");
    } catch (Exception error) {
      System.out.println("An error occurred while adding values: " + error.getMessage());
    }
  }

  public static void removingValue(LinkedList<String> list, String item) {
    isListNull(list);

    boolean itemRemoved = list.remove(item);

    if (!itemRemoved) {
      System.out.println("No itens removed");
      return;
    }

    System.out.println(item + " Item removed from list");
    print("LinkedList after: ", list);
  }

  public static void findValue(LinkedList<String> list, int index) {
    isListNull(list);

    try {
      String foundName = list.get(index);
      System.out.println("Item: " + foundName + " found at index: " + index);
    } catch (IndexOutOfBoundsException error) {
      System.out.println("Item not found at index: " + index);
    }
  }

  public static void changeValue(LinkedList<String> list, int indexToChange, String newValue) {
    isListNull(list);

    try {
      String oldValue = list.set(indexToChange,newValue);
      System.out.println("Value: " + oldValue + " change to: " + newValue);
    } catch (IndexOutOfBoundsException error) {
      System.out.println("No item found at index " + indexToChange);
    } finally {
      print("LinkedList after change: ", list);
    }
  }

  private static void capitalizeItens(LinkedList<String> list) {
    isListNull(list);
    list.replaceAll(String::toUpperCase);
    System.out.println("Updated list: " + list);
  }

  private static void isListNull(LinkedList<String> list) {
    if(list == null) {
      throw new IllegalArgumentException("List cannot be null");
    }
  }

  private static void print(String message, LinkedList<String> list) {
    System.out.println(message + list);
  }
}
