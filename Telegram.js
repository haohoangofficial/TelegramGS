/**
 * A simple method for testing your bot's authentication token. Requires no parameters. 
 * @returns Returns basic information about the bot in form of a User object.
 */
function getMe () {
    let method = 'getMe';
    return get_fetch(method);
}
/**
 * Use this method to send text messages. 
 * @param {*} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {*} text Text of the message to be sent, 1-4096 characters after entities parsing
 * @param {*Optional} parse_mode Mode for parsing entities in the message text. See formatting options for more details.
 * @param {*Optional} entities A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
 * @param {*Optional} disable_web_page_preview Disables link previews for links in this message
 * @param {*Optional} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {*Optional} reply_to_message_id If the message is a reply, ID of the original message
 * @param {*Optional} allow_sending_without_reply Pass True, if the message should be sent even if the specified replied-to message is not found
 * @param {*Optional} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns On success, the sent Message is returned.
 */
function sendMessage(
        chat_id,
        text,
        parse_mode=null,
        entities=null,
        disable_web_page_preview=false,
        disable_notification = false,
        reply_to_message_id = null,
        allow_sending_without_reply = null,
        reply_markup = null
    ) {
    let method = 'sendMessage';
    let options = {
        chat_id: chat_id,
        text: text,
        parse_mode: parse_mode,
        entities: entities,
        disable_web_page_preview: disable_web_page_preview,
        disable_notification: disable_notification,
        reply_to_message_id: reply_to_message_id,
        allow_sending_without_reply: allow_sending_without_reply,
        reply_markup: reply_markup
    }
    return get_fetch(method,options);
}