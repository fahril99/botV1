let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Grup fahrilbotz')).buffer(), `
*⚠GRUP BOT⚠*

1. -OFFICIAL BOT WA
  ( https://chat.whatsapp.com/KewYr1eHLkyHFrwOZ8wafN ) 
  
   _*minecraft world country*_
   
𝐆𝐫𝐨𝐮𝐩 𝟏
https://chat.whatsapp.com/HZbq8qBMkgE9hKEWyrBNg3

𝐆𝐫𝐨𝐮𝐩 𝟐
https://chat.whatsapp.com/JTpAvj2373H1VvviPLAsBZ

𝐆𝐫𝐨𝐮𝐩𝟑
https://chat.whatsapp.com/EQSuREjO7jkB93TX5d8yoc

𝐁𝐨𝐧𝐮𝐬
https://chat.whatsapp.com/JzYf2WndR0vIEPV8Wb5JA1

𝙈𝙘𝙬𝙘 
https://chat.whatsapp.com/G2dQdRkOB5g3uJ5a5p3rYy

𝐝𝐢𝐬𝐤𝐮𝐬𝐢 𝐦𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭
https://chat.whatsapp.com/EGzRlGn5PM55tMmpyZc9Ey
-
Kalau linknya gak valid/direset hubungi owner
Be A Smart People
`.trim(), footer, 'Sewa bot', '.sewa', m)
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^(gcbot|grupbot|groupbot)$/i

module.exports = handler