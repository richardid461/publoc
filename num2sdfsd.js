public class GCDWithEuclideanAlgorithm {
    public static void main(String[] args) {
        int num1 = 48, num2 = 18;
        int gcd = gcd(num1, num2);
        System.out.println("GCD of " + num1 + " and " + num2 + ": " + gcd);
    }

    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
