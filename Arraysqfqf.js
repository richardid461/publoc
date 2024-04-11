public class StringSplit {
    public static void main(String[] args) {
        String str = "apple,banana,orange";
        String[] parts = str.split(",");
        System.out.println("Splitted array: " + Arrays.toString(parts));
    }
}
