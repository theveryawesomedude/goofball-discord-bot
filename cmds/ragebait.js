const ragebaitPhrases = [
    "Pineapple on pizza is the best thing ever!",
    "Dogs are overrated, cats rule!",
    "Movies are better than video games.",
    "Chocolate belongs in EVERYTHING.",
    "Summer is way better than winter.",
    "Paper books are superior to e-books.",
    "Marvel movies are overrated.",
    "PC gaming is the only true gaming.",
    "Console players are missing out.",
    "Vanilla ice cream is trash.",
    "Socks with sandals are stylish.",
    "Pineapple juice > Orange juice.",
    "Fast food is better than home-cooked meals.",
    "TikTok is ruining the internet.",
    "Pizza should always be eaten cold.",
    "Reality TV is actually entertaining.",
    "Soccer is boring compared to basketball.",
    "Cold showers are better than hot ones.",
    "Streaming movies is better than theaters.",
    "Math is more useful than history.",
    "Sleep is overrated.",
    "AI will eventually be smarter than humans.",
    "Online classes are better than in-person.",
    "Homework should be banned.",
    "Avocado toast is a waste of money.",
    "Fortnite > Minecraft.",
    "Dogs are noisy, cats are peaceful.",
    "Board games are more fun than video games.",
    "Soda > Water any day."
];

module.exports = {
    name: 'ragebait', // command name
    description: 'Sends a random ragebait phrase when triggered by mention and keyword',
    execute(message, args) {
        // Check if the bot is mentioned and message contains "ragebait"
        if (message.mentions.has(message.client.user) && message.content.toLowerCase().includes('ragebait')) {
            const randomPhrase = ragebaitPhrases[Math.floor(Math.random() * ragebaitPhrases.length)];
            message.channel.send(`${message.author}, ${randomPhrase}`);
        }
    },
};