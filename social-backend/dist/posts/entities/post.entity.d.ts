import { User } from "src/users/entities/user.entity";
export declare class Post {
    id: number;
    description: string;
    url_image: string;
    users: User[];
}
