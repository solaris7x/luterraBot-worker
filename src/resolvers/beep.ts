import { InteractionResponseType, MessageFlags } from "discord-api-types/v10"
import InteractionFunction from "../../typeHelpers/InteractionFunction"

const beep: InteractionFunction = () => {
  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      tts: false,
      content: "🤖 Boop 🤖",
      flags: MessageFlags.Ephemeral,
      embeds: [],
      allowed_mentions: { parse: [] },
    },
  }
}

export default beep
