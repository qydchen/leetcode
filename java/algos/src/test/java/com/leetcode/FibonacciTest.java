package com.leetcode;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class FibonacciTest {
    @Test
    public void sixth() {
        int sixth = Fibonacci.fib(6);
        assertEquals(8, sixth);
    }

    @Test
    public void fortyfive() {
        int fortyfive = Fibonacci.fib(45);
        assertEquals(1134903170, fortyfive);
    }

}
