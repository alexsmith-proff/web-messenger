import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('subdivision')
export class SubDivisionEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({default: ''})
    name: string
    @Column()
    slug: string

    @OneToMany(() => UserEntity, user => user.subDivision_ref)
    users: UserEntity[]
}