const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone:true});
bot.on("ready", async () => {
    console.log('Dabot is online!');
    bot.user.setActivity("Runescape EX DE", {type: 1})
    
});
let dabcount=2;
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type =="dm") return;
    let prefix = "/";
    let messageArray= message.content.split(" ");
    let cmd = messageArray[0];
    let args= messageArray.slice(1);
   
    if (message.content.startsWith('/kick')) {
       console.log('Kick command');
       const user = message.mentions.users.first();
       console.log(` Target Id: ${user} `);
       if(user=='<@232965161575645184>'){dabcount= dabcount+1};
       console.log(`Tokens left ${dabcount}`);
       if(dabcount<2) {return message.reply("This is so sad. You ran out of kicks!");}
       if(!message.member.hasPermission("MANAGE_ROLES")) {return message.reply("Lul no");} 
       console.log('has perm');
       if(!user) {return message.reply('User not found. Please @mention the person you want kicked.');}
       const member = message.guild.member(user); 
       console.log(`Kick target located ${user}`);
       if(user=='<@483023524215390218>') {return message.reply('Wow...Rood.');}
       if(!member) {return message.reply(`Who the hell is ${member}?`);}
       let VC = member.voiceChannel;
       console.log(`Kick target located at ${VC}`);
       if(VC=='undefined') {return message.reply('Target was not found');}
       console.log('Kick target is in the server');
       member.setVoiceChannel('483251552744898580');
       const timer = Math.floor(Math.random()*(30000-10000+1)+10000);
       console.log(`Kick target timed for ${timer}`);
       setTimeout(function(){member.setVoiceChannel(VC)},timer);
       dabcount= dabcount-1;
       console.log('Dabed on');
       message.reply(`He got Dabed on!`);
       console.log(`Tokens left ${dabcount}`);
       if(message.mentions.users.first().id==232965161575645184){return console.log(`SAADI OMEGA LuL`);}
       setTimeout(function(){dabcount++},360000);
       setTimeout(function(){console.log(`Tokens left ${dabcount}`)},360000);
       return console.log('----------')
    }
    if (message.content.startsWith('/dab')) {
        console.log('Dab command');
        console.log(`Role requested by ID: ${message.member.id}`);
        if(message.member.id!='232965161575645184') return message.reply("Lul no");    
        console.log('has perm');
        message.member.addRole('359062773025472523')
        console.log('Role added');
        message.delete(10000)
        console.log('Cmd message delete in 10 sec');
        return console.log('----------')
    }
});
client.login(process.env.NDgzMDIzNTI0MjE1MzkwMjE4.DmNfSQ.mUh-oR-QIQVG4Qo-ogeCMZto5Ig);
