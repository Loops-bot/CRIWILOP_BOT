let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let user = global.db.data.users[m.sender]
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
/*var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*-Solo asuntos importantes-*`
let buttonMessage= {
'document': { url: `https://github.com/CRIWILOP` },
'mimetype': `application/${document}`,
'fileName': `â£ð¾ððððððð_ð½ððà¿`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/CRIWILOP',
'mediaType': 2,
'previewType': 'pdf',
'title': botname,
'body': `â£á´ÊÉªá´¡ÉªÊá´á´à¿`,
'thumbnail': global.imgmenu,
'sourceUrl': 'https://wa.me/573244488043' }},
'mentions': [m.sender],
'caption': texto1,
'footer': `\n${global.saludo}`,
'buttons':[
{buttonId: `${usedPrefix}owner`, buttonText: {displayText: 'Ownerð¢'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*- Solo asuntos importantes -*`, estilo, { mentions: [m.sender] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;â£á´ÊÉªá´¡ÉªÊá´á´à¿/á¦á´;;;\nFN:â£á´ÊÉªá´¡ÉªÊá´á´à¿/á¦á´\nORG:â£á´ÊÉªá´¡ÉªÊá´á´à¿/á¦á´\nTITLE:\nitem1.TEL;waid=50499698072:+50499698072\nitem1.X-ABLabel:â£á´ÊÉªá´¡ÉªÊá´á´à¿/á¦á´\nX-WA-BIZ-DESCRIPTION:ð±Creador oficial de â£ð¾ððððððð_ð½ððà¿.\nX-WA-BIZ-NAME:â£á´ÊÉªá´¡ÉªÊá´á´à¿/á¦á´\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'â£á´ÊÉªá´¡ÉªÊá´á´à¿/á¦á´', contacts: [{ vcard }] }}, {quoted: m})
}
handler.tags =['info']
handler.help = ['script']
handler.customPrefix = /^(@50499698072)$/i
handler.command = new RegExp
export default handler
