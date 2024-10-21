type Rover = {
  x: number;
  y: number;
  direction: string;
  command?: string[];
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
      rovers[j].command = command.split("");
    }
  }
};

const moveRover = (plateau: { x: number; y: number }, rovers: Rover[]) => {
  const plateauLimits = plateau;

  rovers.forEach((rover) => {
    const command = rover.command;
    command?.forEach((instruction) => {
      switch (instruction) {
        case "R":
          moveR(rover);
          break;
        case "L":
          moveL(rover);
          break;
        default:
          //moveM(plateauLimits, rover);
          break;
      }
    });
  });

  console.log(rovers); // preciso retornar um array ou obj com as posições finais dos rovers
  
};

const moveR = (rover: Rover) => {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
};

const moveL = (rover: Rover) => {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
};

const main = (input: string[]) => {
  const plateau = plateauSize(input); // obj com as dimensões do tabuleiro
  const rovers = getRovers(input); // array de obj de type Rover

  // const finalPosition = moveRover(plateau, rovers);

  for (let i = 0; i < rovers.length; i++) {
    const { x, y, direction, command } = rovers[i];
    console.log(`Rover ${i + 1}: ${x} ${y} ${direction} ${command}`);
  } // posso usar esse loop para chamar a função de movimentação dos rovers e talvez encapsular isso em uma função e remover a lógica da main.

  console.log(`The size of the plateau: ${plateau.x} x ${plateau.y}.`);
};

const input = ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"];

main(input);
