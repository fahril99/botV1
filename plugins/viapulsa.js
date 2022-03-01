let handler = async (m, { conn }) => {
	conn.reply(m.chat, `┏━━━ꕥ〔 *PEMBAYARAN* 〕ꕥ━⬣
┃✾ *Pulsa (indosat) :* 6285876902820
┗━ꕥ
┏━━━ꕥ〔 *FITUR-FITUR* 〕ꕥ━⬣
┃✾ *Menu Islam*
┃✾ *Menu Edukasi*
┃✾ *Menu Berita*
┃✾ *Menu Game*
┃✾ *Menu Game RPG*
┃✾ *Menu Xp & Level*
┃✾ *Menu Random Image*
┃✾ *Menu Stiker*
┃✾ *Menu Kerang Ajaib*
┃✾ *Menu Quotes*
┃✾ *Menu Admin*
┃✾ *Menu Group*
┃✾ *Menu Premium*
┃✾ *Menu Internet*
┃✾ *Menu Anonymouse*
┃✾ *Menu Nulis & Logo*
┃✾ *Menu Downloader*
┃✾ *Menu Tools*
┃✾ *Menu Fun*
┃✾ *Menu Database*
┃✾ *Menu Vote & Absen*
┃✾ *Menu Pengubah Suara*
┃✾ *Menu Sound Music*
┃✾ *Menu Vn Imute*
┃✾ *Menu Jadi Bot*
┃✾ *Menu Anime*
┃✾ *Menu Info Bot*
┃✾ *Menu Virus/Virtex*
┃✾ *Menu Tanpa Kategori*
┃ ꕥ©2021〘 ${namabot} 〙
┃ Scrip original by fahril
┗━ `.trim(), m)
}

handler.command = /^viapulsa$/i

module.exports = handler
