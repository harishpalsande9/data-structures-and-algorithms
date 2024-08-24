package Java.Loop;

import java.util.Scanner;

public class Nstars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input
        int n = scanner.nextInt();

        // Print n stars horizontally
        for (int i = 0; i < n; i++) {
            System.out.print("* ");
        }
        System.out.println();

        // Print n stars vertically
        for (int i = 1; i < n; i++) {
            System.out.println("*");
        }

        scanner.close();
    }
}
