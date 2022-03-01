let handler = async m => m.reply(`
┌─「 BELI PREMIUM 」
│ • perhari 5k
│ • perminggu 10k
│ • perbulan 15k
└────
┌─ 「 FITUR PREMIUM」
│ • Join Gc✓
│ • Bebas Edit Di Gc✓
│ • spamcall
│ • spamchat <no wa>
│ • DLLNya✓
└────
┌─「 *OWNER BOT* 」
│❏ 🪀 wa.me/6285876902820
└────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['beliprem']
handler.tags = ['info']
handler.command = ['beliprem']

module.exports = handler