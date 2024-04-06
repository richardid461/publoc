public class QuadraticEquation {
    public static void main(String[] args) {
        double a = 1, b = 5, c = 6;
        double discriminant = b * b - 4 * a * c;
        double root1, root2;
        if (discriminant > 0) {
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            System.out.println("Roots: " + root1 + ", " + root2);
        } else if (discriminant == 0) {
            root1 = -b / (2 * a);
            System.out.println("Root: " + root1);
        } else {
            System.out.println("No real roots.");
        }
    }
}
