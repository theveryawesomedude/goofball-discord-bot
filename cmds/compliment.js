module.exports = {
    name: "compliment",
    description: "Replies with a random compliment when someone mentions the bot and says anything containing 'compliment'.",
    async execute(message, client) {
        if (message.author.bot) return;

        const content = message.content.toLowerCase();
        const botMention = `<@${client.user.id}>`;
        const botMentionNickname = `<@!${client.user.id}>`;

        // Only trigger if message mentions the bot
        if (!(content.includes(botMention) || content.includes(botMentionNickname))) return;

        // Only trigger if message contains the word 'compliment'
        if (!content.includes("compliment")) return;

        // List of compliments
        const compliments = [
            "You’re awesome!",
            "Looking sharp today!",
            "You have a great sense of humor!",
            "You’re really talented!",
            "You light up the room!",
            "You’re a genius!",
            "Your vibe is unmatched!",
            "You’re so cool!",
            "You always know how to make people smile!",
            "You’re incredible!"
        ];

        try {
            // Pick a random compliment
            const compliment = compliments[Math.floor(Math.random() * compliments.length)];
            await message.reply(compliment);
        } catch (err) {
            console.error("Error sending compliment:", err);
        }
    }
};