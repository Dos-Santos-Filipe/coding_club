
const plateauSize = (input: string[]) => (input.length < 3 ? "Invalid Input. The input must have at least 3 elements: plateau size and start position and commands of at least one rover!" : input[0].split(" "));


const main = (input: string[]) => {
    const plateau = plateauSize(input);





    console.log(plateau);
}

const input = ["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"]; 

main(input);
