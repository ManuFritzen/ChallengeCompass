import { Post } from "src/posts/entities/post.entity";
import { User } from "src/users/entities/user.entity";
export declare class Comment {
    id: number;
    post: Post;
    user: User;
    comment: string;
}
