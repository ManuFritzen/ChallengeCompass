import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<{
        msg: string;
        user: CreateUserDto & User;
    }>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, dto: UpdateUserDto): Promise<User & UpdateUserDto>;
    delete(id: number): Promise<DeleteResult>;
    findById(id: number): Promise<User>;
    buildUserRO(user: User): User | PromiseLike<User>;
    findByEmail(email: string): Promise<User>;
    remove(id: number): string;
}
