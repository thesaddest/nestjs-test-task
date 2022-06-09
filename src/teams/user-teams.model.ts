import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Team} from "./teams.model";


@Table({tableName:'user_teams', createdAt: false, updatedAt: false})
export class UserTeams extends Model<UserTeams> {

    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Team)
    @Column({type: DataType.INTEGER})
    teamId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
}