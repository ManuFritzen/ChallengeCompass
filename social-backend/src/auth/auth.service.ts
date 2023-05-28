import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor( 
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    async signIn(user: string, pass: string): Promise<any>{
        const userLogin = await this.usersService.findOneByUsername(user);

        if(userLogin.password !== pass || userLogin.user !== user){
            throw new UnauthorizedException('Usuário ou senha inválidos');
        }

        const payload = {sub: userLogin.id, username: userLogin.user};
        return {
            jwt: await this.jwtService.signAsync(payload),
        };
    }
}
