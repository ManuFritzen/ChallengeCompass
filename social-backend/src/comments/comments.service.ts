import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

  async create(createCommentDto: CreateCommentDto, id: number) {
    
      const { user } = createCommentDto;

      const usuario = await this.usersRepository.findOneBy({ user });
      const postPubli = await this.postsRepository.findOneBy( {id} );
      if (!usuario) {
        throw new NotFoundException('usuario nao encontrado, nao eh possivel comentar')
      }
      if (!postPubli) {
        throw new NotFoundException('publicação nao encontrada, nao eh possivel comentar')
      }

      const comment = await this.commentsRepository.save([{
        post: postPubli,
        user: usuario,
        comment: createCommentDto.comment,
      }]);
      return {
        post_id: postPubli.id,
        user: usuario.user,
        comment: createCommentDto.comment
      }
  }

  async findAll( id: number) {
    const postsAll = await this.postsRepository.findOneBy({ id });
    const commentsAll = await this.commentsRepository.find({ relations: ['post', 'user'] });
  
    
      const comments = commentsAll.filter(comment => comment.post.id === postsAll.id).map(comment => ({
        post_id: comment.post.id,
        id: comment.id,
        user: comment.user.user,
        comment: comment.comment
      }));
  
      return {
        comments
      };
   
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

  async remove(id: number) {
    return await this.commentsRepository.delete({ id });  }
}
