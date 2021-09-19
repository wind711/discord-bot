const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const MAX_MESSAGES = 100

module.exports = {
  data: new SlashCommandBuilder()
    .setName('purge')
    .setDescription('Remove the most recent x messages')
    .addIntegerOption(option =>
      option.setName('number')
        .setDescription('number of messages to remove')
        .setRequired(true)),
  async execute(interaction) {
    await purge(interaction);
  },
};

async function purge(interaction) {
  const numMessagesToRemove = interaction.options.getInteger('number')
  const channel = interaction.channel

  const embed = new MessageEmbed().setTitle('Purge')

  const removedMessages = await channel.bulkDelete(Math.min(numMessagesToRemove, 100))

  if (numMessagesToRemove > MAX_MESSAGES) {
    embed.setColor('#fde953')
      .setDescription(`Warning: cannot remove more than 100 at a time (discord limit), removed ${removedMessages.size} messages.`)
  } else {
    embed.setColor('#42b983')
      .setDescription(`Successful: removed ${removedMessages.size} messages`)
  }

  return interaction.reply({
    ephemeral: false, // Show publicly
    embeds: [embed],
  });
}
