type Rover = {
  x: number;
  y: number;
  direction: string;
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

  return rovers;
};

const main = (input: string[]) => {
  const plateau = plateauSize(input); // obj com as dimensões do tabuleiro
  const rovers = getRovers(input); // array de obj de type Rover

  for (let i = 0; i < rovers.length; i++) {
    const { x, y, direction } = rovers[i];
    console.log(`Rover ${i + 1}: ${x} ${y} ${direction}`);
  }



  console.log(`The size of the plateau: ${plateau.x} x ${plateau.y}.`);
};

const input = ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"];

main(input);
