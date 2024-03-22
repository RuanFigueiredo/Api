import { InputType } from '@nestjs/graphql';
import { IsString, IsEmail, IsNotEmpty} from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({message: 'Este campo não pode estar vazio'})
  name: string;
  
  @IsEmail()
  @IsNotEmpty({message: 'Este campo não pode estar vazio'})
  email: string;

}