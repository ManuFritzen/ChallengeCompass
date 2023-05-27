import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "src/posts/entities/post.entity";
import { User } from "src/users/entities/user.entity";



@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Post, (post) => post.comments)
    post: Post;

    @Column()
    user: string;
    
    @ManyToOne(() => User, (use) => use.comments)
    use: User;

    @Column()
    post_id: number;

    @Column()
    comment: string;

}
