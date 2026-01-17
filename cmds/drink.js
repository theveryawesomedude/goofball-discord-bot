module.exports = {
    name: "drink",
    description: "Replies when someone mentions a drink with a random fun response.",
    async execute(message, client) {
        if (message.author.bot) return;

        const content = message.content.toLowerCase();
        const botMention = `<@${client.user.id}>`;
        const botMentionNickname = `<@!${client.user.id}>`;

        // List of drinks
        const drinks = [
            "coffee",
            "tea",
            "soda",
            "juice",
            "water",
            "milk",
            "beer",
            "wine",
            "cocktail",
            "energy drink"
        ];

        // List of fun responses
        const responses = [
            "mhm gimme some of that bro",
            "yo pour me a sip of that man im thirsty",
            "That looks tasty gimme some",
            "ayy save me a bit",
            "i need a sip of that gimme sum",
            "bro, don’t forget me",
            "cheers m8"
        ];

        // Only respond if the bot is mentioned
        if (
            drinks.some(drink => content.includes(drink)) &&
            (content.includes(botMention) || content.includes(botMentionNickname))
        ) {
            try {
                // Pick a random response
                const response = responses[Math.floor(Math.random() * responses.length)];
                await message.reply(response);
            } catch (err) {
                console.error("Error sending drink reply:", err);
            }
        }
    }
};