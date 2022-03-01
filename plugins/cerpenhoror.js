let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `

*Penunggu Rumah Nenek*

Sudah beberapa hari ini Lucy menempati kamar barunya di rumah neneknya. Ia pindah karena tempat kerjaannya lebih dekat dengan rumah neneknya di tengah pusat Jakarta. Kamarnya berada di lantai dua.

Di rumah neneknya, sudah dua kali Lucy mengalami kejadian seram, tepatnya di kamarnya sendiri.
Pertama, pada saat malam hari dimana Lucy sudah tertidur pulas tiba-tiba terdengar suara ngorok yang keras dari kamar sebelah. Memang kamarnya bersebelahan dengan kamar om nya kala itu dan hanya disekat olah papan triplek yang tebal dan di pojok atas terdapat potongan papan triplek sehingga terdapat bolongan antara kamarnya dengan kamar om nya itu.
Sesaat Lucy pikir itu suara om nya yang sedang tidur, maka ia pun tidur kembali, tapi setengah jam kemudian ia terbangun karena ingin ke kamar mandi. Saat ia turun ke bawah, Lucy melihat om nya baru pulang kerja, karena shift siang.

“Loh om baru pulang kerja??” tanya Lucy
“Iya, kenapa emang??” jawab om nya
“Terus tadi yang ngorok di dalem kamar om siapa dong?!” tanya Lucy lagi dengan kaget
“Ohh itu, paling yang tunggu kamar di pojokkan” jawab om nya dengan santai
“????”


Kedua, Lucy merasa lelah sekali seharian kerja dan kuliah. Maka setelah sampai rumah dan mandi, ia segera rebahan di kasurnya dan merasakan nikmat yang luar biasa karena bisa meluruskan tubuhnya. Tidak terasa kemudian ia terlelap tidur, bahkan sampai ibunya masuk ke dalam kamarnya pun ia tidak tahu.

Sampai di saat ia terbangun karena ada dua suara anak kecil seperti sedang main di dalam kamarnya dan terdengar ceria suara anak anak itu. Saat Lucy berusaha untuk membalikkan tubuhnya, saat itu ia tertidur menghadap ke tembok, Lucy tidak bisa membalikkan tubuhnya. Terasa berat sekali dan sesak di dadanya. Ia pun berusaha melihat ke arah langit langit kamarnya, ia melihat ada dua bayangan anak kecil sedang berada di atas tubuhnya, berloncat-loncatan tertawa riang. Jelas terdengar suara tertawa cekikian mereka. Lucy semakin merasakan sesak di dada, disaat itu pun ia sadar kalau dirinya ditindih oleh makhluk astral. Berbagai doa pun ia ucapkan dalam hati, bahkan ia sampai berpikir kalau ia tidak bisa selamat karena sesak yang dirasakan di dadanya. Tapi tetap ia berdoa sebanyak banyaknya sampai ia kembali tertidur pulas.

Keesokannya, Lucy menceritakan kejadian itu kepada ayah dan ibunya,
“Mas, itu coba kamarnya Lucy kamu sholatin, supaya jangan gangguin Lucy lagi” ucap ibunya,
“Iya, nanti aku sholat di kamarnya Lucy” jawab ayahnya

Sorenya sampai malam, ayahnya Lucy sholat di kamarnya dan setelah itu, Lucy tidak pernah diganggu lagi oleh mereka. Walaupun kesan seram masih ia rasakan, karena memang di rumah neneknya itu banyak sekali penunggunya.
Bahkan ayahnya bilang, di rumah neneknya itu ada nenek nenek yang berdiam di daerah kamar mandi, tante kunti di kamar ayah dan ibunya, ada penunggu hitam di depan pintu rumah dan di kamar om nya itu dan ada juga yang sekeluarga (ayah, ibu dan anaknya) katanya sih itu bawaan dari kakak iparnya.

“Sekarang udah aman, paling mereka mau kenalan sama kamu aja itu” kata ayahnya sedikit ketawa,
“Eh ..” ucapku,
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*cerpenhoror*', 'status@broadcast')
}
handler.help = ['cerpenhoror']
handler.tags = ['fun']
handler.command = /^(cerpenhoror)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler 