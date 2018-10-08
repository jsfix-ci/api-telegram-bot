import { ForceReply} from "../ForceReply";
import { InlineKeyboardMarkup} from "../InlineKeyboardMarkup";
import { OnReplyCallbackFunction } from "../OnReceiveReplyCallback";
import { ReplyKeyboardMarkup} from "../ReplyKeyboardMarkup";
import { ReplyKeyboardRemove} from "../ReplyKeyboardRemove";

export interface SendMessageOptionals {
  parse_mode?: string;
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;

  onReceiveReply?: OnReplyCallbackFunction;

  readonly [propName: string]: any;
}
