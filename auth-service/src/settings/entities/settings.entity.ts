import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("settings")
export class SettingsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  name: string;

  @Column()
  slug: string;

  @OneToOne(() => UserEntity, user => user.settings, {onDelete: "CASCADE"})
  @JoinColumn()
  user: UserEntity;
}
