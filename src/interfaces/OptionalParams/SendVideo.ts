import { ReadStream } from "fs";

import { OnReplyCallbackFunction } from "../../types";
import { ForceReply} from "../ForceReply";
import { InlineKeyboardMarkup} from "../InlineKeyboardMarkup";
import { ReplyKeyboardMarkup} from "../ReplyKeyboardMarkup";
import { ReplyKeyboardRemove} from "../ReplyKeyboardRemove";

export interface SendVideoOptionals {
  /**
   * Duration of sent video in seconds
   */
  duration?: number;
  /**
   * Video width
   */
  width?: number;
  /**
   * Video height
   */
  height?: number;
  /** Optional. Thumbnail of the file sent. */
  thumb?: ReadStream | string;
  /**
   * Video caption (may also be used when resending videos by file_id), 0-200 characters
   */
  caption?: string;
  /** Optional. Send Markdown or HTML */
  parse_mode?: string;
  /** Pass True, if the uploaded video is suitable for streaming */
  supports_streaming?: boolean;
  /**
   * Sends the message silently. iOS users will not receive a notification,
   * Android users will receive a notification with no sound.
   */
  disable_notification?: boolean;
  /**
   * If the message is a reply, ID of the original message
   */
  reply_to_message_id?: number;
  /**
   * Additional interface options.
   * A JSON-serialized object for an inline keyboard, custom reply keyboard,
   * instructions to remove reply keyboard or to force a reply from the user.
   */
  reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;

  onReceiveReply?: OnReplyCallbackFunction;
}
