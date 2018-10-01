// Load discord dependencies.
const Discord = require('discord.js');
const client = new Discord.Client();

// Load modules.
const status = require('./status.js');

// Commands
const STATUS = "status"

client.on('ready', () => {
  client.user.setActivity('/utsc');

})

client.on('message', message => {

  // Parse data from given message.
  data = message.content.match(/"(?:\\"|\\\\|[^"])*"|\S+/g);

  // Get which command user wants.
  token = data[1];

});

client.login(process.env.UTSC_TOKEN);
