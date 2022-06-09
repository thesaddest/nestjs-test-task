import { Module } from '@nestjs/common';
import { WorkPeriodsService } from './work-periods.service';
import { WorkPeriodsController } from './work-periods.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {WorkPeriod} from "./work-period.model";
import {User} from "../users/users.model";
import {Team} from "../teams/teams.model";

@Module({
  providers: [WorkPeriodsService],
  controllers: [WorkPeriodsController],
  imports: [
      SequelizeModule.forFeature([WorkPeriod, User, Team])
  ]
})
export class WorkPeriodsModule {}
