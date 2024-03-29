import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/api/v1/users/login')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post()
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.user, signInDto.password);
    }

}
