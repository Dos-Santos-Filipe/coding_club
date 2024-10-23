/**
 * Any live cell with fewer than two live neighbours dies (referred to as underpopulation):
    underPopulation = liveNeighbours < 2; 

 * Any live cell with more than three live neighbours dies (referred to as overpopulation):
    overPopulation = liveNeighbours > 3; 

 * Any live cell with two or three live neighbours lives, unchanged, to the next generation:
    survival = liveNeighbours === 3 || liveNeighbours === 2;

 * Any dead cell with exactly three live neighbours will come to life:
    revive = liveNeighbours === 3;  

grid de 5x5 inicialmente, mas pretendo fazer algo dinâmico e escalável. Testar 10 x 10 futuramente.
loop aninhado para criar o grid, considerando que é uma matriz.
 */

const directions = {
  NW: [-1, -1],
  N: [-1, 0],
  NE: [-1, 1],
  W: [0, -1],
  E: [0, 1],
  SW: [1, -1],
  S: [1, 0],
  SE: [1, 1],
};

const createGrid = (rows: number, columns: number): number[][] => {
  const grid: number[][] = [];

  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < columns; j++) {
      grid[i][j] = Math.round(Math.random());
    }
  }

  return grid;
};

const verifyNeighbours = (grid: number[][], i: number, j: number): number => {
  let liveNeighbours = 0;

  for (const direction in directions) {
    const [row, column] = directions[direction as keyof typeof directions];
    const neighbourRow = i + row;
    const neighbourColumn = j + column;
    if (
      neighbourRow >= 0 &&
      neighbourRow < grid.length &&
      neighbourColumn >= 0 &&
      neighbourColumn < grid[1].length
    ) {
      liveNeighbours += grid[neighbourRow][neighbourColumn];
    }
  }
  return liveNeighbours;
};

const rulesOfLife = (cellStatus: number, liveNeighbours: number): number => {
  if (cellStatus === 1 && (liveNeighbours < 2 || liveNeighbours > 3)) {
    return 0; // dead - unerpopulation or overpopulation
  } else if (cellStatus === 0 && liveNeighbours === 3) {
    return 1; // revive
  }
  return cellStatus;
};

const gameOfLife = (grid: number[][]): void => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[1].length; j++) {
      const liveNeighbours = verifyNeighbours(grid, i, j);
    }
  }
};

const main = (): void => {
  const initialGrid = createGrid(5, 5); // valor fixo e arbitrário, futuramente receber o input do usuário.

  console.log(initialGrid);
};

main();
