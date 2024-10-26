const gridSize: [number, number] = [10, 10];

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
      neighbourRow < gridSize[0] &&
      neighbourColumn >= 0 &&
      neighbourColumn < gridSize[1]
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

const gameOfLife = (grid: number[][]): number[][] => {
  const newGeneration = grid.map((row) => [...row]);
  for (let i = 0; i < gridSize[0]; i++) {
    for (let j = 0; j < gridSize[1]; j++) {
      const liveNeighbours = verifyNeighbours(grid, i, j);
      newGeneration[i][j] = rulesOfLife(grid[i][j], liveNeighbours);
    }
  }
  return newGeneration;
};

const printGrid = (grid: number[][]): void => {
  for (let row of grid) {
    console.log(row.join(" "));
  }
};

const main = (): void => {
  let grid: number[][] = createGrid(gridSize[0], gridSize[1]);

  console.log(`Initial Generation:`);
  printGrid(grid);

  let generation = 1;
  setInterval(() => {
    grid = gameOfLife(grid);
    generation++;
    console.log(`Generation ${generation}:`);
    printGrid(grid);
  }, 1000);
};

main();
