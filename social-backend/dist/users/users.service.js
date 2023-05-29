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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async findOneByUsername(username) {
        return this.usersRepository.findOne({ where: { email: username } });
    }
    async findOne(id) {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('usuario nao encontrado');
        }
        delete user.password;
        return user;
    }
    async create(createUserDto) {
        try {
            const user = await this.usersRepository.save(createUserDto);
            return {
                msg: 'This action adds a new user',
                user: user,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Invalid fields. Please check the request.');
        }
    }
    async findAll() {
        const allUsers = await this.usersRepository.find();
        const usersWithoutPassword = allUsers.map(user => {
            const { password } = user, userWithoutPassword = __rest(user, ["password"]);
            return userWithoutPassword;
        });
        return usersWithoutPassword;
    }
    async update(id, dto) {
        let toUpdate = await this.usersRepository.findOneBy({ id });
        if (!toUpdate) {
            throw new common_1.NotFoundException('User not found');
        }
        delete toUpdate.password;
        let updated = Object.assign(toUpdate, dto);
        return await this.usersRepository.save(updated);
    }
    async delete(id) {
        const deleteResult = await this.usersRepository.delete(id);
        if (deleteResult.affected === 0) {
            throw new common_1.NotFoundException('User not found');
        }
    }
    async findById(id) {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user) {
            const errors = { User: ' not found' };
            throw new common_1.HttpException({ errors }, 404);
        }
        return this.buildUserRO(user);
    }
    buildUserRO(user) {
        throw new Error('Method not implemented.');
    }
    async findByEmail(email) {
        const user = await this.usersRepository.findOneBy({ email: email });
        return this.buildUserRO(user);
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map