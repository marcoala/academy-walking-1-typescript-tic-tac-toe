export enum Player {
    X = "X",
    O = "O",
}

export enum Move {
    tl = 0,
    tm,
    tr,
    ml,
    mm,
    mr,
    ll,
    lm,
    lr
}


export class Game {
    currentPlayer: Player = Player.X

    board: Player[]|null[] = [null, null, null ,null, null, null, null ,null, null];

    move(input: Move) {
        this.validateMove(this.currentPlayer)
        console.log(this.board)
        if (this.board[input] !== null) {
            return false
        }
        this.board[input] = this.currentPlayer
        return true
    }


    validateMove(input: Player) {
        if (input === Player.X && this.currentPlayer === null) {
            this.currentPlayer = input;
            return true;
        }
        if (input === Player.O && this.currentPlayer === null) {
            return false;
        }
        if (input !== this.currentPlayer) {
            this.currentPlayer = input;
            return true;
        }
        return false;
    }
}

