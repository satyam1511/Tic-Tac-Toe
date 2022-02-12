export default class GameView {

    updateBoard(game) {
        this.updateTurn(game);

        const winningCombination = game.findWinningCombination();

        for (let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-title[data-index='${i}']`);

            tile.classList.remove("tile-winner");
            tile.textContent = game.board[i];

            let tileType = game.board[i] == 'X' ? "title-x" : "tile-o";

            tile.innerHTML = `<span class ="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`


            if (winningCombination && winningCombination.includes(i)) {
                tile.classList.add("tile-winner");
            }

        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-x");
        let playerO = document.querySelector(".player-o");

        playerX.classList.remove("active");
        playerO.classList.remove("active");


        if (game.turn == 'X')
            playerX.classList.add('active');
        else
            playerO.classList.add('active');
    }
}