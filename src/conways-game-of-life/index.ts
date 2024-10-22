/**
 * Any live cell with fewer than two live neighbours dies (referred to as underpopulation):
    underPopulation = liveNeighbours < 2; 

 * Any live cell with more than three live neighbours dies (referred to as overpopulation):
    overPopulation = liveNeighbours > 3; 

 * Any live cell with two or three live neighbours lives, unchanged, to the next generation:
    survival = liveNeighbours = 3 || liveNeighbours = 2;

 * Any dead cell with exactly three live neighbours will come to life:
    revive = liveNeighbours = 3;  

grid de 5x5 inicialmente, mas pretendo fazer algo dinâmico e escalável. Testar 10 x 10 futuramente.
loop aninhado para criar o grid, considerando que é uma matriz.
 */ 

const createGrid = (rows: number, columns: number): number[][] => {
    const grid: number[][] = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

        }
    }

    return grid;
}

const main = (): void => {
    const initialGrid = createGrid(5, 5); // valor fixo e arbitrário, futuramente receber o input do usuário.
}
