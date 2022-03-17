import { APIInteractionResponse } from "discord-api-types/v10"

interface InteractionFunction {
  (body: any): APIInteractionResponse
}

export default InteractionFunction
