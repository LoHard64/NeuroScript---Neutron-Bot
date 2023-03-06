let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  let imgr = flaaa.getRandom();
  let text = `*SYARAT & KETENTUAN*
    

📮 S&K
1. Jangan diperjual belikan Script ini
2. Jangan salah gunakan script ini!
3. Jangan di per jual belikan
4. Semua izin dan peraturan tertera pada Lisensi (GNU General Public License v3.0)
• Jika ada error di sc hub https://wa.me/6281212448859 atau Create issue di menu GitHub

--------Thanks to ✨---------
Allah SWT
My parents
All Contributors
All Creator Bot`;
  const templateButtons = [
    {
      index: 1,
      urlButton: {
        displayText: "NeuroScript",
        url: "https://github.com/LoHard64/NeuroScript",
      },
    },
  ];
  let tm = {
    text: text,
    footer: global.bottime,
    templateButtons: templateButtons,
    image: `${imgr + "Script"}`,
  };
  conn.sendMessage(m.chat, tm, m);
};
handler.help = ["sc"];
handler.tags = ["info"];
handler.command = /^(s(ourcecode|c))$/i;

export default handler;
