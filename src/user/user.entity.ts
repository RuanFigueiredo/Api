import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class user{
    
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: String;

    @Column()
    nome: String;

    @Column()
    email:String;
    

}
