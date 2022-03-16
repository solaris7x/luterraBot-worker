// TODO: replace any with proper types
interface InteractionResponseData {
  /**
   * is the response TTS
   */
  tts?: boolean
  /**
   * message content
   */
  content?: string
  /**
   * supports up to 10 embeds
   */
  embeds?: any[]
  // embeds?: array of embeds
  /**
   * allowed mentions object
   */
  allowed_mentions?: any
  // allowed_mentions ?	: allowed mentions
  /**
   * message flags combined as a bitfield(only SUPPRESS_EMBEDS and EPHEMERAL can be set)
   */
  flags?: number
  /**
   * message components
   */
  components?: any[]
  // components ?: array of components
  /**
   * attachment objects with filename and description
   */
  attachments?: any[]
  // attachments ?: array of partial attachment objects
}

export default InteractionResponseData
