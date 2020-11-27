import graph.Graph;
import utils.InputReader;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        String pathname = args[0];
        String data = InputReader.read(pathname);
        Graph graph = new Graph(data);
        System.out.println(graph.calculateDistance("ABC"));
        System.out.println(graph.numberOfRoutesBetweenTwoTownsByNumberOfStops("C", "C", 3));
        System.out.println(graph.numberOfRoutesBetweenTwoTownsByDistance("C","C", 30));
        System.out.println(graph.shortestRouteBetweenTwoTowns("A", "C"));
    }
}
