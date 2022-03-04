let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'script')).buffer(), `
*⚠SCRIPT BOT⚠*


link script bot√

https://youtu.be/9oe4BUWQbew
(enc 3 file) 

buat yang mau no enc√
beli ke nomor wa 6285876902820
harga diskon 20k
30k ? udah di run kan di heroku make cc (credit card) 

`.trim(), footer, 'owner', '.owner', 'thanks', '.tqto', 'menu', '.menu', m)
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|scbot|script)$/i

module.exports = handler
