enum Move {
    X ,
    O,
}

export class Game {
    currentMove = null;

    validateMove(input: string) {
        if (input === 'X' && this.currentMove === null) {
            return true;
        }
        if (input === 'O' && this.currentMove === null) {
            return false;
        }
        return false;
    }
}