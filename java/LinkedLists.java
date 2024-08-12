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

      changeValueList(list, 1, "java");
      changeValueList(list, 0, "developer");
      changeValueList(list, 5, "no found item");
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
    try {
      boolean itemRemoved = list.remove(item);

      if (!itemRemoved) {
        System.out.println("No itens removed");
        return;
      }

      System.out.println(item + " Item removed from list");
    } catch (IndexOutOfBoundsException error) {
      System.out.println("Something goes wrong");
    } finally {
      print("LinkedList after: ", list);
    }
  }

  public static void findValue(LinkedList<String> list, int index) {
    try {
      String foundName = list.get(index);
      System.out.println("Item: " + foundName + " found at index: " + index);
    } catch (IndexOutOfBoundsException error) {
      System.out.println("Item not found");
    }
  }

  public static void changeValueList(LinkedList<String> list, int indexToChange, String newValue) {
    if(list == null) {
      System.out.println("List cannot be null");
      return;
    }

    try {
      String data = list.set(indexToChange,newValue);
      System.out.println("Value: " + data + " change to: " + newValue);
    } catch (IndexOutOfBoundsException error) {
      System.out.println("No file modified");
    } finally {
      print("LinkedList after: ", list);
    }
  }

  private static void print(String message, LinkedList<String> list) {
    System.out.println(message + list);
  }
}
