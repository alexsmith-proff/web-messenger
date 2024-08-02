import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('room')
export class RoomEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({default: ''})
    name: string

    @Column()
    slug: string

    @OneToMany(() => UserEntity, user => user.room_ref)
    users: UserEntity[]
}