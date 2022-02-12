import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameview = new GameView();

document.querySelector(".restart")
    .addEventListener("click", () => {
        onRestartClick()
    })

let titles = document.querySelectorAll(".board-title");
titles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClicked(tile.dataset.index);
    })
})

function onTileClicked(i) {
    //do something
    game.makeMove(i);
    gameview.updateBoard(game);
}

function onRestartClick() {
    game = new Game();
    gameview.updateBoard(game);
}


gameview.updateBoard(game);