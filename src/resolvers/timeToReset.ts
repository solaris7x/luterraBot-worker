import { InteractionResponseType, MessageFlags } from "discord-api-types/v10"
import InteractionFunction from "../../typeHelpers/InteractionFunction"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import relativeTime from "dayjs/plugin/relativeTime"

const timeToReset: InteractionFunction = () => {
  dayjs.extend(utc)
  dayjs.extend(relativeTime)
  const dateUTCnow = dayjs.utc()
  let dateUTC10pm = dayjs.utc().hour(10).minute(0).second(0).millisecond(0)
  if (dateUTC10pm.diff(dateUTCnow) < 0) {
    dateUTC10pm = dateUTC10pm.add(1, "day")
  }
  const dailyResetETA = dateUTCnow.to(dateUTC10pm)
  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      tts: false,
      content: `⏳ Daily reset ${dailyResetETA} ⏳`,
      flags: MessageFlags.Ephemeral,
      embeds: [],
      allowed_mentions: { parse: [] },
    },
  }
}

export default timeToReset
