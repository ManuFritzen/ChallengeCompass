import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<{
        user: string;
        decription: string;
        likes: number;
        url_image: string;
        id: number;
        post_date: Date;
        description: string;
        comments: import("../comments/entities/comment.entity").Comment[];
    }>;
    findAll(): Promise<import("./entities/post.entity").Post[]>;
    findOne(id: string): Promise<import("./entities/post.entity").Post>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("./entities/post.entity").Post & UpdatePostDto>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
