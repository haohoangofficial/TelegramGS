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

/**
 * 
 * @param {*} chat_id 	Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {*} from_chat_id 	Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
 * @param {*} message_id Message identifier in the chat specified in from_chat_id
 * @param {*Optional} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @returns 
 */
function forwardMessage(chat_id,from_chat_id,message_id,disable_notification=false) {
    let method = 'forwardMessage';
    let options = {
        chat_id: chat_id,
        from_chat_id: from_chat_id,
        message_id: message_id,
        disable_notification: disable_notification
    };
    return get_fetch(method,options);
}

function copyMessage(
    chat_id,
    from_chat_id,
    message_id,
    caption = null,
    parse_mode = null,
    caption_entities = null,
    disable_notification = null,
    reply_to_message_id = null,
    allow_sending_without_reply = null,
    reply_markup = null
) {
    let method = 'copyMessage';
    let options = {
        chat_id: chat_id,
        from_chat_id: from_chat_id,
        message_id: message_id,
        caption: caption,
        parse_mode: parse_mode,
        caption_entities: caption_entities,
        disable_notification: disable_notification,
        reply_to_message_id: reply_to_message_id,
        allow_sending_without_reply: allow_sending_without_reply,
        reply_markup: reply_markup
    };
    return get_fetch(method,options);
}

/**
 * Use this method to send photos. 
 * @param {*} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {*} photo Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20
 * @param {*Optional} caption Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
 * @param {*Optional} parse_mode Mode for parsing entities in the photo caption
 * @param {*Optional} caption_entities 	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @param {*Optional} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {*Optional} reply_to_message_id If the message is a reply, ID of the original message
 * @param {*Optional} allow_sending_without_reply Pass True, if the message should be sent even if the specified replied-to message is not found
 * @param {*Optional} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns On success, the sent Message is returned.
 */
function sendPhoto(
    chat_id,
    photo,
    caption = null,
    parse_mode = null,
    caption_entities = null,
    disable_notification = false,
    reply_to_message_id = null,
    allow_sending_without_reply = false,
    reply_markup = null
) {
    let method = 'sendPhoto'
    let options = {
        chat_id: chat_id,
        photo: photo,
        caption: caption,
        parse_mode: parse_mode,
        caption_entities: caption_entities,
        disable_notification: disable_notification,
        reply_to_message_id: reply_to_message_id,
        allow_sending_without_reply: allow_sending_without_reply,
        reply_markup: reply_markup
    }
    return get_fetch(method,options)
}

/**
 * 
 * @param {*} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @param {*} audio Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data.
 * @param {*} caption Audio caption, 0-1024 characters after entities parsing
 * @param {*} parse_mode Mode for parsing entities in the audio caption.
 * @param {*} caption_entities A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @param {*} duration Duration of the audio in seconds
 * @param {*} performer Performer
 * @param {*} title Track name
 * @param {*} thumb Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
 * @param {*} disable_notification Sends the message silently. Users will receive a notification with no sound.
 * @param {*} reply_to_message_id If the message is a reply, ID of the original message
 * @param {*} allow_sending_without_reply Pass True, if the message should be sent even if the specified replied-to message is not found
 * @param {*} reply_markup Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
 * @returns 
 */
function sendAudio(
    chat_id,
    audio,
    caption = null,
    parse_mode = null,
    caption_entities = null,
    duration = null,
    performer = null,
    title = null,
    thumb = null,
    disable_notification = false,
    reply_to_message_id = null,
    allow_sending_without_reply = false,
    reply_markup = null
) {
    let method = 'sendAudio'
    let options = {
        chat_id: chat_id,
        audio: audio,
        caption: caption,
        parse_mode: parse_mode,
        caption_entities: caption_entities,
        duration: duration,
        performer: performer,
        title: title,
        thumb: thumb,
        disable_notification: disable_notification,
        reply_to_message_id: reply_to_message_id,
        allow_sending_without_reply: allow_sending_without_reply,
        reply_markup: reply_markup
    }
    return get_fetch(method,options)
}

