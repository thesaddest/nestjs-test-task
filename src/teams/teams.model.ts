import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserTeams} from "./user-teams.model";

interface TeamCreationAttrs {
    name: string,
    logo: string
}

@Table({tableName:'teams'})
export class Team extends Model<Team, TeamCreationAttrs> {

    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, unique:true, allowNull: false})
    logo: string;

    @BelongsToMany(() => User, () => UserTeams)
    users: User[]
}