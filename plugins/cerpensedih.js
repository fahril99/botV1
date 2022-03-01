let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*mila & emir*

Malam itu, Emir telah datang lebih dulu dan memesan sebuah meja di restoran favoritnya.

Mila menyusul belakangan karena pekerjaan tambahan di kantor membuatnya pulang terlambat.

Setelah hampir satu jam Emir menunggu, Mila akhirnya datang juga.

Di atas meja itu, sudah tersedia sepiring nasi, seporsi bebek panggang, dan sepiring spageti.


 
“Kamu sudah memesankannya untukku?” tanya Mila.

“Iya, kamu selalu bilang suka dengan bebek panggang di restoran ini bukan?” jawab Emir.

“Kamu selalu mengingatnya dengan baik,” jawab Mila lagi sambil melempar senyum.

Emir tidak banyak berkata setelahnya.

Mereka berdua tampak menikmati hidangan itu.

Di tengah acara malam itu, Emir merogoh saku celananya.

Dia telah menyiapkan sekotak cincin emas yang akan dia berikan untuk melamar sang kekasih.

Namun, belum sempat Emir benar-benar mengeluarkan cincin itu, Mila sudah menyelanya terlebih dulu.

“Emir, maaf,” kata Mila.

“Maaf kenapa? Apa yang kau lakukan?” tanya Emir heran.

“Soal Ibu. Dia tidak merestui kita,” kata Mila.

Kotak cincin yang telah digenggam Emir di bawah meja itu pun urung ditunjukkannya kepada Mila.


“Kenapa? Kita telah lama bersama dan saling mencintai. Penghasilan kita juga sudah cukup baik untuk bisa berkeluarga!” kata Emir yang tidak dapat menyembunyikan kecewanya.

“Bukan itu! Kamu sudah tahu kan, masalah kita bukan itu!” jawab Mila sambil menatap mata Emir dengan penuh kesedihan.

“Aku tahu kamu akan menjadi suami yang baik,” lanjut Mila. “Namun, biar bagaimanapun, kamu tidak bisa menjadi imamku di saat tanganmu masih menggenggam rosario,”.

Emir terdiam, spageti yang masih belum habis disantapnya pun dibiarkan mendingin begitu saja.

Dengan berurai air mata, Mila meminta maaf dan meminta Emir melupakannya.

Malam itu menjadi malam terakhir bagi mereka.

Emir masih terdiam saat Mila meninggalkan meja itu.

Gedung restoran yang indah itu menjadi saksi bisu dua jiwa yang saling mencintai tetapi tidak bisa menyatu.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*cerpensedih*', 'status@broadcast')
}
handler.help = ['cerpensedih']
handler.tags = ['fun']
handler.command = /^(cerpensedih)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler 