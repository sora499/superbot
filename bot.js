const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA0NjQwOTIyOTM1MjMwNDg0.XqhQvA.8fszAb1qAAcsPrOgxYrtsSqBtdk';

const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online!');
})


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'clear':
            if(!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            break;

        case 'kick':
            if(!ARGS[1]) message.channel.send('You need to specify a person!')

              const user = message.mentions.users.first();

              if(user){
                  const member = member.guild.member(user);

                  if(member0){
                      member.kick('You where kicked for trolling!')
                          message.reply('Succesfully kicked $(user.tag)');
                  break; 
                  }
              }
            


    
           

                }
            
    

            });
// THIS MUST BE THIS WAY

bot.login(process.env.BOT_TOKEN); 
