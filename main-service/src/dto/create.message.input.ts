import { MessageStatus, MessageType } from "src/enums/message.enums"

export class CreateMessageInput {
    type: MessageType
    status: MessageStatus
    changed: boolean
    user_id: number
}