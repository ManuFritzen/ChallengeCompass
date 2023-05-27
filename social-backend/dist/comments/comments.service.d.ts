import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
export declare class CommentsService {
    private commentsRepository;
    private postsRepository;
    private usersRepository;
    constructor(commentsRepository: Repository<Comment>, postsRepository: Repository<Post>, usersRepository: Repository<User>);
    create(createCommentDto: CreateCommentDto): Promise<{
        comment: string;
        post_id: number;
        user: string;
    }>;
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    update(id: number, updateCommentDto: UpdateCommentDto): string;
    remove(id: number): string;
}
