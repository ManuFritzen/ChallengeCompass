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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const post_entity_1 = require("./entities/post.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
let PostsService = class PostsService {
    constructor(postsRepository, usersRepository) {
        this.postsRepository = postsRepository;
        this.usersRepository = usersRepository;
    }
    async create(createPostDto) {
        const { user } = createPostDto;
        const usuario = await this.usersRepository.findOneBy({ user });
        if (!usuario) {
            throw new common_1.NotFoundException('Usuário não encontrado. Não é possível cadastrar um post.');
        }
        const post = await this.postsRepository.save(Object.assign(Object.assign({}, createPostDto), { users: usuario }));
        const { users } = post, postWithoutUsers = __rest(post, ["users"]);
        return Object.assign(Object.assign({}, postWithoutUsers), { user: usuario.user });
    }
    async findAll(username) {
        const allPosts = this.postsRepository.find();
        const usuarios = this.usersRepository.findBy({ user: username });
        const [allPostsResult, usuariosResult] = await Promise.all([allPosts, usuarios]);
        return {
            posts: allPostsResult,
        };
    }
    async findOne(id) {
        const post = await this.postsRepository.findOneBy({ id });
        if (!post) {
            throw new common_1.NotFoundException('Post not found');
        }
        return post;
    }
    async update(id, dto) {
        let toUpdate = await this.postsRepository.findOneBy({ id });
        if (!toUpdate) {
            throw new common_1.NotFoundException('Post not found');
        }
        let updated = Object.assign(toUpdate, dto);
        return await this.postsRepository.save(updated);
    }
    async delete(id) {
        return await this.postsRepository.delete({ id });
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map