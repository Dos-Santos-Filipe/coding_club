function shuffleParticipants(participants: string[]): string[] {
  const shuffledParticipants = [...participants];

  return shuffledParticipants.sort(() => Math.random() - 0.5);
}

function secretSanta(
  participants: string[]
): { giver: string; receiver: string }[] {
  const shuffledList = shuffleParticipants(participants);

  const result: { giver: string; receiver: string }[] = [];

  for (let i = 0; i < shuffledList.length; i++) {
    const giver = shuffledList[i];
    const receiver = shuffledList[(i + 1) % shuffledList.length];
    result.push({ giver, receiver });
  }

  return result;
}

const participants = ["Andre", "Brad", "Claudia", "Denise", "Emily", "Fabby"];

console.log(secretSanta(participants));
