// Load environment variables
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Map to store commands
const cmds = new Map();

// Path to commands folder
const commandsPath = path.join(__dirname, 'cmds');

// Read all .js files in cmds/
let cmdFiles = [];
try {
    cmdFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
} catch (err) {
    console.error("Error reading cmds folder:", err);
    process.exit(1);
}

if (cmdFiles.length === 0) console.warn("No command files found in cmds folder!");

for (const file of cmdFiles) {
    try {
        const command = require(path.join(commandsPath, file));
        if (!command.name || typeof command.execute !== 'function') {
            console.warn(`Skipped ${file}: missing name or execute function`);
            continue;
        }
        cmds.set(command.name, command);
        console.log(`✅ Loaded command: ${command.name}`);
    } catch (err) {
        console.error(`❌ Failed to load ${file}:`, err);
    }
}

console.log(`🔹 Total commands loaded: ${cmds.size}`);

// Bot ready event
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Message listener
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    for (const command of cmds.values()) {
        try {
            await command.execute(message, client);
        } catch (err) {
            console.error(`Error executing command ${command.name}:`, err);
        }
    }
});

// Login using token from .env
if (!process.env.BOT_TOKEN) {
    console.error("Error: BOT_TOKEN is not defined in .env");
    process.exit(1);
}

client.login(process.env.BOT_TOKEN);
