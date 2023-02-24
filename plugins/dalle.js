import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text, chatUpdate }) => {
  if (!text)
    return reply(
      `Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`
    );
  const configuration = new Configuration({
    apiKey: "",
  });
  const from = m.chat;
  const mek = chatUpdate.messages[0];
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: text,
    n: 1,
    size: "512x512",
  });
  //console.log(response.data.data[0].url)
  m.reply(from, response.data.data[0].url, text, mek);
};
handler.help = ["img", "ai-img", "image"];
handler.tags = ["info", "fun"];
handler.command = /^(img|aiimg|image)$/i;
export default handler;
