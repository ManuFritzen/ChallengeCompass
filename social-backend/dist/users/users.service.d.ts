import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    find: any;
    constructor(usersRepository: Repository<User>);
    findOneByUsername(username: string): Promise<User | undefined>;
    findOne(id: number): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<{
        msg: string;
        user: CreateUserDto & User;
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
    update(id: number, dto: UpdateUserDto): Promise<User & UpdateUserDto>;
    delete(id: number): Promise<void>;
    findById(id: number): Promise<User>;
    buildUserRO(user: User): User | PromiseLike<User>;
    findByEmail(email: string): Promise<User>;
    remove(id: number): string;
}
