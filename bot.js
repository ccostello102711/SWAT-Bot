const { Client, GatewayIntentBits } = require('discord.js');
const { readdirSync } = require('fs');
const { join } = require('path');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageTyping,
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Load commands from the 'commands' directory
const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(join(__dirname, 'commands', file));
    client.commands.set(command.data.name, command);
}

// Handle interactions
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.login('YOUR_BOT_TOKEN'); // Replace with your bot token
