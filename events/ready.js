// sends a message when you start the scripts
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as: ${client.user.tag}.`);
	},
};