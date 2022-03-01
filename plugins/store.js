let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `store fahrilbotz

📱 Akun WhatsApp Indonesia: 
💰 Harga : Rp. 10.000,- / Akun

💭 Spam Whatsapp
💰 Harga : Rp. 15.000,- / 100 Message (𝙫𝙞𝙧𝙩𝙚𝙠) 

🖲️ Host by fahril ahmad

minat coba? 
Hubungi wa.me/6285876902820

 1 Oktober 2021
`.trim()
  const button = {
        buttonText: 'beli diamond',
        description: kontol,
        sections:  [{title: "silahkan di pilih", rows: [
        {title: 'diamond ml', description: "100% amanah+murah", rowId:"#dmml"},
        {title: 'diamond ff', description: "100% amanah+murah", rowId:"#dmff"},
        {title: 'Owner', description: "", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['info', 'main']
handler.command = /^(store)$/i
handler.help = ['store']
module.exports = handler

//ubah aja