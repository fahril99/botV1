let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/e2a9c1963a04a2f6f3c02.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "fahrilbotz",
        "description": `
*fahrilbotz*
        
1 Grup / 30 Hari
Rp. 20,000 Dana/pulsa  permanen
Rp. 15,000 Pulsa/dana 1 bulan

upgrade premium? 
Rp. 15,000 Dana/pulsa

tertarik? hubungi:
@6285876902820
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "Klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4696956640315324"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4696956640315324",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6285876902820@s.whatsapp.net"
        },
        "footerText": "wa.me/628587690282"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['simpel', 'katalog']
handler.tags = ['main']
handler.command = /^simpel|katalog)$/i

module.exports = handler
