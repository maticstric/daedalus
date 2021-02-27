import Generator from './generator.js';

class RandomizedDepthFirstSearch extends Generator {
  constructor(board) {
    super(board);

    console.log('rdfs');
  }

  generate() {
    this.recursiveGenerate(this.cells[20]);
  }

  recursiveGenerate(cell) {
    cell.isWall = false; 

    let neighbors = this.board.neumannNeighborhood(cell);
    let walls = this.neighborWalls(neighbors);

    while (walls.length > 0) {
      let randomIndex = Math.floor(Math.random() * walls.length);
      let randomNeighbor = walls[randomIndex];

      // Delete wall between the two cells
      let cellBetween = this.board.cellBetween(cell, randomNeighbor);
      cellBetween.isWall = false;

      // Call recursively
      this.recursiveGenerate(randomNeighbor);

      // Update the neighbor walls
      walls = this.neighborWalls(neighbors);
    }
  }

  neighborWalls(neighbors) { // Returns neighbors which are walls (haven't been visited)
    let walls = [];

    for (let i = 0; i < neighbors.length; i++) {
      let cell = neighbors[i];
      if(cell.isWall) {
        walls.push(cell);
      }
    }

    return walls;
  }
}

export default RandomizedDepthFirstSearch;
