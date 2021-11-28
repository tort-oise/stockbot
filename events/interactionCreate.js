// sends a log message whenever someone makes a slash command
module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered a command.`);
	},
};