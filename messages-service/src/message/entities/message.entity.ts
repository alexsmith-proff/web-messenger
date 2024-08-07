import { MessageDataEntity } from "src/messagedata/entities/messagedata.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum MessageType {
    TEXT = "text",
    IMAGE = "image",
    VIDEO = "video",
    AUDIO = "audio"
}

export enum MessageStatus {
    READ = "read",
    NOT_READ = "not_read",
    NOT_DELIVERED = "not_delivered"
}


@Entity('message')
export class MessageEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: MessageType

    @Column()
    status: MessageStatus

    @Column({default: false})
    changed: boolean

    @OneToOne(() => MessageDataEntity, messageData => messageData.message, {eager: true, cascade: true})
    data: MessageDataEntity

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}