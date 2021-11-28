const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stock')
		.setDescription('Sends the current stock.'),
	async execute(interaction) {
		await interaction.reply('Current stock: Chop, Smoke, Diamond, Light, **Venom**');
	},
};