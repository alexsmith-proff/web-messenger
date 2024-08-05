import { JobTitleEntity } from "src/jobtitle/entity/jobtitle.entity";
import { RoomEntity } from "src/room/entities/room.entity";
import { SubDivisionEntity } from "src/subdivision/entities/subdivision.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserRole {
    ADMIN = "admin",
    USER = "user"
}

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string    

    @Column()
    password: string   

    @Column({default: ''})
    name: string 

    @Column({default: ''})
    surname: string 

    // @Column({default: ''})
    // birthday: Date 

    @Column({default: false})
    online: boolean
    
    // @Column({default: ''})
    // lastVisited: Date 

    @Column({default: ''})
    phoneInternal: string 

    @Column({default: ''})
    avatar: string 
    
    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole

    @ManyToOne(() => JobTitleEntity, jobtitle => jobtitle.users, {onDelete: "CASCADE"})
    jobTitle_ref: JobTitleEntity 

    @ManyToOne(() => SubDivisionEntity, subdivision => subdivision.users, {onDelete: "CASCADE"})
    @JoinColumn({name: 'subdivision_id'})
    subDivision_ref: SubDivisionEntity 

    @ManyToOne(() => RoomEntity, room => room.users, {onDelete: "CASCADE"})
    room_ref: RoomEntity 

    // @CreateDateColumn()
    // createdAt: Date

    // @UpdateDateColumn()
    // updatedAt: Date
}