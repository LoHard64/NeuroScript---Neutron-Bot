import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Neutron Bot\nNICKNAME:Arya Sukresno\nORG:Arya Sukresno\nTITLE:soft\nitem1.TEL;waid=6281212448859:+62 812-1244-8859\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.EMAIL;type=INTERNET: aryasukresno10@gmail.com\nitem2.X-ABLabel:✉️ Email Owner Neutron Bot\nitem3.ADR:;;🇮🇩 Indonesia;;;;\nitem3.X-ABADR:💬 More\nitem3.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:9 Oktober 2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: author, contacts: [{ vcard }] }}, { quoted: fkon })
let caption = `👋 Hai *@${who.split("@")[0]}*, Ini Owner *Neutron Bot* ya..`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['nomor']
handler.tags = ['nomor']

handler.command = /^(nomor)$/i

export default handler