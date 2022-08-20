package com.ttt;

import java.util.Arrays;

public class Board {
    Mark[] grid;

    Board() {
        this.grid = new Mark[9];
    }

    public boolean set(int index, char mark) {
        if (index >= this.grid.length) {
            throw new Error("Cannot Apply a Mark; Out of Bounds");
        }
        if (this.grid[index] != null) {
            return false;
        }
        this.grid[index] = new Mark(mark);
        return true;
    }

    public String getGameState() {
        // either return 'X', 'O', 'Ongoing', 'Draw'
        int[][] winConditionIndices = new int[][] { { 0, 1, 2 }, { 3, 4, 5 },
                { 6, 7, 8 }, { 0, 3, 6 }, { 1, 4, 7 }, { 2, 5, 8 } };
        Mark[][] winConditions = new Mark[8][3];
        for (int i = 0; i < winConditionIndices.length; i++) {
            for (int j = 0; j < winConditionIndices[i].length; j++) {
                int index = winConditionIndices[i][j];
                Mark mark = this.grid[index];
                winConditions[i][j] = mark;
            }
        }
        System.out.println(Arrays.asList(this.grid));
        for (Mark[] winCon : winConditions) {
            if (this.isEvery(winCon, 'X')) {
                return "X";
            }
            if (this.isEvery(winCon, 'O')) {
                return "O";
            }
        }
        boolean isGameOnGoing = false;
        if (isAnyNull(this.grid)) {
            isGameOnGoing = true;
        }
        return isGameOnGoing ? "Ongoing" : "Draw";
    }

    private boolean isEvery(Mark[] marks, char mark) {
        for (Mark m : marks) {
            if (m == null || m.getMark() != mark) {
                return false;
            }
        }
        return true;
    }

    private boolean isAnyNull(Mark[] marks) {
        for (Mark m : marks) {
            if (m == null) {
                return true;
            }
        }
        return false;
    }

}
