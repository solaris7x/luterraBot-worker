/**
 * The type of response that is being sent.
 */
enum InteractionResponseType {
  /**
   * Acknowledge a `PING`.
   */
  PONG = 1,
  /**
   * Respond with a message, showing the user's input.
   */
  CHANNEL_MESSAGE_WITH_SOURCE = 4,
  /**
   * Acknowledge a command without sending a message, showing the user's input. Requires follow-up.
   */
  DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5,
  /**
   * Acknowledge an interaction and edit the original message that contains the component later; the user does not see a loading state.
   */
  DEFERRED_UPDATE_MESSAGE = 6,
  /**
   * Edit the message the component was attached to.
   */
  UPDATE_MESSAGE = 7,
  /*
   * Callback for an app to define the results to the user.
   */
  APPLICATION_COMMAND_AUTOCOMPLETE_RESULT = 8,
  /*
   * Respond with a modal.
   */
  APPLICATION_MODAL = 9,
}

export default InteractionResponseType
