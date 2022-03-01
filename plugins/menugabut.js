let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai Kak ${conn.getName(m.sender)}\nSaya fahrilbotz`,
                        "description": " 😱 *hai kak btw ini owner ku buat nya pas lagi gabut*\n♡ ㅤ    ❍ㅤ      ⎙ㅤ     ⌲",
                        "buttonText": "klick here",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "MENU utama",
                                        "description": "I Want To Use All Menu bye 漏fahrilbot",
                                        "rowId": "#menu"
                                        },{
                                    	"title": "Donasi Bot",
                                        "description": "I Want To Use Donasi Bot",
                                        "rowId": "#donasi"
                                        },{
                                    	"title": "grub bot",
                                        "description": "I Want To Use Youtube Bot",
                                        "rowId": "#gcbot"
                                        },{
                                    	"title": "sewabot",
                                        "description": "I Want To Use Instagram Bot",
                                        "rowId": "#sewa"
                                        },{
                                        "title": "donasi",
                                        "description": "I Want To Use Sewa Menu",
                                        "rowId": "#donasi"
                                        },{
                                        "title": "Report Bug",
                                        "description": "I Want To Use Report Bug",
                                        "rowId": "#report *Bang Botnya Ngebug*"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['menugabut']
handler.tags = ['info']

handler.command = /^(menugabut)$/i

module.exports = handler