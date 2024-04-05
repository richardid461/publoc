class Animal {}
class Dog extends Animal {}

public class InstanceOfExample {
    public static void main(String[] args) {
        Animal animal = new Dog();
        if (animal instanceof Dog) {
            System.out.println("It's a dog.");
        } else {
            System.out.println("It's not a dog.");
        }
    }
}
