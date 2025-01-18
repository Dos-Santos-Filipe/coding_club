const participants = ["Andre", "Brad", "Claudia", "Denise", "Emily", "Fabby"];

function shuffleParticipants(participants: string[]): string[] {
  const shuffledParticipants = [...participants];

  return shuffledParticipants.sort(() => Math.random() - 0.5);
}

function secretSanta(participants: string[]): void{
  const shuffledList = shuffleParticipants(participants);
  const result = [];

  for (let i = 0; i < shuffledList.length; i++) {
    let giver = shuffledList[i];
    let receiver = shuffledList[(i + 1) % shuffledList.length];
    result.push({ giver, receiver });
  }

  console.log(result);
}

secretSanta(participants);
