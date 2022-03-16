/**
 * The type of interaction this request is.
 */
enum InteractionType {
  /**
   * A ping.
   */
  PING = 1,
  /**
   * A command invocation.
   */
  APPLICATION_COMMAND = 2,
  /**
   * Usage of a message's component.
   */
  MESSAGE_COMPONENT = 3,
  /**
   * An interaction sent when an application command option is filled out.
   */
  APPLICATION_COMMAND_AUTOCOMPLETE = 4,
  /**
   * An interaction sent when a modal is submitted.
   */
  APPLICATION_MODAL_SUBMIT = 5,
}

export default InteractionType
