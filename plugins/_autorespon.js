let fs = require('fs')
let handler = m => m

handler.all = async function (m, { conn, isBlocked }) {

    if (isBlocked || m.fromMe || m.chat.endsWith('broadcast')) return
    let set = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag 
    if (m.isGroup) {
        if (m.mentionedJid.includes(this.user.jid)) {
            await this.send2Button(m.chat,
                isBanned ? 'fahrilbotz tidak aktif' : banned ? 'kamu dibanned' : 'fahrilbotz aktif',
                '© fahrilbotz',
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi', m)
        }
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `╭─❑ 
│✾ *3 hari* : *5.000,00*
│✾ *1 minggu* : *Rp 10.000*
│✾ *1 Bulan* :      *Rp 15.000*
│✾ *Permanen* : *Rp 20.000*
│✾ *Premium* :   *Rp 15.000,00*
│✾ *tipe sc bot* :        *multi device*
│
│═〘 PEMBAYARAN 〙 ═
│✾  Dana, Dan Pulsa
│
│✾ Tertarik Untuk Beli Bot Ini?
│✾Ketuk Tombol Di Bawah Ya
│
│✾ © fahril ahmad
│✾ Scrip original by fahril ahmad
│✾〘 ${namabot} 〙 ═
╰❑

sewabot? hubungi owner
`.trim(), '© fahrilbotz', 'Pemilik Bot', ',#owner', m)
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }

    // backup db
    if (set.backup) {
        if (new Date() * 1 - set.backupTime > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            set.backupTime = new Date() * 1
        }
    }

}

module.exports = handler