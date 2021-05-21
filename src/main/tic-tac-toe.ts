export enum Move {
    X,
    O,
}

export class Game {
    currentMove: Move|null = null;

    validateMove(input: Move) {
        if (input === Move.X && this.currentMove === null) {
            this.currentMove = input;
            return true;
        }
        if (input === Move.O && this.currentMove === null) {
            return false;
        }
        if (input !== this.currentMove) {
            this.currentMove = input;
            return true;
        }
        return false;
    }
}