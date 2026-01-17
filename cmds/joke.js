module.exports = {
    name: "joke",
    description: "Tells a random joke when someone mentions the bot and uses a keyword.",
    async execute(message, client) {
        if (message.author.bot) return;

        const content = message.content.toLowerCase();

        // Keyword you want to trigger on
        const keyword = "joke";

        // Bot mention formats
        const botMention = `<@${client.user.id}>`;
        const botMentionNickname = `<@!${client.user.id}>`;

        // Must include both mention + keyword
        const mentionedBot =
            content.includes(botMention.toLowerCase()) ||
            content.includes(botMentionNickname.toLowerCase());

        if (mentionedBot && content.includes(keyword)) {

            const jokes = [
                "Why don't skeletons fight each other? They don't have the guts.",
                "I told my computer I needed a break, and it froze.",
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
                "Why did the math book look sad? Because it had too many problems.",
                "Why did the bicycle fall over? Because it was two-tired!",
                "I would tell you a construction joke, but I'm still working on it.",
                "Why can't your nose be 12 inches long? Because then it would be a foot.",
                "Why did the coffee file a police report? It got mugged.",
                "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
                "I told my wife she was drawing her eyebrows too high. She looked surprised.",
                "Cosmetic surgery used to be such a taboo subject.Now you can talk about Botox and nobody raises an eyebrow",
                "My son is studying to be a surgeon,i just hope he makes the cut"
            ];

            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

            try {
                await message.reply(randomJoke);
            } catch (err) {
                console.error("Error sending joke:", err);
                await message.reply("Oops! I couldn't tell a joke right now.");
            }
        }
    }
};