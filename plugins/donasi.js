import fs from "fs";
let handler = async (m, { conn, text, usedPrefix }) => {
  let img = fs.readFileSync("./thumbnail.jpg");
  let img2 = `https://telegra.ph/file/58ccab17455e3a57f69d3.jpg`;
  return conn.sendButton(
    m.chat,
    "┌─「 Donasi • Pulsa 」\n│ • *Telkomsel:* +62 812-1244-8859\n│ • *3:* +62 877-8867-0868\n❏────\n┌─「 Donasi • E-Money 」\n│ • *Dana:* +62 812-1244-8859\n│ • *Gopay:* +62 812-1244-8859\n❏────\n┌─「 Donasi • Global Payment 」\n│ • *PayPal:* https://paypal.me/aryasucc\n│\n❏────",
    "Makasih, thanks for your donation...",
    [
      ["MENU", usedPrefix + "menu"],
      ["OWNER", usedPrefix + "owner"],
    ],
    m,
    {
      contextInfo: {
        externalAdReply: {
          mediaUrl: "https://instagram.com/aryasukresno",
          mediaType: "VIDEO",
          title: "Donasi ke Arya Sukresno",
          body: bottime,
          previewType: 0,
          thumbnail: img,
        },
      },
    }
  );
};
handler.help = ["donasi"];

handler.tags = ["info"];

handler.command = /^(donasi|donate)$/i;

export default handler;
