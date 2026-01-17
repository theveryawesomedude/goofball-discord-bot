module.exports = {
    name: 'rate', // Command name
    description: 'Rates something with fun responses when the bot is mentioned',

    /**
     * Executes the command
     * @param {Message} message - Discord.js message object
     * @param {Array} args - Array of arguments (not needed here)
     */
    execute: async (message, args) => {
        // Ignore bots
        if (message.author.bot) return;

        const client = message.client;

        // Only trigger if bot is mentioned
        if (!message.mentions.has(client.user)) return;

        // Remove the mention from the message
        const contentWithoutMention = message.content.replace(/<@!?(\d+)>/, '').trim();

        // Check if message starts with "rate"
        if (!contentWithoutMention.toLowerCase().startsWith('rate')) return;

        // Get what to rate
        const thingToRate = contentWithoutMention.slice(4).trim();
        if (!thingToRate) return message.reply('Please tell me what to rate!');

        // Generate a random rating 1-10
        const rating = Math.floor(Math.random() * 10) + 1;

        // Fun response templates
        const responses = [
            `epic ${thingToRate} gets ${rating}/10!`,
            `meh... ${thingToRate} only ${rating}/10`,
            `awesome **${thingToRate}** ${rating}/10!`,
            `alright ${thingToRate} is ${rating}/10!`,
            `ok ${thingToRate} is a solid ${rating}/10`,
            `c00l ${thingToRate} is ${rating}/10`,
            `peak ${thingToRate} is ${rating}/10, love it sm`,
            `honestly, ${thingToRate} is ${rating}/10`
        ];

        // Pick a random response
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        // Send the response
        message.reply(randomResponse);

        // Optional debug log (works with PM2)
        console.log(`[RATE COMMAND] ${message.author.tag} asked to rate: "${thingToRate}" → ${rating}/10`);
    },
};

   