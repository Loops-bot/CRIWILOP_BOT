import db from '../lib/database.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let fa = `
Cuanto quieres apostar? 

๐ Ejemplo :
*${usedPrefix + command}* 100`.trim()
    if (!args[0]) throw fa
    if (isNaN(args[0])) throw fa
    let apuesta = parseInt(args[0])
    let users = global.db.data.users[m.sender]
    let time = users.lastslot + 10000
    if (new Date - users.lastslot < 10000) throw `โณ Espere ${msToTime(time - new Date())}`
    if (apuesta < 100) throw 'โณ๏ธ Mรญnimo de la apuesta es *100 XP*'
    if (users.exp < apuesta) {
        throw `โณ๏ธ Tu *XP* no es suficiente`
    }

    let emojis = ["๐", "๐", "๐๏ธ"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = `GANASTE ๐   *+${apuesta + apuesta} XP*`
        users.exp += apuesta
    } else if (a == b || a == c || b == c) {
        end = `๐ฎ Casi lo logras sigue intentando :) \nTen *+10 XP*`
        users.exp += 10
    } else {
        end = `Perdiste  *-${apuesta} XP*`
        users.exp -= apuesta
    }
    users.lastslot = new Date * 1
    let name = await conn.getName(m.sender)
    let fakemsg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { "extendedTextMessage": { "text": `${end}\nโข ${name}`, "title": 'โฃ๐พ๐๐๐๐๐๐๐_๐ฝ๐๐เฟ', 'jpegThumbnail': catalogo}}}
    return await conn.reply(m.chat,
        `
  ๐ฐ | *SLOTS* 
โโโโโโโโโโ
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
โโโโโโโโโโ `, fakemsg) 
}
handler.help = ['slot *<apuesta>*']
handler.tags = ['game']
handler.command = ['slot']
handler.register = true

export default handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + " m " + seconds + " s "
}


