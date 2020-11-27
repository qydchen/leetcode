
import graph.Graph;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class GraphTest {
    private Graph graph;

    @Before
    public void setUpGraph() throws IOException {
        String input = "AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7";
        this.graph = new Graph(input);
    }

    @Test
    public void graphSetup() {
        Exception emptyException = assertThrows(IOException.class, () -> {
            new Graph("");
        });
        String expected = "Input data is incomplete";
        assertEquals(expected, emptyException.getMessage());

        Exception sameRepetition = assertThrows(IOException.class, () -> {
            new Graph("XX5, AS5");
        });
        String sameRepetitionMessage = "Input locations cannot be equal: X, X";
        assertEquals(sameRepetitionMessage, sameRepetition.getMessage());

        Exception invalidInput = assertThrows(IOException.class, () -> {
            new Graph("AB, AS5");
        });
        String invalidInputMessage = "Input is invalid: AB";
        assertEquals(invalidInputMessage, invalidInput.getMessage());
    }

    @Test
    public void calculateDistance() {
        assertEquals("9", this.graph.calculateDistance("ABC"), "ABC should be 9");
        assertEquals("34", this.graph.calculateDistance("BCDCDE"), "BCDCDE should be 34");
        assertEquals("NO SUCH ROUTE", this.graph.calculateDistance("AC"), "AC should have no connected routes");
    }

    @Test
    public void numberOfRoutesBetweenTwoTownsByNumberOfStops() {
        assertEquals(2, this.graph.numberOfRoutesBetweenTwoTownsByNumberOfStops("C","C", 3));
        assertEquals(0, this.graph.numberOfRoutesBetweenTwoTownsByNumberOfStops("A","A", 12));
        assertEquals(1, this.graph.numberOfRoutesBetweenTwoTownsByNumberOfStops("E","B", 3));
        assertEquals(0, this.graph.numberOfRoutesBetweenTwoTownsByNumberOfStops("A","Z", 9999));
    }

    @Test
    public void numberOfRoutesBetweenTwoTownsByDistance() {
        assertEquals(7, this.graph.numberOfRoutesBetweenTwoTownsByDistance("C","C", 30));
        assertEquals(0, this.graph.numberOfRoutesBetweenTwoTownsByDistance("C","Z", 9999));
        assertEquals(59, this.graph.numberOfRoutesBetweenTwoTownsByDistance("A","C", 50));
    }

    @Test
    public void shortestRouteBetweenTwoTowns() {
        assertEquals(9, this.graph.shortestRouteBetweenTwoTowns("A","C"), "A to C should be 9");
        assertEquals(5, this.graph.shortestRouteBetweenTwoTowns("A","D"), "A to D should be 5");
        assertEquals(0, this.graph.shortestRouteBetweenTwoTowns("A","Z"), "Z is not a valid route");
        assertEquals(15, this.graph.shortestRouteBetweenTwoTowns("E","D"), "E to D");
        assertEquals(0, this.graph.shortestRouteBetweenTwoTowns("C", "C"), "C to C");
        assertEquals(8, this.graph.shortestRouteBetweenTwoTowns("D", "C"), "D to C");
        assertEquals(8, this.graph.shortestRouteBetweenTwoTowns("C", "D"), "C to D");
    }
}