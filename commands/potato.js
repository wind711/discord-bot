const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('potato')
		.setDescription('Test command'),
	async execute(interaction) {
		await interaction.reply('Wow I am pro coder');
	},
};
