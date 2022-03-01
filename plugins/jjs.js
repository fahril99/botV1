let handler = async(m, { conn, args, usedPrefix }) => {
	
let chat = `
 
 
  ╭━━━━━━━━╮
┃⠀⠀⠀●══⠀⠀ ┃
┃████████┃
┃████████┃
┃████████┃
┃████████┃
┃████████┃
┃████████┃
┃████████┃
┃████████┃
┃⠀⠀⠀⠀○⠀⠀⠀ ┃
╰━━━━━━━━╯
 
 
 
 
 
 
`.trim()
m.reply(chat)
}
handler.command = /^(kotak)$/i
 
module.exports = handler