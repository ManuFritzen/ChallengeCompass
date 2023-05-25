import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<{
        msg: string;
        post: CreatePostDto & import("./entities/post.entity").Post;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
