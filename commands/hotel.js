const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hotel')
		.setDescription('?'),
	async execute(interaction) {
		await interaction.reply('Trivago.');
	},
}
