public class ArrayAverage {
    public static void main(String[] args) {
        int[] array = {5, 10, 15, 20, 25};
        double sum = 0;
        for (int num : array) {
            sum += num;
        }
        double average = sum / array.length;
        System.out.println("Average of array elements: " + average);
    }
}
