import { MessageType, MessageStatus } from "../entities/message.entity"

export class CreateMessageInput {
    type: MessageType
    status: MessageStatus
    changed: boolean
    user_id: number
}