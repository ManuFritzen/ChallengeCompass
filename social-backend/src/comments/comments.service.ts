import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,

    @InjectRepository(Post)
    private postsRepository: Repository<Post>,

    @InjectRepository(User)
    private usersRepository: Repository<User>
  ){

  }

  async create(createCommentDto: CreateCommentDto) {
    const { user } = createCommentDto;
    const { post_id } = createCommentDto;

    const usuario = await this.usersRepository.findOneBy({ user });
    const postPubli = await this.postsRepository.findOneBy( {id: post_id} );
    if (!usuario) {
      throw new NotFoundException('usuario nao encontrado, nao eh possivel comentar')
    }
    if (!postPubli) {
      throw new NotFoundException('publicação nao encontrada, nao eh possivel comentar')
    }

    const comment = await this.commentsRepository.save([{
      post: postPubli,
      use: usuario,
      comment: createCommentDto.comment,
    }]);
    return {
      comment: createCommentDto.comment,
      post_id: postPubli.id,
      user: usuario.user,
      
    };
  }

  findAll() {
    const allcomments = this.commentsRepository.find();
    return allcomments;
  }

  async findOne(id: number) {
    const comment = await this.commentsRepository.findOneBy({ id });

    if(!comment){
      throw new NotFoundException('Comentário não encontrado');
    }
    return comment;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
