import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text, usedPrefix, command, chatUpdate }) => {
  const from = m.key.remoteJid;
  const reply = m.reply;
  if (!text)
    return m.reply(
      `Membuat gambar dari AI.\n\nContoh:\n${usedPrefix}${command} Wooden house on snow mountain`
    );
  const configuration = new Configuration({
    apiKey: "",
  });

  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: text,
    n: 1,
    size: "512x512",
  });
  // console.log(m.key.remoteJid);
  //console.log(response.data.data[0].url)
  conn.sendFile(from, response.data.data[0].url, reply, text, m);
};
handler.help = ["img", "ai-img"];
handler.tags = ["info", "fun"];
handler.command = /^(img|aiimg|image)$/i;
export default handler;
