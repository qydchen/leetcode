package graph;

import edge.Edge;

import java.io.IOException;
import java.util.*;

public class Graph {
    private Map<String, List<Edge>> edges = new HashMap<>();
    public Graph (String data) throws IOException {
        if (data.length() < 3) throw new IOException("Input data is incomplete");
        for (String input : data.split(",")) {
            String s = input.trim();
            if (!s.matches("^[A-Za-z]{2}\\d+$")) {
                throw new IOException(String.format("Input is invalid: %s", s));
            }
            String from = String.valueOf(s.charAt(0));
            String to = String.valueOf(s.charAt(1));
            if (from.equals(to)) {
                throw new IOException(String.format("Input locations cannot be equal: %s, %s", from, to));
            }
            int weight = Integer.valueOf(s.substring(2));
            Edge edge = new Edge(from, to, weight);
            if (this.edges.containsKey(from)) {
                this.edges.get(from).add(edge);
            } else {
                this.edges.put(from, new ArrayList<>(Collections.singletonList(edge)));
            }
        }
    }

    public String calculateDistance(String path) {
        if (path.length() == 0) return "NO SUCH ROUTE";
        int distance = 0;
        String[] chars = path.trim().split("");
        for (int i = 0; i < chars.length - 1; i++) {
            List<Edge> paths = edges.get(chars[i]);
            String to = chars[i + 1];
            boolean hasPath = false;
            for (Edge edge: paths) {
                if (edge.getTo().equals(to)) {
                    hasPath = true;
                    distance += edge.getWeight();
                    break;
                }
            }
            if (!hasPath) return "NO SUCH ROUTE";
        }
        return String.valueOf(distance);
    }

    public int numberOfRoutesBetweenTwoTownsByNumberOfStops(String start, String end, int max) {
        if (!this.edges.containsKey(start) || !this.edges.containsKey(end)) return 0;
        List<String> routes = new ArrayList<>();
        this.dfsByStops(start, end, routes, max);
        return routes.size();
    }

    private void dfsByStops(String path, String end, List<String> routes, int max) {
        if (path.length() > max + 1) return;
        String last = path.substring(path.length() - 1);
        if (last.equals(end) && path.length() > 1) routes.add(path);
        for (Edge edge : this.edges.get(last)) {
            this.dfsByStops(path + edge.getTo(), end, routes, max);
        }
    }

    public int numberOfRoutesBetweenTwoTownsByDistance(String start, String end, int max) {
        if (!this.edges.containsKey(start) || !this.edges.containsKey(end)) return 0;
        List<String> routes = new ArrayList<>();
        this.dfsByDistance(start, end, routes, max);
        return routes.size();
    }

    private void dfsByDistance(String path, String end, List<String> routes, int max) {
        String last = path.substring(path.length() - 1);
        if (last.equals(end) && path.length() > 1) {
            if (Integer.valueOf(this.calculateDistance(path)) >= max ) return;
            routes.add(path);
        }
        for (Edge edge: this.edges.get(last)) {
            this.dfsByDistance(path + edge.getTo(), end, routes, max);
        }
    }

    public int shortestRouteBetweenTwoTowns(String start, String end) {
        if (!this.edges.containsKey(start) || !this.edges.containsKey(end)) return 0;
        return this.dfsByShortest(start, end);
    }

    private int dfsByShortest(String from, String end) {
        if (from.equals(end)) return 0;
        int currentShortest = Integer.MAX_VALUE;
        for (Edge edge : this.edges.get(from)) {
            int recurse = this.dfsByShortest(edge.getTo(), end) + edge.getWeight();
            if (end.equals(edge.getTo())) return recurse;
            currentShortest = Math.min(currentShortest, recurse);
        }
        return currentShortest;
    }
}
