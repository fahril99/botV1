async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  m.reply(users.map(v => '🌟listbot utama🌟\nwa.me/6281914783843?text=.menu\n\n\jadibot=\nwa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'))
}
handler.command = handler.help = ['listjadibot', 'ljb']
handler.tags = ['jadibot', 'ljb']

module.exports = handler
