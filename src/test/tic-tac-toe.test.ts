import {Game, Move} from "../main/tic-tac-toe";

describe('First move', () => {
    it("'X' is a valid first move", () => {
        const game = new Game();
        expect(game.validateMove(Move.X)).toBe(true);

    })
    it("'O' is not valid first move", () => {
        const game = new Game();
        expect(game.validateMove(Move.O)).toBe(false);
    })
    it("'X-0-X-O' is a valid sequence", () => {
        const game = new Game();
        expect(game.validateMove(Move.X)).toBe(true);
        expect(game.validateMove(Move.O)).toBe(true);
        expect(game.validateMove(Move.X)).toBe(true);
        expect(game.validateMove(Move.O)).toBe(true);
    })
    it("A repetition is not a valid move", () => {
        const game = new Game();
        expect(game.validateMove(Move.X)).toBe(true);
        expect(game.validateMove(Move.X)).toBe(false);
    })
})