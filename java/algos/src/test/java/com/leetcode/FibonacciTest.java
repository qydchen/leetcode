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

    @Test
    public void sixthIterative() {
        int sixth = Fibonacci.fibIterative(6);
        assertEquals(8, sixth);
    }

    @Test
    public void fortyfiveIterative() {
        int fortfive = Fibonacci.fibIterative(45);
        assertEquals(1134903170, fortfive);
    }
}
