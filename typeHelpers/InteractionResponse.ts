import InteractionResponseType from "./InteractionResponse/InteractionResponseType"
import InteractionResponseData from "./InteractionResponse/InteractionResponseData"

interface InteractionResponse {
  type: InteractionResponseType
  data: InteractionResponseData
}

export default InteractionResponse
