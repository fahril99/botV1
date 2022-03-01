let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Anak Yang Berbakti Kepada Orang Tuanya*

Anis adalah seorang anak yang sangat berbakti kepada orang tuanya. Ketika ia masih duduk di bangku sekolah dasar, Anis sering sekali membantu orang tuanya, bahkan ia mau berjualan es teh manis dan koran di kereta untuk bisa menutupi kebutuhan sekolahnya. Anis sangat penurut dan mau melakukan semua kebajikan. Ia tidak lupa untuk sholat 5 waktu sehari semalam. Anis merupakan figur anak yang sabar, ia bertekad suatu waktu bisa memberangkatkan kedua orang tuanya pergi haji ke tanah suci.

Sejak duduk di bangku SD, Anis merupakan anak laki-laki yang tidak bisa tinggal diam, ia selalu membantu kedua orang tuanya dan saudara-saudaranya. Ia juga memiliki cita-cita untuk bisa memiliki sebuah warung kelontong kelak ia sudah dewasa nanti.

Ia memang anak yang sangat pandai namun keterbatasan keuangan orang tuanya, ia hanya bisa lulus sampai bangku sekolah menengah tingkat atas, namun ia sadar itu memang kehendak Tuhan dan ia pun menyadari akan keterbatasan orang tuanya, akhirnya iapun berusaha sekuat tenaga untuk bisa membahagiakan orang tuanya.

Sampai pada suatu ketika, ia berhasil meraih sebuah posisi yang sangat bagus disebuah perusahaan, ia pun tidak mau menjadi orang yang sombong, sebab ia pun tahu keberhasilannya yang sudah ia peroleh adalah sebagian besar karena doa dari kedua orang tuanya, dan pada akhirnya iapun bisa memberangkatkan haji kedua orang tuanya dan merasa sangat bersyukur karena apabila ia bisa menjadi anak yang berbaki kepada orang tuanya.

Ringkasan/maknanya : Hikmah dari cerita ini anak islami ini adalah janganlah kau sia-siakan orang tua, jika saat ini mereka masih hidup, pelihara, jaga dan rawatlah mereka, sebab merekalah yang merawat kita sejak kecil sampai sekarang.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*cerpenislam*', 'status@broadcast')
}
handler.help = ['cerpenislam']
handler.tags = ['fun']
handler.command = /^(cerpenislam)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler 