import { UserEntity } from './../user/entities/user.entity';
import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, hash } from 'bcryptjs'
import { AuthLoginInput } from './dto/auth.login.input';
import { AuthRegisterInput } from './dto/auth.register.input';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly jwtService: JwtService
    ) { }

    async register(authRegisterInput: AuthRegisterInput) {
        const oldUser = await this.userRepository.findOneBy({
            email: authRegisterInput.email
        })
        if (oldUser) throw new HttpException('Email занят', HttpStatus.UNAUTHORIZED)
        const salt = await genSalt(7)
        const newUser = await this.userRepository.create({
            email: authRegisterInput.email,
            password: await hash(authRegisterInput.password, salt),
            name: authRegisterInput.name,
            surname: authRegisterInput.surnamename            
        })
        const user = await this.userRepository.save(newUser)
        return {
            user: this.returnUserFields(user),
            accessToken: await this.issueAccessToken(user.id)
        }
    }

    async login(authLoginInput: AuthLoginInput) {
        const user = await this.validateUser(authLoginInput)
        return {
            user: this.returnUserFields(user),
            accessToken: await this.issueAccessToken(user.id)
        }
    }

    async getProfile(token): Promise<UserEntity> {
        const jwt = this.jwtService.decode(token)
        const id = jwt['id']
        const user = await this.userRepository.findOne({
            where: {
                id,
            },
            // relations: {
            //     orders: true
            // }
        });
        if (!user) throw new HttpException('Юзер не найден', HttpStatus.UNAUTHORIZED)
        return user;
    }


    async validateUser(authLoginInput: AuthLoginInput) {
        const user = await this.userRepository.findOne({
            where: {
                email: authLoginInput.email
            },
            select: ['id', 'email', 'password']
        })
        if (!user) throw new UnauthorizedException('Неверный логин/пароль')
        const isValidPassword = await compare(authLoginInput.password, user.password)
        if (!isValidPassword) throw new UnauthorizedException('Неверный логин/пароль')
        return user
    }

    async issueAccessToken(userId: number) {
        const data = {
            id: userId
        }
        return await this.jwtService.signAsync(data, {
            expiresIn: '7d'
            // expiresIn: 25 //25 секунд
        })
    }


    returnUserFields(user: UserEntity) {
        return {
            id: user.id,
            email: user.email
        }

    }

}