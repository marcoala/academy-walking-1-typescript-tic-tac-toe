import {Game} from "../main/tic-tac-toe";

describe('First move', () => {
    it("'X' is a valid first move", () => {
        const game = new Game();
        expect(game.validateMove('X')).toBe(true);

    })
    it("'O' is not valid first move", () => {
        const game = new Game();
        expect(game.validateMove('O')).toBe(false);
    })
    it("'A' is not valid first move", () => {
        const game = new Game();
        expect(game.validateMove('A')).toBe(false);
    })
})