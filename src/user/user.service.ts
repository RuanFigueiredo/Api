import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user-input';
import { user } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(user)
        private userRepository: Repository<user>
    ) {}
        async createUser(data:CreateUserInput): Promise<user> {
            const user = await this.userRepository.create(data);
            const userSaved = await this.userRepository.save(user);

            if(!userSaved){
                throw new InternalServerErrorException('Problema ao criar usuário!')
            }

            return userSaved;
        }
}


