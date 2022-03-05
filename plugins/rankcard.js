let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let fs = require('fs')

let handler  = async (m, { conn, text }) => {
	
let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let name = conn.getName(m.sender)
try {
  } catch (e) {

  } finally {
let res = `http://hardianto.xyz/api/rankcard?profile=https://i.ibb.co/fv6fZmd/RadBot.jpg&name=${name}&bg=https://i.ibb.co/fv6fZmd/RadBot.jpg/images-76.jpg&needxp=${max}&curxp=${exp}&level=${level}&logorank=https://i.ibb.co/Wn9cvnv/FABLED.png`
let caption = `
*❏ Your Profile!:*
*❏ Name:* ${name}
*❏ Role :* ${role}
*❏ Level:* ${level}
*❏ Exp :* ${exp} --> ${max}
*❏ limit:* ${limit}
`
conn.send2ButtonImg(m.chat, await (await fetch(res)).buffer(), caption, '© fahril', 'dompet', '.my', 'push xp', '.?game', m)
} 
    
    }
handler.help = ['rank', 'rankcard']
handler.tags = ['info']
handler.command = /^(rank|rankcard)$/i

handler.register = true
handler.fail = null

module.exports = handler
