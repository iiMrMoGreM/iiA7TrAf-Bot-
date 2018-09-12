const Discord = require('discord.js');
const jimp = require('jimp');
const client = new Discord.Client();
const dateFormat = require('date-format');
const Canvas = require('canvas');
const moment = require('moment');
moment.locale('ar-TN');
const prefix = '$'


client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' ','iiMrMoGreM | << ','By ','iiA7TrAf Games Bot',''];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/D.JPEI`);
    }, ms);

});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message',async message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return
  let ms = require('ms');
  let args = message.content.split(' ');
  let mention = message.mentions.users.first();
  let m = message.content.split(' ').slice(2);
  let duration = args[2];
  let reason = args.slice(3).join(' ');
  let mute = message.guild.roles.find('name', 'Muted') || message.guild.roles.find(r => r.name === 'Muted');
  if(message.content.startsWith(prefix + "mute")) {
    if(message.content.split(' ')[0] !== `${prefix}mute`) return;
    try {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`**:milky_way:| ${message.author.username}, أنت لا تملك الخصائص الكافية**`);
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`**:milky_way:| ${client.user.username}, أنا لا املك الخصائص الكافية**`);
    if(!mute) message.guild.createRole({name: 'Muted', permissions: 0}).then(r => message.guild.channels.filter(r => r.type === 'text').forEach(a => a.overwritePermisions(r, {SEND_MESSAGES: false, ADD_REACTIONS: false})));
    if(!mention) return message.channel.send(`**:milky_way:| ${message.author.username}, يجب عليك منشنة شخص**`);
    if(!duration) return message.channel.send(`**:milky_way:| ${message.author.username}, يجب عليك تحديد وقت زمني . \`مثال : -mute @iAmYouseFx 1h مزعج\`**`);
    if(!args[2].match(/[1-7][s,m,h,d,w]/)) return message.channel.send(`**:milky_way:| حدد وقت زمني صحيح . \`مثال : -mute @iAmYouseFx 1h مزعج\`**`);
    if(!reason) reason =  'غير محدد';
      let time;
  time = duration.replace('w', ' اسبوع');
  time = duration.replace('d', ' يوم');
  time = duration.replace('h', ' ساعة');
  time = duration.replace('m', ' دقيقة');
  time = duration.replace('s', ' ثانية');

    message.guild.member(mention).addRole(mute);
    message.guild.member(mention).setMute(true);
    message.channel.send(`**:white_check_mark:| ${mention.username}, لقد تم اعطائك ميوت**`);
    setTimeout(() => {
      message.guild.member(mention).removeRole(mute).catch(console.error);
      message.guild.member(mention).setMute(false).catch(console.error);
      message.channel.send(`**:white_check_mark:| ${mention.username}, تم فك الميوت عن العضو**`);
    }, ms(duration));
    } catch(e) {
      if(e) console.error(e);
    }
  }
});
   


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/*جميع الحقوق محفوظهه لريبل ولسيرفر كودز
رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
سو روم بأسم log 
أو غيره من الكود عشان يرسل هنا التحذير
nvm i 10 
nvm use 10
npm i discord.js
*/
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });




client.on('message', message =>{
  let args = message.content.split(' ');

if(args[0] === `${prefix}emoji`){
let findEmoji = args[1];

if(!findEmoji || findEmoji === '') return  message.reply(`**أدخل الايموجي**`);

let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);

if(isNaN(EmojiId)) return message.reply(`**لم استطع العثور على الايموجي المطلوب**`);

let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;

let EmojiEmbed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`Link Emoji ${findEmoji}`)
.setURL(`${EmojiURL}`)
.setImage(`${EmojiURL}`)

message.channel.send({ embed  : EmojiEmbed });

};
});







client.on('message', function(msg) {
    
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });




client.on('message', message => {

  if (message.content.startsWith( prefix + "sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("470462805011726336").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });



client.on('message', message => {
    if (message.content.startsWith("Link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ✅    تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});


  client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})







client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'clear')) {
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("اعلى حد للمسح هو 100").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("ااختر كمية المسح من 1-100").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` تم المسح`).then(messages => messages.delete(5000));
  }
  });





client.on("message", message => {
  
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });


client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`اهلاً و سهلاً :raised_hand::skin-tone-1: :smiley:` , `welcome :raised_hand::skin-tone-1: :smiley:`)
        .setDescription(`منور السيرفر يا حلو :blush:` , `welcome to the server :blush:`)
        .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
        .setFooter('==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', '💜𝓦𝓮𝓵𝓬𝓸𝓶𝓮💜')
    if (!channel) return;
    channel.send({embed : embed});
    });


    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', '💜𝓦𝓮𝓵𝓬𝓸𝓶𝓮💜')
    if (!channel) return;
    channel.send({embed : embed});
    }) 


