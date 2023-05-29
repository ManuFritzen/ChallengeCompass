import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "src/posts/entities/post.entity";
import { User } from "src/users/entities/user.entity";



@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'CASCADE' })
    post: Post;

    @ManyToOne(() => User, (use) => use.comments, { onDelete: 'CASCADE' })
    user: User;

    @Column()
    comment: string;

}
