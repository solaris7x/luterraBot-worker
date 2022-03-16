import InteractionResponse from "../../typeHelpers/InteractionResponse"
import InteractionResponseType from "../../typeHelpers/InteractionResponse/InteractionResponseType"
import InteractionResponseFlags from "../../typeHelpers/InteractionResponse/InteractionResponseFlags"

const beep = (): InteractionResponse => {
  return {
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      tts: false,
      content: "Boop",
      flags: InteractionResponseFlags.EPHEMERAL,
      embeds: [],
      allowed_mentions: { parse: [] },
    },
  }
}

export default beep