var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "𝓲𝓲𝓐𝟕𝓣𝓻𝓐𝓯 𝓖𝓪𝓶𝓮𝓼")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', '💜𝓦𝓮𝓵𝓬𝓸𝓶𝓮💜');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "𝓲𝓲𝓐𝟕𝓣𝓻𝓐𝓯 𝓖𝓪𝓶𝓮𝓼")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(` ♥ **تم دعوته من قبل ${Invite.inviter} ♥ `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});




client.on("message", message => {

              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });




client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})


client.on('message', async message => {
  if(message.content.startsWith(prefix + "vc")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});

const fs = require('fs');
   const math = require('math-expression-evaluator');   
client.on('message', message => {
if (message.content.startsWith(prefix + 'calc')) {
    if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
           var Canvas = module.require('canvas');
           var jimp = module.require('jimp');
   
    const w = ['./math.png'];
   
            let Image = Canvas.Image,
                canvas = new Canvas(802, 404),
                ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
            ctx.filter = 'bilinear';
            ctx.antialias = 'subpixel';
            ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                if (err) return console.log(err);
                let BG = Canvas.Image;
                let ground = new Image;
                ground.src = Background;
                ctx.drawImage(ground, 0, 0, 802, 404);
   
    })
        let args = message.content.split(" ").slice(1);
       const question = args.join(' ');
   if (args.length < 1) {
       message.reply('Specify a equation, please.\n\ Ex: #calc 5+5 ' );
} else {    let answer;
   try {
       answer = math.eval(question);
   } catch (err) {
       message.reply(`Error: ${err}`);
   }
var ment = message.mentions.users.first();
           var getvalueof;
           if(ment) {
             getvalueof = ment;
           } else {
             getvalueof = message.author;
           }
                                          let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                            jimp.read(url, (err, ava) => {
                                                if (err) return console.log(err);
                                                ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                    if (err) return console.log(err);
                                                                             
                           
                                                    ctx.font = '42px Arial Bold';//Name ,_,
                                                    ctx.fontSize = '50px';
                                                    ctx.fillStyle = "#ffffff";
                                                    ctx.fillText(`${answer}`,108, 130);
                                                    
                                                    
                                                     ctx.font = '25px Arial Bold';//Name ,_,
                                                    ctx.fontSize = '30px';
                                                    ctx.fillStyle = "#ffffff";
                                                    ctx.fillText(`${question}`,105, 90);

                           
                                ctx.beginPath();
                                ctx.stroke();
                              message.channel.sendFile(canvas.toBuffer());
                           
                           
                         
                           
                            })
                           
                            })
}
}
});










client.on('message', message => { 
    
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Morro Bot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });

	







let points = {}


client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'فكك')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
$points لمعرفة نقطاك الرجاء كتابة **`);

console.log(`[Typing] ${collected.first().author} typed the word.`);
            let userData = points[message.author.id];
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
            console.log('[Typing] Error: No one type the word.');
          })
        })
    })
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    let userData = points[message.author.id];
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setColor('#000000')
    .setDescription(`نقاطك: \`${userData.points}\``)
    message.channel.sendEmbed(embed)
  }

  
});




