import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Team} from "../teams/teams.model";
import {User} from "../users/users.model";

interface WorkPeriodCreationAttrs {
    from: string,
    to: string,
    weekDays: string,
    teamId: number,
    userId: number
}

@Table({tableName:'work-periods'})
export class WorkPeriod extends Model<WorkPeriod, WorkPeriodCreationAttrs> {

    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    from: string;

    @Column({type: DataType.STRING, allowNull: false})
    to: string;

    @Column({type: DataType.STRING, allowNull:false})
    weekDays: string;

    @ForeignKey(() => Team)
    @Column({type: DataType.INTEGER})
    teamId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
}