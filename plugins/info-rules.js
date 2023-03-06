let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  let text = `\n┏━━ꕥ *[ Rules ]* ꕥ━━━⬣\n┃\n┃1. Spam Neutron Bot\n┃    _Sanksi : Peringatan/Blokir_\n┃\n┃2. Telepon/VidCall Bot\n┃   _Sanksi : Blokir_\n┃\n┃3. Memasukan Nomor Bot Ke Grup\n┃    Tanpa Izin\n┃   _Sanksi : Peringatan_\n┃\n┗━━ꕥ *[ Neutron Bot ]* ꕥ━⬣
`;
  const templateButtons = [
    {
      index: 1,
      urlButton: {
        displayText: "NOMOR DEVELOPER",
        url: `https://wa.me/628121448859`,
      },
    },
    { index: 4, quickReplyButton: { displayText: "Donasi", id: ".donasi" } },
  ];
  let tm = {
    text: text,
    footer: global.wm3,
    templateButtons: templateButtons,
  };
  conn.sendMessage(m.chat, tm, m);
};
handler.help = ["rules"];
handler.tags = ["rules"];
handler.command = /^(rules)$/i;

export default handler;
