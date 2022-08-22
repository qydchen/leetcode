package com.ttt;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class TicTacToeTest {
    @Test
    public void canPlayAWholeGameXWins() {
        TicTacToe game = new TicTacToe();
        game.startGame();
        char X = 'X';
        char O = 'O';
        game.setMark(4, X);
        game.setMark(0, O);
        game.setMark(1, X);
        game.setMark(3, O);
        game.setMark(7, X);
        assertTrue("Game is over, X wins", game.isGameOver);
        assertEquals("X", game.gameState());
    }

    @Test
    public void canPlayAWholeGameOWins() {
        TicTacToe game = new TicTacToe();
        game.startGame();
        char X = 'X';
        char O = 'O';
        game.setMark(4, X);
        game.setMark(0, O);
        game.setMark(1, X);
        game.setMark(3, O);
        game.setMark(2, X);
        game.setMark(6, O);
        assertTrue("Game is over, O wins", game.isGameOver);
        assertEquals("O", game.gameState());
    }

    @Test
    public void canPlayAWholeGameOngoing() {
        TicTacToe game = new TicTacToe();
        game.startGame();
        char X = 'X';
        char O = 'O';
        game.setMark(4, X);
        game.setMark(0, O);
        game.setMark(1, X);
        game.setMark(3, O);
        game.setMark(2, X);
        assertFalse("Game is ongoing", game.isGameOver);
        assertEquals("Ongoing", game.gameState());
    }

    @Test
    public void canPlayAWholeGameDraw() {
        TicTacToe game = new TicTacToe();
        game.startGame();
        char X = 'X';
        char O = 'O';
        game.setMark(4, X);
        game.setMark(0, O);
        game.setMark(1, X);
        game.setMark(7, O);
        game.setMark(2, X);
        game.setMark(6, O);
        game.setMark(8, X);
        game.setMark(5, O);
        game.setMark(3, X);
        assertEquals("Draw", game.gameState());
        assertTrue("Game is Draw", game.isGameOver);
    }
}
