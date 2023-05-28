import { Post } from "src/posts/entities/post.entity";
import { Comment } from "src/comments/entities/comment.entity";
export declare class User {
    id: number;
    name: string;
    user: string;
    birthdate: string;
    email: string;
    password: string;
    profile_photo: string;
    posts: Post[];
    comments: Comment[];
}
