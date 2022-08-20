package com.ttt;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class BoardTest {
    @Test
    public void XShouldWin() {
        Board board = new Board();
        char X = 'X';
        char O = 'O';
        board.set(4, X);
        board.set(0, O);
        board.set(1, X);
        board.set(3, O);
        board.set(7, X);
        assertTrue("X should win", board.getGameState().equals("X"));
    }
}
