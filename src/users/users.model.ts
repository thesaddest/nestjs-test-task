import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {Team} from "../teams/teams.model";
import {UserTeams} from "../teams/user-teams.model";

interface UserCreationAttrs {
    email: string,
    name: string,
    timezone: string
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs> {

    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, unique:true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull:false})
    timezone: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    validated: boolean;

    @Column({type: DataType.STRING, allowNull: true})
    validationToken: string

    @BelongsToMany(() => Team, () => UserTeams)
    teams: Team[];
}