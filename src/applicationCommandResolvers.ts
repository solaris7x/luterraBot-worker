import InteractionFunction from "../typeHelpers/InteractionFunction"
import beep from "./commands/beep"

const applicationCommandResolvers = new Map<string, InteractionFunction>()
applicationCommandResolvers.set("beep", beep)

export default applicationCommandResolvers
