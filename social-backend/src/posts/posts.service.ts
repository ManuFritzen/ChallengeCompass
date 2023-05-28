import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,

    @InjectRepository(User)
    private usersRepository: Repository<User>
  ){

  }
  async create(createPostDto: CreatePostDto) {
    const { user } = createPostDto;
  
    const usuario = await this.usersRepository.findOneBy({ user });
  
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado. Não é possível cadastrar um post.');
    }
  
    const post = await this.postsRepository.save({
      ...createPostDto,
      users: usuario
    });

    const { users, ...postWithoutUsers } = post;

  
    return {
      ...postWithoutUsers,
      user: usuario.user
    };
  }


  async findAll(username: string) {
    const allPosts = this.postsRepository.find();
    const usuarios = this.usersRepository.findBy({ user: username });
  
    const [allPostsResult, usuariosResult] = await Promise.all([allPosts, usuarios]);
    return {
      posts: allPostsResult,
    };
  }

  async findOne(id: number) {
    const post = await this.postsRepository.findOneBy({ id });
    
    if (!post) {
      throw new NotFoundException('post nao encontrado');
    }
    
    return post;
  }

  async update(id: number, dto: UpdatePostDto) {
    let toUpdate = await this.postsRepository.findOneBy({id});

    let updated = Object.assign(toUpdate, dto);
    return await this.postsRepository.save(updated);
  }

  async delete(id: number) {
    return await this.postsRepository.delete({ id });
  }
}
