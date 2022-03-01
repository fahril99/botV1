let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Sore Hari di Pantai Kuta*

Namaku Malika Nattaya. Orang asli Bali. Sekarang aku sedang di Pantai Kuta. Menikmati angin sore. Sore ini sangat cerah. Aku menulis sesuatu di pasir menggunakan kayu. ‘Malika dan Erin’ itu yang kutulis.

Erin adalah sahabatku. Nama lengkapnya adalah Erina Matthew. Sekarang dia sudah menemui sang kuasa. Aku teringat kejadian itu. Mataku mengalir.

“Malika!!!” Erin berteriak saat aku sedang menangis di pantai ini. Aku tidak menghiraukannya.

“Hey! Kenapa kau menangis?” Tanyanya.

“Baju ibu hanyut di laut” kataku. Aku takut dimarahi ibu.


 
“Akan aku ambilkan!” Erin melepas bajunya.

Dengan leging dan kaus ia berenang ke laut, padahal waktu itu sudah hampir malam. Aku terus menunggu dengan cemas. Sampai seorang nelayan datang menghampiriku.

“Adek ngapain malam-malam di sini?” Tanyanya.

“Bapak akan melaut? Tolong carikan teman saya, dia dari sore belum kembali” aku dengan gelisah menjelaskan.

Bapak itu mengangguk. Aku disuruh menunggu di rumahnya.

Esok pagi bapak itu kembali dengan Erin.

Aku sangat senang. Tapi raut wajah bapak itu tidak senang.

“Maaf dek, teman adek sudah ditemukan mengambang di air. Dan dia sudah pergi” bapak itu berkata dengan wajah tertunduk.

Aku tak percaya akan hal ini. Sahabatku pergi karena aku! Aku menyesali perbuatanku untuk tidak melarangnya. Aku menangis sejadi-jadinya saat itu.

Kini pantai ini adalah saksi bisu persahabatan kami, dan untuk pengorbanan Erin. Semoga kau tenang di sana Erin!

Selamat Jalan, Erin!
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*cerpenpersahabatan*', 'status@broadcast')
}
handler.help = ['cerpenpersahabatan']
handler.tags = ['fun']
handler.command = /^(cerpenpersahabatan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler 