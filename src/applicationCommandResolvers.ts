import InteractionFunction from "../typeHelpers/InteractionFunction"
import beep from "./resolvers/beep"

const applicationCommandResolvers = new Map<string, InteractionFunction>()
applicationCommandResolvers.set("beep", beep)

export default applicationCommandResolvers
