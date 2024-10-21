type Rover = {
  x: number;
  y: number;
  direction: string;
  command?: string;
};

const plateauSize = (input: string[]) => {
  const sizeArray = input[0].split(" ").map(Number);
  return {
    x: sizeArray[0],
    y: sizeArray[1],
  };
};

const getRovers = (input: string[]) => {
  const rovers: Rover[] = [];
  for (let i = 1; i < input.length; i += 2) {
    const [x, y, direction] = input[i].split(" ");
    rovers.push({
      x: Number(x),
      y: Number(y),
      direction: direction,
    });
  }

  getCommand(input, rovers);

  return rovers;
};

const getCommand = (input: string[], rovers: Rover[]) => {
  for (let i = 2, j = 0; i < input.length; i += 2, j++) {
    const command = input[i];
    if (rovers[j]) {
      rovers[j].command = command;
    }
  }
};

const main = (input: string[]) => {
  const plateau = plateauSize(input); // obj com as dimensões do tabuleiro
  const rovers = getRovers(input); // array de obj de type Rover

  for (let i = 0; i < rovers.length; i++) {
    const { x, y, direction, command } = rovers[i];
    console.log(`Rover ${i + 1}: ${x} ${y} ${direction} ${command}`);
  }

  console.log(`The size of the plateau: ${plateau.x} x ${plateau.y}.`);
};

const input = ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"];

main(input);
