public class LargestNumberInArray {
    public static void main(String[] args) {
        int[] array = {10, 30, 20, 50, 40};
        int largest = array[0];
        for (int num : array) {
            if (num > largest) {
                largest = num;
            }
        }
        System.out.println("Largest number in the array: " + largest);
    }
}
