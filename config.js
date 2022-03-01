// thank you to ALLAH Swt
//tq nurutumo (creator) (mastah:v) 
//tq ariffb (stikerin) (mastah:v) 
//tq fahril (fahrilbotz) (bisa dibilang 🗿) 

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/LgVZAb0emPrDMxU41qOjvj', ''] // ganti jadi group lu
global.owner = ['6285876902820','6285876902820'] // Put your number here //owner eval
global.kontak = ['6285876902820','6285876902820'] //Ketika ada yang ngetik #owner
global.mods = ['6285876902820'] // Want some help?
global.prems = ['6285876902820','6285876902820','6285876902820'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'cb15ed422c71a2fb' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'cb15ed422c71a2fb',
  'https://api.lolhuman.xyz': 'Zynxz.lt',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
} //note sc gw enc beberapa di plugins dll ada lumayan kallo mau yang no enc beli //30k udah dapet N0 enc 100% ke wa.me/6285876902820

lolkey = 'Zynxz.lt'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'fahril ahmad'
namagithub = 'Fahrilahmad'
kasihcaption = `Nih kak`
namakontak1 = 'fahril one'
namakontak2 = 'fahril two'
caption = 'Nih Kak'

// Sticker WM
global.packname = 'By fahril' // ganti aja
global.author = 'fahrilbotz' // ganti aja


bc = 'fahrilbotz' //fahril Broadcast
footer = '\n©fahril'
namabot = 'fahrilbotz'
namalu = 'fahril'


// 
wait = '_*?wait kak!?...*_'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'fitur nsfw dinonaktifkan oleh !owner.'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='

// Ubah saja SC dari fahrilbotz
global.image = 'https://telegra.ph/file/e2a9c1963a04a2f6f3c02.jpg'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
