import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('jobtitle')
export class JobTitleEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({default: ''})
    name: string

    @Column()
    slug: string

    @OneToMany(() => UserEntity, user => user.jobTitle_ref, { eager: true, cascade: true })
    users: UserEntity[]
}