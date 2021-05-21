import {Game, Move, Player} from "../main/tic-tac-toe";

describe('First turn', () => {
    it("'X' is a valid first turn", () => {
        const game = new Game();
        expect(game.validateMove(Player.X)).toBe(true);

    })
    it("'O' is not valid first turn", () => {
        const game = new Game();
        expect(game.validateMove(Player.O)).toBe(false);
    })
    it("'X-0-X-O' is a valid sequence", () => {
        const game = new Game();
        expect(game.validateMove(Player.X)).toBe(true);
        expect(game.validateMove(Player.O)).toBe(true);
        expect(game.validateMove(Player.X)).toBe(true);
        expect(game.validateMove(Player.O)).toBe(true);
    })
    it("A repetition is not a valid turn", () => {
        const game = new Game();
        expect(game.validateMove(Player.X)).toBe(true);
        expect(game.validateMove(Player.X)).toBe(false);
    })
})

describe("Move test", () => {
    it("A player can only move to an unoccupied space", () => {
        const game = new Game();
        expect(game.move(Move.tl)).toBe(true);
        expect(game.move(Move.tl)).toBe(false);
    })
})