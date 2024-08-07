import { MessageEntity } from "src/message/entities/message.entity";
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('messagedata')
export class MessageDataEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column()
    filename: string

    @OneToOne(() => MessageEntity, messages => messages.data, { onDelete: "CASCADE" })
    @JoinColumn()
    message: MessageEntity
}