const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname}*

*╔╭────────────╮╕*
*╭│𝐐𝐔𝐄𝐄𝐍 𝐈𝐒𝐇𝐔 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖👾│─◎◎▷*
*╘╰────────────╯╜*
*╭──────────────*
*│ 💜 වික්ශිප්ත ආකාසත් කියනවා විටෙක දුක්බර කතාවක්🌥️*
*│ 💜 කදුලු ලෙස වැටෙනවා නොව්ව් ද එහි විඩාවත්🌧️*
*│ 💜 දාරාන තවමත් ප්‍රේම කරනවා නොවෙනස්  සූරියකාන්තත්🌻*
*│ 💜 කොච්චර රිදුනත් බලාන ඉන්නවා තවටත් සූර්යයා දිහාත් 🌞*
*│ 💜 පතොකුත් විටෙකදී ඉල්ලනවා නොවෙද සැනසිමට වැහි බින්දුත් 🌵*
*│ 💜 වැස්සත් දන්නවා බලාන ඉන්නවමයි කියන්න පතොකුත් 🌧️🌵*
*│ 💜 හරියට අපි වගේමයි ස්වභාව ධර්මයත් 😊*
*│ 💜 ආදරයෙන් බලාන ඉන්න හැමෝම දවසක එකතු වෙන්න ඕනි ඒක මගෙ පුන්චි ප්‍රාර්ථනාවක්.ආදරයට හරි ආදරයෙන් 💐❤️*
*│ 💜 ස්තූතිය....!*
*⁠⁠⁠⁠╰─────────────*
*╒✦•=====•••••••••======•✦*
*│ CREATER : LAKSIDU NIMSARA*
*│ VERSION : ᴠ.1.0.0*
*│ UPTIME  :  1 hour, 45 minutes, 48 seconds
*│ ʀᴀᴍ ᴜꜱᴀɢᴇ  : 4TB*
*│ HOST NAME : LAKSIDU CLOUD*
*╘✦•=========•••••••••=======•✦*

* ISHU CREAT BY LAKSIDU TECH*`
return await conn.sendMessage(from,{image: {url: `https://i.imgur.com/wzC6N6h.jpeg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
