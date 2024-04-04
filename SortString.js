import java.util.Arrays;

public class SortString {
    public static void main(String[] args) {
        String str = "hello";
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        String sortedStr = new String(chars);
        System.out.println("Sorted string: " + sortedStr);
    }
}
