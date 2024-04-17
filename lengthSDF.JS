public class MinElementInArray {
    public static void main(String[] args) {
        int[] numbers = {3, 7, 2, 8, 1, 5};
        int min = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }
        System.out.println("Minimum element in the array: " + min);
    }
}
