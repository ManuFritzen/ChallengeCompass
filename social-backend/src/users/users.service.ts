import { BadRequestException, HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  find: any;
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {

  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email: username } });
  }
  

  async findOne(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    
    if (!user) {
      throw new NotFoundException('usuario nao encontrado');
    }
    
    delete user.password;
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.usersRepository.save(createUserDto);
      return {
        msg: 'This action adds a new user',
        user: user,
      };
    } catch (error) {
      throw new BadRequestException('Invalid fields. Please check the request.');
    }
  }

  async findAll() {
    const allUsers = await this.usersRepository.find();
  
    const usersWithoutPassword = allUsers.map(user => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  
    return usersWithoutPassword;
  }



  async update(id: number, dto: UpdateUserDto){
    let toUpdate = await this.usersRepository.findOneBy({id});
    if (!toUpdate) {
      throw new NotFoundException('User not found');
    }
    delete toUpdate.password;

    let updated = Object.assign(toUpdate, dto);
    return await this.usersRepository.save(updated);
  }

  async delete(id: number): Promise<void> {
    const deleteResult: DeleteResult = await this.usersRepository.delete(id);
  
    if (deleteResult.affected === 0) {
      throw new NotFoundException('User not found');
    }
  }

  async findById(id: number): Promise<User>{
    const user = await this.usersRepository.findOneBy({id});

    if (!user) {
      const errors = {User: ' not found'};
      throw new HttpException({errors}, 404);
    }

    return this.buildUserRO(user);
  }
  buildUserRO(user: User): User | PromiseLike<User> {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: string): Promise<User>{
    const user = await this.usersRepository.findOneBy({email: email});
    return this.buildUserRO(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
