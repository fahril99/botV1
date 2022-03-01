let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'jasabot')).buffer(), `
┌─「 BOT STORE 」
│ • premium = 20k
│ • 1 bulan = 15k
│ • 1 minggu = 10k
│
│ • diamond ml/ff
│
│ • untuk all store
│  ketik /store
└────

┌─「 Fitur Bot 」
│ • .menu .? all  
│ • .menu .? audio
│ • .menu .? rpg  
│ • .menu .? game
│ • .menu .? xp  
│ • .menu .? stiker
│ • .menu .? kerangajaib
│ • .menu .? edukasi
│ • .menu .? quotes  
│ • .menu .? admin  
│ • .menu .? news
│ • .menu .? premium
│ • .menu .? nulis
│ • .menu .? internet  
│ • .menu .? quran
│ • .menu .? anonymous  
│ • .menu .? fun
│ • .menu .? image
│ • .menu .? downloader  
│ • .menu .? tools  
│ • .menu .? database  
│ • .menu .? vote  
│ • .menu .? absen  
│ • .menu .? jadibot  
│ • .menu .? owner  
│ • .menu .? host  
│ • .menu .? advanced  
│ • .menu .? info  
│ • .menu .? tanpakategori
│ 
└────

┌─「 Fitur Bot Sekolah 」
│ • Absen
│ • Tugas
│ • Mapel
│ • Guru
│ • brainly
│ • kalkulator, dll
│
│ • Grup fitur:
│ Anti Link
│ Welcome Gambar
│ Anti Toxic
└────

┌─「 jasa run bot 」
│ • jasa run bot heroku
│ • 10k = edit owner
│ • 15k = edit owner+namabot
│ • 30k edit all
└───

┌─「 SCRIPT BOT WA 」
│ • script BoT 
│ wa.me/6285876902820?text=beli+sc+min
└────

┌─「 *TENTANG* 」
│ • Fitur Kurang?
│ • Bisa Di Recode
│ • Minat? Hubungi:
│ • wa.me/6285876902820
└────
`.trim(), footer, 'store', '.store', m)
handler.help = ['jasabot']
handler.tags = ['info']
handler.command = /^(jasabot)$/i

module.exports = handler