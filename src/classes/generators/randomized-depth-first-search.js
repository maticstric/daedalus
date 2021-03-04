import Generator from './generator.js';

class RandomizedDepthFirstSearch extends Generator {
  async generate() {
    let stack = [];

    let startingCell = this.cells[this.board.cols + 1]
    startingCell.isWall = false;
    startingCell.isVisited = true;
    stack.push(startingCell);

    while (stack.length !== 0) {
      while (this.paused) {
        await new Promise(resolve => setTimeout(resolve, 300));
      }

      let currentCell = stack.pop();

      let unvisitedNeighbors = this.unvisitedNeighbors(currentCell);

      if (unvisitedNeighbors.length !== 0) {
        stack.push(currentCell);

        let randomIndex = Math.floor(Math.random() * unvisitedNeighbors.length);
        let randomNeighbor = unvisitedNeighbors[randomIndex];

        this.board.cellBetween(currentCell, randomNeighbor).isWall = false;

        randomNeighbor.isVisited = true;
        randomNeighbor.isWall = false;
        stack.push(randomNeighbor);

        this.board.show();

        if (this.speed < 1) {
          await new Promise(resolve => setTimeout(resolve, (1 - this.speed) * 1000));
        }
      }
    }
  }

  delay = ms => new Promise(res => setTimeout(res, ms));

  unvisitedNeighbors(cell) { // Returns neighbors which haven't been visited
    let neighbors = this.board.neumannNeighborhood(cell);
    let unvisitedNeighbors = [];

    for (let i = 0; i < neighbors.length; i++) {
      let c = neighbors[i];
      if(!c.isVisited) {
        unvisitedNeighbors.push(c);
      }
    }

    return unvisitedNeighbors;
  }
}

export default RandomizedDepthFirstSearch;
