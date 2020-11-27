package edge;

public class Edge {
    private final int weight;
    private final String from;
    private final String to;

    public Edge(String from, String to, int weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }

    public int getWeight() {
        return weight;
    }

    public String getFrom() {
        return from;
    }

    public String getTo() {
        return to;
    }
}
