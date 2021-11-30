// actual stock command. it just uses plain text right now, so this file basically acts as a placeholder.
const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stock')
		.setDescription('Sends the current stock.'),
	async execute(interaction) {
		await interaction.reply(fs.readFileSync("stock.txt", "utf8"));
	},
};