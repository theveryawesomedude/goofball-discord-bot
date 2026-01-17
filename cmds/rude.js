module.exports = {
    name: "rude",
    description: "Responds to rude messages with a random comeback when the bot is mentioned.",
    async execute(message, client) {
        if (message.author.bot) return;

        const content = message.content.toLowerCase();
        const botMention = `<@${client.user.id}>`;
        const botMentionNickname = `<@!${client.user.id}>`;

        // List of rude phrases
        const rudePhrases = [
            "shut the fuck up",
            "shut up",
            "fuck off",
            "sybau", // "shut yo bitchass up"
            "fuck you",
            "idiot",
            "kys",
            "clanker",
            "bolt muncher",
            "chrome dome",
            "wireback",
            "bitch",
            "dumbass",
            "asshole",
            "nigger",
            "dickface",
            "shithead",
            "kill your self",
            "kill yourself",
            "die",
            "bitch",
            "No u.",
            "smd twin",
            "Excuse me?",
            "kys man whats wrong with you i have 10 hours sitting here doing nothing",
            "sybau",
            "nah bro",
            "ok and",
            "fuh yourself and shove something up your puh",
            "shit yourself",
        ];

        // List of random comebacks
        const comebacks = [
            "No u.",
            "syfm lil niggadih",
            "smd twin",
            "Excuse me?",
            "kys man whats wrong with you i have 10 hours sitting here doing nothing",
            "sybau",
            "nah bro",
            "ok and",
            "fuh yourself and shove something up your puh",
            "shit yourself"
        ];

        // Only respond if the bot is mentioned
        if (
            rudePhrases.some(phrase => content.includes(phrase)) &&
            (content.includes(botMention) || content.includes(botMentionNickname))
        ) {
            try {
                const response = comebacks[Math.floor(Math.random() * comebacks.length)];
                await message.reply(response);
            } catch (err) {
                console.error("Error sending rude reply:", err);
            }
        }
    }
};