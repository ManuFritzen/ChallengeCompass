import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    user: string;

    @Column()
    birthdate: string;

    @Column()
    email: string;

    @Column()
    password: string;

}
