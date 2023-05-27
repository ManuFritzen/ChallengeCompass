import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { DeleteResult, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
export declare class PostsService {
    private postsRepository;
    private usersRepository;
    constructor(postsRepository: Repository<Post>, usersRepository: Repository<User>);
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
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post>;
    update(id: number, dto: UpdatePostDto): Promise<Post & UpdatePostDto>;
    delete(id: number): Promise<DeleteResult>;
}
