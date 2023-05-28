import { User } from "src/users/entities/user.entity";
import { Comment } from "src/comments/entities/comment.entity";
export declare class Post {
    id: number;
    user: string;
    users: User;
    post_date: Date;
    description: string;
    likes: number;
    url_image?: string;
    comments: Comment[];
}
