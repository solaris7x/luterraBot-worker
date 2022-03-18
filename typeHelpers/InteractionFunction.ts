import { APIInteractionResponse, APIInteraction } from "discord-api-types/v10"

interface InteractionFunction {
  (body: APIInteraction): APIInteractionResponse
}

export default InteractionFunction
