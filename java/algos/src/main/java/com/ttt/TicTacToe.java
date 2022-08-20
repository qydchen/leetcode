package com.ttt;

// Design a game of Tic Tac Toe with a focus on object-oriented programming. Explain the implementation and then create the system.
public class TicTacToe {
    Board board;
    boolean isXTurn;
    boolean isGameOver;

    TicTacToe() {
        this.board = new Board();
        this.isGameOver = false;
    }

    public void startGame() {
        this.isXTurn = true;
        this.isGameOver = false;
    }

    public void setMark(int index, char mark) {
        if (this.isGameOver) {
            throw new Error("Cannot set a mark when game is over");
        }
        if (this.isXTurn && mark != 'X') {
            throw new Error("Invalid mark, it is " + (this.isXTurn ? "X" : "O" + "'s turn"));
        }
        if (!this.isXTurn && mark != 'O') {
            throw new Error("Invalid mark, it is " + (this.isXTurn ? "X" : "O" + "'s turn"));
        }
        if (this.board.set(index, mark)) {
            System.out.println("Set mark" + mark + " at index " + index);
            this.switchTurns();
            System.out.println("Current Turn: " + (this.isXTurn ? "X" : "O"));
            String gameState = this.gameState();
            if (!gameState.equals("Ongoing")) {
                this.isGameOver = true;
                if (gameState.equals("X")) {
                    System.out.println("X wins!");
                }
                if (gameState.equals("O")) {
                    System.out.println("O wins!");
                }
                if (gameState.equals("Draw")) {
                    System.out.println("Game is over! It is a Draw!");
                }
            }
            return;
        }
        throw new Error("Invalid index for mark");
    }

    private boolean switchTurns() {
        this.isXTurn = !this.isXTurn;
        return this.isXTurn;
    }

    public void reset() {
        this.board = new Board();
        this.isXTurn = true;
        this.isGameOver = false;
    }

    public String gameState() {
        return this.board.getGameState();
    }

}
