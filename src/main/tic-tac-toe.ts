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

const horizontalWins = [
    [Move.tl, Move.tm, Move.tr],
    [Move.ml, Move.mm, Move.mr],
    [Move.ll, Move.lm, Move.lr],
]
const verticalWins = [
    [Move.tl, Move.ml, Move.ll],
    [Move.tm, Move.mm, Move.lm],
    [Move.tr, Move.mr, Move.lr],
]
const diagonalWins = [
    [Move.tl, Move.mm, Move.lr],
    [Move.tr, Move.mm, Move.ll],
]

const allWins = [...horizontalWins, ...verticalWins, ...diagonalWins]

export class Game {
    currentPlayer: Player = Player.X

    board: Player[]|null[] = [null, null, null ,null, null, null, null ,null, null];

    move(input: Move) {
        if (this.board[input] !== null) {
            // console.log(this.board)
            return false
        }
        this.board[input] = this.currentPlayer
        if (this.checkWin()) {
            return `${this.currentPlayer} won the game!`
        }
        this.swapPlayers()
        // console.log(this.board)
        return true
    }

    checkWin() {
        for (let index = 0; index < allWins.length; index++) {
            const winningCombination = allWins[index];
            const pos1 = this.board[winningCombination[0]]
            const pos2 = this.board[winningCombination[1]]
            const pos3 = this.board[winningCombination[2]]
            if ((this.currentPlayer === pos1) && (pos1 === pos2) && (pos2 === pos3)) {
                return true
            }
        }
    }

    swapPlayers() {
        this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X
    }
}

