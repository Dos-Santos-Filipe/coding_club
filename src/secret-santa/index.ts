type SecretSantaPair = { giver: string; receiver: string };

function shuffleParticipants(participants: string[]): string[] {
  const shuffledParticipants = [...participants];

  return shuffledParticipants.sort(() => Math.random() - 0.5);
}

function secretSanta(participants: string[]): SecretSantaPair[] {
  const shuffledList = shuffleParticipants(participants);

  let giver: string;
  let receiver: string;
  const result = [];

  for (let i = 0; i < shuffledList.length; i++) {
    giver = shuffledList[i];
    receiver = shuffledList[(i + 1) % shuffledList.length];
    result.push({ giver, receiver });
  }

  return result;
}

const participants = ["Andre", "Brad", "Claudia", "Denise", "Emily", "Fabby"];

console.log(secretSanta(participants));
