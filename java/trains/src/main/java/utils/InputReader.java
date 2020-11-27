package utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class InputReader {
    public static String read(String pathname) {
        StringBuilder builder = new StringBuilder();
        try {
            File myObj = new File(pathname);
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                builder.append(data);
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
            e.printStackTrace();
        }
        return builder.toString();
    }
}