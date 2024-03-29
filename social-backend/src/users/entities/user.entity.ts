import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "src/posts/entities/post.entity";
import { Comment } from "src/comments/entities/comment.entity";

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

    @Column()
    profile_photo: string;

    @OneToMany(() => Post, (post)=> post.user, { cascade: true })
    posts: Post[];

    @OneToMany(() => Comment, (comment) => comment.user, { cascade: true })
    comments: Comment[];

}
