let handler = async(m, { conn, command }) => {

let text = `*_๐ดEl Owner @${m.sender.split`@`[0]} ha empezado una reuniรณn y por eso se te ha mandado este mensaje, dirigirse al grupo de Staff lo mรกs pronto posible ya que puede tratarse de un asunto importante._*

_- โฃ๐พ๐๐๐๐๐๐๐_๐ฝ๐๐เฟ | sแดแดาา๐ชด_`
m.reply('*_๐ชด Enviando mensaje de reuniรณn a todos los owners._*')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '999999999', text, m)
                        
                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    }

}
handler.tags = ['owner']
handler.command = handler.help =['reunionstaff']
handler.rowner = true

export default handler