// Load discord dependencies.
const Discord = require('discord.js');
const client = new Discord.Client();

// Load modules.
const status = require('./status.js');
const help = require('./help.js');

// Commands
const commands = {"status": status}

client.on('ready', () => {
  client.user.setActivity('/utsc');
})

client.on('message', message => {

  // Parse data from given message.
  // Valid messages will have the form /utsc COMMAND TOKEN ...

  data = message.content.match(/"(?:\\"|\\\\|[^"])*"|\S+/g);

  // Check if prompting bot.
  if(data[0] === "/utsc"){

    token = data[1];
    var returnStr;

    // Check if we have a module for the current command.
    if(commands.hasOwnProperty(token)){
      controller = commands[token];
      returnStr = controller.processCommand(data.splice(2));
    }

    // Otherwise return default help string.
    else{
      returnStr = help.getHelpStr();
    }

    // Send the message.
    message.channel.send(returnStr).catch(err => console.log(err));;

  }

});

client.login(process.env.UTSC_TOKEN);
