import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        msg: string;
        user: CreateUserDto & import("./entities/user.entity").User;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        user: string;
        birthdate: string;
        email: string;
        profile_photo: string;
        posts: import("../posts/entities/post.entity").Post[];
        comments: import("../comments/entities/comment.entity").Comment[];
    }[]>;
    findOne(id: number): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User & UpdateUserDto>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
