import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne,  OneToMany,  PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Comment } from "src/comments/entities/comment.entity";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user: string;

    @ManyToOne(() => User, (user) => user.posts)
    users: User;

    @CreateDateColumn({ name: 'post_date'})
    post_date: Date;

    @Column({ length: 100})
    description: string;

    @Column({nullable: true})
    likes: number;

    @Column({nullable: true})
    url_image?: string;

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];


}