client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = { 
        points: 0,
      };
    if (message.content.startsWith(prefix + 'ايموجي')) { 
        if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
const type = [
    {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/72/twitter/134/face-with-look-of-triumph_1f624.png",
        "answers": ["😤"]
    },
    {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/baby_1f476.png",
        "answers": ["👶"]
    },
    {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/see-no-evil-monkey_1f648.png",
        "answers": ["👺"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/flag-for-yemen_1f1fe-1f1ea.png",
        "answers": ["🇾🇪"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/comet_2604.png",
        "answers": ["☄"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/trident-emblem_1f531.png",
        "answers": ["🔱"]
    },
        {
        "type": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/134/fleur-de-lis_269c.png",
        "answers": ["⚜️"]
    }

];
    const item = type[Math.floor(Math.random() * type.length)]; 
    const filter = response => { 
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
   message.channel.send({embed: new Discord.RichEmbed().setTitle('لديك ثانيه للاجابه بالجواب الصحيح').setThumbnail(`${item.type}`)}).then(function(m) {
             setTimeout(function() {
m.edit({embed: new Discord.RichEmbed().setTitle('لديك 15 ثانيه للاجابه بالجواب الصحيح').setThumbnail('https://images-ext-2.discordapp.net/external/lLOYcLfSQaNo_5Ex0I-gBD5lIW-FfRXO-W_-ZxSpYLA/https/i.imgur.com/iReHvIZ.png?width=100&height=100')})
             }, 1000)
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
            .then((collected) => {
            message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة الايموجي بالوقت المناسب**`);
            console.log(`[Game] ${collected.first().author} Answered with the correct answer`);
                let won = collected.first().author;
                points[won.id].points++;
              })
              .catch(collected => { 
                message.channel.send(`:x: **لم يقم أحد بكتابة الايموجي بالوقت المناسب**`);
                console.log(`[Game] No one answered the correct answer`);
                    })
            })
    }
    });







client.on('message', message => {
  if(message.content.startsWith(prefix + "صراحة")) {
    let mention = message.mentions.users.first();
    let args = message.content.split(' ').slice(2).join(' ');
    let filter = s => s.author.id === message.author.id;

    var msg;

    if(!mention) return message.channel.send(':x:| **منشن الشخص المطلوب ارسال الرسالة له**');
    if(mention === client.user) return message.channel.send(':x:| **لا يمكنني ارسال رسالة لنفسي**');
    if(mention.bot) return message.channel.send(':x:| **لا يمكنك ارسال الرسالة لبوت**');
    if(mention === message.author) return message.channel.send(':x:| **لا يمكنك مصارحة نفسك**').then(m => { m.delete(3500)});
    if(mention && !args) {
      message.delete();
      message.channel.send(`⚒| **\`عملية اعادة البناء\` انت لم تقم بكتابة الرسالة  اكتبها الان .. امامك 30 ثانية**`).then(m => {
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        }).then(collected => {
          msg = collected.first().content;
          collected.first().delete();
          try {
            m.edit(':white_check_mark:| **تم ارسال الصراحة**');
            mention.send(`${mention}, لقد تم مصارحتك\n» الرسالة : ${msg}\n» التاريخ : ${moment().format('MMM Do YY')}`);
          } catch(e) {
            message.channel.send(':x:| **لم استطع ارسال الرسالة**');
          }
        });
      });
    } else if(mention && args) {
      message.delete();
      try {
        message.channel.send(':white_check_mark:| **تم ارسال الصراحة**');
        mention.send(`${mention}, لقد تم مصارحتك\n» الرسالة : ${args}\n» التاريخ : ${moment().format('MMM Do YY')}`);
      } catch(e) {
        console.log(e);
        message.channel.send(':x:| **لم استطع ارسال الرسالة**');
      }
    }
  }
});







client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            if(collected.first().content > 180) return message.channel.send(':heavy_multiplication_x:| **الوقت لا يزيد عن 180 دقيقة .. `يتم حساب الوقت بالدقائق ان كنت لا تعلم`**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('✨');
                     setTimeout(() => {
                       let users = m.reactions.get("✨").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});



client.on('message',async message => {
if(message.content === "r") {
if(message.author.id !== '398834288851943444') return;
if(message.guild.id !== '467745278087135252') return;
let ir = message.guild.roles.find(r => r.name === 'Muted');
message.guild.channels.forEach(r => {
r.overwritePermissions(ir, {
SEND_MESSAGES: false,
ADD_REACTIONS: false,
SPEAK: false,
CONNECT: false
});
});
}
});



client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '467745278087135252') return;
  let role = member.guild.roles.find('name', '💙「 𝓜𝓮𝓶𝓫𝓮𝓻𝓼 」 💙');

  member.addRole(role);
});




client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
    client.user.setStatus("dnd")
});
let points = JSON.parse(fs.readFileSync('./typing/typePTS.json', 'utf8')); 

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  };
if (message.content.startsWith(prefix + 'سرعة')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./typing/type.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لكتابة الكلمة**').then(msg => {
	let embed = new Discord.RichEmbed()
	.setColor('#000000')
	.setFooter("سرعة كتابة | لرؤية مجموع نقاطك اكتب $نقاطي |", 'https://c.top4top.net/p_814rjkod1.png')
	.setDescription(`**قم بكتابة : ${item.type}**`) 
	
	msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة الكلمة بالوقت المناسب**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لم يقم أحد بكتابة الجملة بالوقت المناسب**`);
			console.log(`[Typing] Error: No one type the word.`);
          })
		})
	})
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("بوت سرعة الكتابة", 'https://c.top4top.net/p_814rjkod1.png')
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./typing/typePTS.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});
client.on('guildCreate', guild => {
	console.log(`Added to a server by: ${guild.owner.user.username} || Server name: ${guild.name} || Users: ${guild.memberCount}`); 
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.addField("$سرعة","**لبدأ لعبة سرعة الكتابة**")
	.addField("$نقاطي","**لعرض النقاط الخاصة بك**")
	.setFooter("بوت سرعة الكتابة", 'https://c.top4top.net/p_814rjkod1.png')
	.setDescription(`Programmed by: \`NoName Team\`
	
	\`TestaLagusa⁶⁹♆#2010\``)
	message.channel.sendEmbed(embed).then(m => m.delete(10000));

}
});


client.login(process.env.BOT_TOKEN);
