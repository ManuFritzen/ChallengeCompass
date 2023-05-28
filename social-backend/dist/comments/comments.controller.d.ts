import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto, id: string): Promise<{
        post_id: number;
        user: string;
        comment: string;
    }>;
    findAll(id: string): Promise<{
        comments: {
            post_id: number;
            id: number;
            user: string;
            comment: string;
        }[];
    }>;
    findOne(id: string): Promise<import("./entities/comment.entity").Comment>;
    update(id: string, updateCommentDto: UpdateCommentDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
