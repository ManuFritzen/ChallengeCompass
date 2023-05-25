import { Column, Entity, ManyToMany, ManyToOne,  PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100})
    description: string;

    @Column()
    url_image: string;

    @ManyToOne(() => User, users => users.posts)
    users: User[]
}


