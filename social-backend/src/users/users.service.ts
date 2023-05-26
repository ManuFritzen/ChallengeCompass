import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {

  }

  async create(createUserDto: CreateUserDto) {
    // save = insert
    const user = await this.usersRepository.save(createUserDto);
    return {
      msg: 'This action adds a new user',
      user: user,
    };
  }

  async findAll() {
    // find = select
    const allusers = await this.usersRepository.find();
    return allusers;
  }


  async findOne(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    
    if (!user) {
      throw new NotFoundException('usuario nao encontrado');
    }
    
    delete user.password;
    return user;
  }

  async update(id: number, dto: UpdateUserDto){
    let toUpdate = await this.usersRepository.findOneBy({id});
    delete toUpdate.password;

    let updated = Object.assign(toUpdate, dto);
    return await this.usersRepository.save(updated);
  }

  async delete(id: number): Promise<DeleteResult> {    
    return await this.usersRepository.delete({ id });
  }

  async findById(id: number): Promise<User>{
    const user = await this.usersRepository.findOneBy({id});

    if (!user) {
      const errors = {User: ' not found'};
      throw new HttpException({errors}, 401);
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
