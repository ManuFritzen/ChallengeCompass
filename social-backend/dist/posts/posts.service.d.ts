import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
export declare class PostsService {
    private postsRepository;
    constructor(postsRepository: Repository<Post>);
    create(createPostDto: CreatePostDto): Promise<{
        msg: string;
        post: CreatePostDto & Post;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
