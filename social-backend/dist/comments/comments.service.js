"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("../posts/entities/post.entity");
const user_entity_1 = require("../users/entities/user.entity");
const comment_entity_1 = require("./entities/comment.entity");
const typeorm_2 = require("typeorm");
let CommentsService = class CommentsService {
    constructor(commentsRepository, postsRepository, usersRepository) {
        this.commentsRepository = commentsRepository;
        this.postsRepository = postsRepository;
        this.usersRepository = usersRepository;
    }
    async create(createCommentDto, id) {
        const { user } = createCommentDto;
        const usuario = await this.usersRepository.findOneBy({ user });
        const postPubli = await this.postsRepository.findOneBy({ id });
        if (!usuario) {
            throw new common_1.NotFoundException('usuario nao encontrado, nao eh possivel comentar');
        }
        if (!postPubli) {
            throw new common_1.NotFoundException('publicação nao encontrada, nao eh possivel comentar');
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
        };
    }
    async findAll(id) {
        const postsAll = await this.postsRepository.findOneBy({ id });
        const commentsAll = await this.commentsRepository.find({ relations: ['post'] });
        const comments = commentsAll.map(comment => ({
            post_id: postsAll.id,
            id: comment.id,
            user: postsAll.user,
            comment: comment.comment
        }));
        return {
            comments
        };
    }
    async findOne(id) {
        const comment = await this.commentsRepository.findOneBy({ id });
        if (!comment) {
            throw new common_1.NotFoundException('Comentário não encontrado');
        }
        return comment;
    }
    update(id, updateCommentDto) {
        return `This action updates a #${id} comment`;
    }
    async remove(id) {
        return await this.commentsRepository.delete({ id });
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __param(1, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map