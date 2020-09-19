/*
    Many real world situations can be modelled as a graph when directed edges where some
    evens must occur before others.

    Suppose you're a student at university X and you want to take Class H, then you
    must take classes A, B, D and E as prerequsities. In this sense there is an ordering
    on the nodes of the graph.

                Class C
            /           \
    Class A                 Class J
            \           /
                Class D
            /           \
    Class B     Class E ->   Class H
            \
                Class F ->  Class I

    The only type of graph which has a valid topological ordering is a Directed Acyclic Graph
    (DAG). These are graphs with directed edges and no cycles.
*/
