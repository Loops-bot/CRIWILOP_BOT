let handler = async (m, { conn }) => {
let msg = `
*πHola @${m.sender.split`@`[0]} aquΓ­ tienes los grupos oficiales de β£πΎπππππππ_π½ππΰΏ.*

   *_β­ββββ ββ’ 1 β’β_*
  *_βπβ https://chat.whatsapp.com/FuCejDvIzwJ01jFHhH4GR5_*
*_β°βββββββββββββββββ_*

   *_β­ββββ ββ’ 2 β’β_*
  *_βπ±β https://chat.whatsapp.com/Gwg4VdXlCcpKW6jxaf6LRl_*
*_β°βββββββββββββββββ_*

   *_β­ββββ ββ’ 3 β’β_*
  *_βπβ https://chat.whatsapp.com/EYESQzhtwLr81HZwCXLtwL_*
*_β°βββββββββββββββββ_*

   *_β­ββββ ββ’ 4 β’β_*
  *_βπ±β VacΓ­o_*
*_β°βββββββββββββββββ_*

   *_β­ββββ ββ’ 5 β’β_*
  *_βπβ VacΓ­o_*
*_β°βββββββββββββββββ_*
 `
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['gruposofc']
handler.tags = ['info']
export default handler