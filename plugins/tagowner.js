let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
@6285876902820 Ada Yang Manggil Tod
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /fahril/i
handler.command = new RegExp

module.exports = handler