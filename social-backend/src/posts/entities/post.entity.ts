import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne,  PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.posts)
    user: User;

    @CreateDateColumn({ name: 'post_date'})
    post_date: Date;

    @Column({ length: 100})
    description: string;

    @Column()
    likes?: number;

    @Column()
    url_image?: string;


}


