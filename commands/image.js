const {
  ApplicationCommandOptionType,
  SlashCommandBuilder,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: config.OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("image")
    .setDescription("Creates AI Image Using Open AI Api!")
    .addStringOption((option) =>
      option
        .setName("prompt")
        .setDescription("Give a discription about the image to create")
        .setMaxLength(1250)
        .setRequired(true)
    ),
  async execute(interaction) {
    try {
      await interaction.deferReply();
      const prompt = interaction.options.getString("prompt");

      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        response_format: "url",
      });

      const image_url = response.data.data[0].url;

      const download_button = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel(`Download`)
          .setStyle(ButtonStyle.Link)
          .setURL(`${image_url}`)
          .setEmoji("1101133529607327764")
      );

      const result_embed = new EmbedBuilder()
        .setTitle("Image Generated!")
        .addFields({ name: "Prompt", value: prompt })
        .setImage(image_url)
        .setColor("#32cd32")
        .setFooter({
          text: `Requested by ${interaction.user.username}`,
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        });

      await interaction.editReply({
        embeds: [result_embed],
        components: [download_button],
      });
    } catch (err) {
      await interaction.editReply(
        `Image with that prompt can't be generated because of safety system.`
      );
      console.log(err);
    }
  },
};
