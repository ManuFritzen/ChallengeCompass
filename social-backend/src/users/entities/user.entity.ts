import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "src/posts/entities/post.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    user: string;

    @Column()
    birthdate: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Post, posts=> posts.users)
    posts: Post[];

}
