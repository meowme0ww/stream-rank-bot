export default async function handler(req, res) {
  const players = [
    { name: "PlayerOne", tier: "Diamond", rank: "III", lp: 88 },
    { name: "NightWolf", tier: "Master", rank: "I", lp: 165 },
    { name: "Astra", tier: "Platinum", rank: "I", lp: 22 },
    { name: "Storm", tier: "Emerald", rank: "II", lp: 75 }
  ];

  // Sort highest LP first
  players.sort((a, b) => b.lp - a.lp);

  const formatted = players
    .map((p, i) => `${i + 1}. ${p.name} - ${p.tier} ${p.rank} (${p.lp} LP)`)
    .join(" | ");

  res.status(200).json({ message: formatted });
}
